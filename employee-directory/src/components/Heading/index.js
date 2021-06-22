import React from "react";
import "./style.css";

const Heading = () => {
  return (
    <header>
      <h1 className="text-center">Personnel Listings</h1>
      <p className="text-center">
        Use the Search bar to filter employee listings, click a table heading to sort the list
      </p>
    </header>
  );
};

export default Heading;