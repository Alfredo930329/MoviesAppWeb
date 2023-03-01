import styles from "./assets/MovieDetails.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { description, genres } from "../utils/getMoviesDetails";


export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const lang = "?language=es"; // Switch Spanich
    
    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId + lang).then((data) => {
            setIsLoading(false);
            setMovie(data);
        });
    }, [movieId]);

    if (isLoading) {
        return <Spinner/>
    }
    
    if (!movie) {
        return null;
    }

    const imageUrl = getMovieImg(movie.poster_path, 300);
    const details = description(movie.overview);
    const genero = genres(movie.genres.map((genre) => genre.name).join(", "));
    return (
        <div className={`${styles.detailContainer} ${styles.movieDetails}`}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl}
                alt={movie.title}
            />
            {/* <div>
                <p className={styles.vote}>
                    <strong className={styles.strongStyles}>Votos: </strong>{" "}
                    {movie.vote_count}
                {"  "}
                    <strong className={styles.strongStyles}>Calificacion: </strong>{" "}
                    {movie.vote_average}
                </p>
            </div> */}

            <div className={`${styles.col} ${styles.colText}`}>
                <p className={styles.firstItem}>
                    <strong className={styles.strongStyles}>Título: </strong>{" "}
                    {movie.title}
                </p>
                <p>
                    <strong className={styles.strongStyles}>Género: </strong>
                    {genero}
                </p>
                <p>
                    <strong className={styles.strongStyles}>
                        Descripción:{" "}
                    </strong>{" "}
                    {details}
                </p>
            </div>
            <div className={styles.btnReturn}><Link to="/">VOLVER</Link></div>
        </div>
    );
}
