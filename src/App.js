import "./App.css";
import react, { useState } from "react";
import Movielist from "./Component/Movielist/Movielist";
import Nabar from "./Component/Nabar";
import Search from "./Component/Search/SearchbyNAme";
import Rater from "./Component/Search/SearchbyRate";
import Footer from "./Component/Footer/Footer";
import { Route, Router, Switch } from "react-router-dom";
import Errors from "./Component/Eroors";
import Moviedetail from "./Component/Moviedetail";
import Moviecard from "./Component/MovieCard/Moviecard";
import Homepage from "./Component/Homepage";
function App({ Addmovie }) {
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  return (
    <div className="App">
      <Nabar />
      <div className="searching"></div>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/movilist" component={Movielist} />
        <Route path="/mov" component={Moviedetail} />
        <Route path="*/" component={Errors} />
      </Switch>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
