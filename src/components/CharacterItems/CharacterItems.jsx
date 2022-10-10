import styles from "./styles.module.css";
import { statusCheck } from "../../helper";

export const CharacterItems = ({ characters }) => {
  return (
    <div className={styles.peopleContainer}>
      {characters?.map((person) => (
        <div className={styles.personElement}>
          <p>
            <span className={styles.rowTitle}>Name: </span>
            {statusCheck(person.name)}
          </p>
          <p>
            <span className={styles.rowTitle}>Gender: </span>
            {statusCheck(person.gender)}
          </p>
          <p>
            <span className={styles.rowTitle}>Heigh: </span>
            {statusCheck(person.height)}
          </p>
          <p>
            <span className={styles.rowTitle}>Mass: </span>
            {statusCheck(person.mass)}
          </p>
          <p>
            <span className={styles.rowTitle}>Birth year: </span>
            {statusCheck(person.birth_year)}
          </p>
          <p>
            <span className={styles.rowTitle}>Hair color: </span>
            {statusCheck(person.hair_color)}
          </p>
        </div>
      ))}
    </div>
  );
};
