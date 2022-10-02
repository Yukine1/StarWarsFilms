import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const FilmItem = ({ title }) => {
  const nameLink = title.toLowerCase().split(" ").join(""); // reformed title for URl

  return (
    <span className={styles.elemContainer}>
      <Link className={styles.filmElem} to={`/${nameLink}`}>
        {title}
      </Link>
    </span>
  );
};
