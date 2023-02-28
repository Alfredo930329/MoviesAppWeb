import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { ImSearch } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText);
    };

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={styles.searchButton} type="submit">
                    <ImSearch size={20} />
                </button>
            </div>
        </form>
    );
}
