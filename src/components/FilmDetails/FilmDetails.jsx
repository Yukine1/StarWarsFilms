import styles from "./styles.module.css";

export const FilmDetails = ({ data }) => {
  // Return description of the selected film
  return (
    <div className={styles.filmsContainer}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.introduction}>
          Introduction: {data.opening_crawl}
        </p>
        <p>Director: {data.director}</p>
        <p>Producer: {data.producer}</p>
        <p>Release data: {data.release_date}</p>
      </div>
    </div>
  );
};
