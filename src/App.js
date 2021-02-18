import "./App.css";
import react, { useState } from "react";
import Movielist from "./Component/Movielist/Movielist";
import Nabar from "./Component/Nabar";
import Search from "./Component/Search/SearchbyNAme";
import Rater from "./Component/Search/SearchbyRate";
import Footer from "./Component/Footer/Footer";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  return (
    <div className="App">
      <Nabar />
      <h1 className="titrefilm">films</h1>

      <div className="searching">
        <Search setInputSearch={setInputSearch} />
        <Rater filterRate={true} rating={rating} setRating={setRating} />
      </div>
      <Movielist inputSearch={inputSearch} rating={rating} />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
