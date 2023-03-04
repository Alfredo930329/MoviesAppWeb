import styles from "./assets/MoviesGrid.module.css";
import { MovieCard } from "./MovieCard";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";
import { useMovies } from "../hooks/useMovies";

export function MoviesGrid({ search }) {
    const { movies, isLoading, hasNextPage, fetchNextPage } = useMovies();

    if (!isLoading && movies.length === 0) {
        return <Empty />;
    }
    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasNextPage | isLoading}
            next={() => fetchNextPage()}
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
