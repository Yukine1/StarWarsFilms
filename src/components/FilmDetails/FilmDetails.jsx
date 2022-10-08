import styles from "./styles.module.css";
import { CharacterItems } from "../CharacterItems/CharacterItems";
import { StarshipsItems } from "../StarshipItems/StarshipsItems";
import { useState } from "react";

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

export const FilmDetails = ({ film }) => {
  const [err, setErr] = useState("");
  const [people, setPeople] = useState([]);
  const [starships, setStarships] = useState([]);
  const [isLoadedPeople, setIsLoadedPeople] = useState(false);
  const [isLoadedStarships, setIsLoadedStarships] = useState(false);

  const hadleClickPerson = () => {
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

  const peopleArr = people.filter((person) => {
    return person.url === film.characters.find((url) => url === person.url);
  });

  const starshipsArr = starships.filter((starship) => {
    return starship.url === film.starships.find((url) => url === starship.url);
  });

  return (
    <div className={styles.filmsContainer}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{film.title}</h2>
        <p className={styles.introduction}>
          <span className={styles.rowTitle}>Introduction: </span>
          {film.opening_crawl}
        </p>
        <p>
          <span className={styles.rowTitle}>Director: </span>
          {film.director}
        </p>
        <p>
          <span className={styles.rowTitle}>Producer: </span>
          {film.producer}
        </p>
        <p>
          <span className={styles.rowTitle}>Release data: </span>
          {film.release_date}
        </p>
        <div>
          <span className={styles.newSection}>Starships: </span>
          <span
            className={styles.showMore}
            onClick={hadleClickStarships}
            id="get-starships"
          >
            Show more
          </span>
        </div>
        <StarshipsItems starships={starshipsArr}></StarshipsItems>
        <div>
          <span className={styles.newSection}>Characters: </span>
          <span
            className={styles.showMore}
            onClick={hadleClickPerson}
            id="get-persons"
          >
            Show more
          </span>
        </div>
        <CharacterItems characters={peopleArr}></CharacterItems>
      </div>
    </div>
  );
};
