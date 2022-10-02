import { useState, useEffect } from "react";
import { FilmItems } from "./components/Films/FilmItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmsContainer } from "./components/FilmDetails/FilmsContainer";
import { StarWarsContext } from "./Contexts/StarWarsContext";
import classNames from "classnames";
import styles from "./styles.module.css";

export const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={classNames(styles.container, classNames)}>
        <header className={styles.header}>
          Mobiquity Test Code Assignment
        </header>
        <main className={styles.main}>
          <StarWarsContext.Provider value={items.results}>
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
