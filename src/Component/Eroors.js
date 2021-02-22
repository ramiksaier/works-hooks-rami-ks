import React from "react";
import Footer from "./Footer/Footer";

const Errors = ({ history }) => {
  return (
    <div>
      <img src="https://assets.prestashop2.com/sites/default/files/blog/2019/10/banner_error_404.jpg" />
      <br />
      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "2%",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Errors;
