import { MovieDetails } from "../pages/MoviesDetails";

export function genres(genero) {
    return genero ? MovieDetails.genres : "No se encontró género registrado.";
}

export function description(details) {
    return details ? MovieDetails.overview : "No se encontró sinopsis registrada.";
}

