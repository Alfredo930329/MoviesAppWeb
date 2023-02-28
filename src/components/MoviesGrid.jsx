import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";

export function MoviesGrid() {
    const [movies, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const lang = "?language=es"; // Switch Spanich

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? "/search/movie?query=" + search
            : "/discover/movie" + lang;
        get(searchUrl).then((data) => {
            setMovie(data.results);
            setIsLoading(false);
        });
    }, [search]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
            })}
        </ul>
    );
}