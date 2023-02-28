import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MoviesDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
    return (
        <Router>
            <header className="header-title">
                <Link to="/">
                    <h1 className={styles.title}>Top 20Films</h1>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId">
                        <MovieDetails />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}
