import { useState, useEffect } from "react";
import { FilmItems } from "./components/Items/FilmItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmsContainer } from "./components/FilmDetails/FilmsContainer";
import { StarWarsContext } from "./Contexts/StarWarsContext";
import { DetailsContext } from "./Contexts/DetailsContext";
import { useStateCallback } from "./CustomeHooks/Hooks";
import classNames from "classnames";
import styles from "./styles.module.css";

const getPeople = async () => {
  const url = "https://swapi.dev/api/people";

  const res = await fetch(url);

  const { count, results } = await res.json();

  // zero case must be handled separately
  // otherwise we end up dividing by 0
  if (count === 0) return [];

  const pageLength = results.length;

  const pages = [
    results, // first page
    ...(await Promise.all(
      [
        // -1 because first page already fetched
        ...new Array(Math.ceil(count / pageLength) - 1).keys(),
      ].map(async (n) => {
        // +1 because zero-indexed
        // +1 because first page already fetched
        const page = n + 2;

        const res = await fetch(`${url}?page=${page}`);

        return (await res.json()).results;
      })
    )),
  ];

  return pages.flat();
};

const getStarships = async () => {
  const url = "https://swapi.dev/api/starships";

  const res = await fetch(url);

  const { count, results } = await res.json();

  // zero case must be handled separately
  // otherwise we end up dividing by 0
  if (count === 0) return [];

  const pageLength = results.length;

  const pages = [
    results, // first page
    ...(await Promise.all(
      [
        // -1 because first page already fetched
        ...new Array(Math.ceil(count / pageLength) - 1).keys(),
      ].map(async (n) => {
        // +1 because zero-indexed
        // +1 because first page already fetched
        const page = n + 2;

        const res = await fetch(`${url}?page=${page}`);

        return (await res.json()).results;
      })
    )),
  ];

  return pages.flat();
};

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [films, setFilms] = useState([]);
  const [err, setErr] = useStateCallback("");
  const [people, setPeople] = useStateCallback([]);
  const [starships, setStarships] = useStateCallback([]);
  const [isLoadedPeople, setIsLoadedPeople] = useStateCallback(false);
  const [isLoadedStarships, setIsLoadedStarships] = useStateCallback(false);

  const hadleClickPeople = () => {
    try {
      const btnText = document.getElementById("get-persons");
      if (!isLoadedPeople) {
        getPeople().then((result) => {
          setIsLoadedPeople(true);
          setPeople(result);
        });
        btnText.style.display = "none";
      } else return;
    } catch (err) {
      setErr(err.message);
    }
  };

  const hadleClickStarships = () => {
    const btnText = document.getElementById("get-starships");
    try {
      if (!isLoadedStarships) {
        getStarships().then((result) => {
          setIsLoadedStarships(true);
          setStarships(result);
        });
        btnText.style.display = "none";
      } else return;
    } catch (err) {
      setErr(err.message);
    }
  };

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
                <Route
                  path=":title"
                  element={
                    <DetailsContext.Provider value={[people, starships]}>
                      <FilmsContainer
                        hadleClickPeople={hadleClickPeople}
                        hadleClickStarships={hadleClickStarships}
                      />
                    </DetailsContext.Provider>
                  }
                ></Route>
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
