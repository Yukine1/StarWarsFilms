import { useContext } from "react";
import { StarWarsContext } from "../../Contexts/StarWarsContext";
import { FilmDetails } from "./FilmDetails";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

export const FilmsContainer = () => {
  const { title } = useParams();
  const filmsDetails = useContext(StarWarsContext); // use list of film
  const selectedFilm = filmsDetails.find(
    (film) => film.title.toLowerCase().split(" ").join("") === title
  );

  // Return RoutesFilm component which will render if customer click on link
  return (
    <div>
      <FilmDetails data={selectedFilm}></FilmDetails>
    </div>
  );
};
