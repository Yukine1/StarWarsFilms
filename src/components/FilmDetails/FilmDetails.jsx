import styles from "./styles.module.css";
import { CharacterItems } from "../CharacterItems/CharacterItems";
import { StarshipsItems } from "../StarshipItems/StarshipsItems";
import { useContext } from "react";
import { DetailsContext } from "../../Contexts/DetailsContext";

export const FilmDetails = ({
  film,
  hadleClickPeople,
  hadleClickStarships,
}) => {
  const [people, starships] = useContext(DetailsContext);

  const peopleArr = people?.filter((person) => {
    return person.url === film.characters.find((url) => url === person.url);
  });

  console.log(peopleArr);

  const starshipsArr = starships?.filter((starship) => {
    return starship.url === film.starships.find((url) => url === starship.url);
  });

  console.log(starshipsArr);

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
        {starshipsArr.length === 0 ? (
          ""
        ) : (
          <StarshipsItems starships={starshipsArr}></StarshipsItems>
        )}
        <div>
          <span className={styles.newSection}>Characters: </span>
          <span
            className={styles.showMore}
            onClick={hadleClickPeople}
            id="get-persons"
          >
            Show more
          </span>
        </div>
        {peopleArr.length === 0 ? (
          ""
        ) : (
          <CharacterItems characters={peopleArr}></CharacterItems>
        )}
      </div>
    </div>
  );
};
