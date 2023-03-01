import styles from "./assets/Search.module.css";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        history.push("/?search=" + value);
                    }}
                    placeholder="Buscar por... Titulo, Actor, Genero"
                    aria-label="Buscar películas"
                />
            </div>
        </form>
    );
}
