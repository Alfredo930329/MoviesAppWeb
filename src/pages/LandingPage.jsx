import { useSearchParams } from "react-router-dom";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebonuse";

export function LandingPage() {
    const [query] = useSearchParams();
    const search = query.get("search");

    const debonucedSearch = useDebounce(search, 1000);

    return (
        <div>
            <Search />
            <MoviesGrid key={debonucedSearch} search={debonucedSearch} />
        </div>
    );
}
