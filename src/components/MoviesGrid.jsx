import styles from "./assets/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid({ search }) {
    const [movies, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [, setHasMore] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
            setMovie((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        });
    }, [search, page]);

    if (!isLoading && movies.length === 0) {
        return <Empty/>;
    }
    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={true}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />;
                })}
            </ul>
        </InfiniteScroll>
    );
}
