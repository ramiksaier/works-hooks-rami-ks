import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Rater from "../Search/SearchbyRate";

const MovieCardNew = ({ el, Addfilm, Deletefilm, i }) => {
  return (
    <div>
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={el.posterUrle}
          height="250px"
          alt="image"
        />
        <Card.Body>
          <Card.Title>
            <h1 className="listaffichage"> {el.title}</h1>
          </Card.Title>
          <Card.Text>
            <p className="listaffichage">{el.description}</p>
          </Card.Text>
          <Rater filterRate={false} movieRating={el.rating} />

          <Button
            onClick={() => Deletefilm(i)}
            className="listaffichage"
            variant="primary"
          >
            Delete
          </Button>
          <Link to={{ pathname: "/mov", state: { el: el } }}>
            <Button>see detail</Button>
          </Link>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCardNew;
