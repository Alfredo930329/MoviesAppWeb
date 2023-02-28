import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
    const [movies, setMovie] = useState([]);
    const LANG = "/?language=es";

    useEffect(() => {
        get("/discover/movie" + LANG).then((data) => {
            setMovie(data.results);
        });
    }, []);

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
            })}
        </ul>
    );
}
