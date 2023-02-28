import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";

export function LandingPage() {
    return (
        <div className="">
            <Search/>
            <MoviesGrid />
        </div>
    );
}
