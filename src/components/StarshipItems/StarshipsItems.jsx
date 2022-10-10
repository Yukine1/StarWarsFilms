import styles from "./styles.module.css";
import { statusCheck } from "../../helper";

export const StarshipsItems = ({ starships }) => {
  return (
    <div className={styles.starshipsContainer}>
      {starships?.map((starship) => (
        <div className={styles.starshipElement}>
          <p>
            <span className={styles.rowTitle}>Name: </span>
            {statusCheck(starship.name)}
          </p>
          <p>
            <span className={styles.rowTitle}>Model: </span>
            {statusCheck(starship.model)}
          </p>
          <p>
            <span className={styles.rowTitle}>Class: </span>
            {statusCheck(starship.starship_class)}
          </p>
          <p>
            <span className={styles.rowTitle}>Speed: </span>
            {statusCheck(starship.max_atmosphering_speed)}
          </p>
          <p>
            <span className={styles.rowTitle}>Passangers: </span>
            {statusCheck(starship.passengers)}
          </p>
          <p>
            <span className={styles.rowTitle}>Length: </span>{" "}
            {statusCheck(starship.length)}
          </p>
        </div>
      ))}
    </div>
  );
};
