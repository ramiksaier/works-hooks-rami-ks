import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import MovieCardNew from "../MovieCard-/MovieCard-";
import Moviecard from "../MovieCard/Moviecard";
import Rater from "../Search/SearchbyRate";
import Search from "../Search/SearchbyNAme";
import Footer from "../Footer/Footer";

const Movielist = ({}) => {
  const [film, setfilm] = useState([
    {
      title: "docteur",
      description: "action film creé en 2019",
      posterUrle:
        "https://cinehorizons.net/sites/default/files/affiches/839799465-docteur.jpg",
      rating: 1,
    },
    {
      title: "HEDE",
      description: "film creé en 2001",
      posterUrle:
        "https://www.movienewz.com/img/gallery/entourage-movie/posters/entourage_movie_poster_2.jpg",
      rating: 3,
    },
    {
      title: "brank",
      description: "film creé en 2020",
      posterUrle:
        "https://fr.web.img4.acsta.net/f_png/c_310_420/o_logo-netflix-n.png_5_se/pictures/20/10/09/18/05/4227202.jpg",
      rating: 2,
    },
    {
      title: "rebecca",
      description: "Romentique film creé en 2020",
      posterUrle:
        "https://img8.cdn.cinoche.com/images/7c4cdfc9af7609dd3aa4eacc9f76d635.jpg",
      rating: 4,
    },
    {
      title: "Riche en amour",
      description: "film creé en 2020",
      posterUrle:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnremfwAz7s6m570yKDxKRFj4hJGIgWoD2Q&usqp=CAU",
      rating: 3,
    },
    {
      title: "tous nos jour partaits",
      description: " Romentic film creé en 2020",
      posterUrle:
        "https://freakingeek.com/wp-content/uploads/2020/02/TousNosJoursParfait-Bannier-800x445.png",
      rating: 5,
    },
  ]);

  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);
  const Addfilm = (title, description, posterUrle, rating) => {
    setfilm([...film, { title, description, posterUrle, rating }]);
  };

  const Deletefilm = (indice) => {
    setfilm(film.filter((el, i) => i != indice));
  };

  return (
    <div>
      <h1 className="titrefilm">films</h1>

      <Search setInputSearch={setInputSearch} />
      <Rater filterRate={true} rating={rating} setRating={setRating} />

      <Moviecard Addfilm={Addfilm} />

      <div className="affichage">
        {film
          .filter(
            (movie) =>
              movie.title.toUpperCase().includes(inputSearch.toUpperCase()) &&
              movie.rating >= rating
          )

          .map((el, i) => (
            <MovieCardNew
              el={el}
              i={i}
              key={i}
              Deletefilm={Deletefilm}
              Addfilm={Addfilm}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Movielist;
