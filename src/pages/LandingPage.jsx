import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebonuse";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
    const query = useQuery();
    const search = query.get("search");

    const debonucedSearch = useDebounce(search, 1000);

    return (
        <div>
            <Search />
            <MoviesGrid key={debonucedSearch} search={debonucedSearch} />
        </div>
    );
}
