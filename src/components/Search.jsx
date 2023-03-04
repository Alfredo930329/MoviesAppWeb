import styles from "./assets/Search.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");
    const navigate = useNavigate();

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
                        setQuery({ search: value });
                        // navigate("/?search=" + value);
                    }}
                    placeholder="Buscar peliculas"
                    aria-label="Buscar películas"
                />
            </div>
        </form>
    );
}
