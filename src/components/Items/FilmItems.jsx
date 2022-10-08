import { nanoid } from "nanoid";
import { useContext } from "react";
import { StarWarsContext } from "../../Contexts/StarWarsContext";
import { FilmItem } from "../FilmItem/FilmItem";
import styles from "./styles.module.css";

export const FilmItems = () => {
  const filmArr = useContext(StarWarsContext);

  return (
    <div className={styles.filmItems}>
      <div className={styles.pageTitle}>Star Wars Films</div>
      <div className={styles.filmsContainer}>
        <div className={styles.filmsList}>
          {filmArr.map((film) => (
            <FilmItem title={film.title} key={nanoid()}></FilmItem>
          ))}
        </div>
      </div>
    </div>
  );
};
