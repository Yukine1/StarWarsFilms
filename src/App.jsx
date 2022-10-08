import { useState, useEffect } from "react";
import { FilmItems } from "./components/Items/FilmItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmsContainer } from "./components/FilmDetails/FilmsContainer";
import { StarWarsContext } from "./Contexts/StarWarsContext";
import classNames from "classnames";
import styles from "./styles.module.css";

export const App = () => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [films, setFilms] = useState([]);

  // console.log("starShips: ", starShips);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFilms(result);
        },
        (err) => {
          setIsLoaded(true);
          setErr(err);
        }
      );
  }, []);

  if (err) {
    return <div>Error: {err.message}</div>;
  } else if (!isLoaded) {
    return <div className={styles.loading}>Loading...</div>;
  } else {
    return (
      <div className={classNames(styles.wrapper, classNames)}>
        <header className={styles.header}>
          Mobiquity Test Code Assignment
        </header>
        <main className={styles.main}>
          <StarWarsContext.Provider value={films.results}>
            <BrowserRouter>
              <Routes>
                <Route index element={<FilmItems />}></Route>
                <Route path=":title" element={<FilmsContainer />}></Route>
              </Routes>
            </BrowserRouter>
          </StarWarsContext.Provider>
        </main>
        <footer className={styles.footer}>
          © Copyright by Oleksandr Kolva
        </footer>
      </div>
    );
  }
};
