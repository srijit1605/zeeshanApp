import React from "react";
import "./hero.css";

const FeaturedProperties = () => {
  return (
    <div className="FeaturedPropertiesContainer">
      <div className="textBlock">
        <h1 className="textHeader">Featured Properties</h1>
        <p>Checkout our flagship projects at Blue Heights, Sky Heights, ZNG Residency, Home@56 and many other projects.</p>
      </div>
      <div className="imageBlock"></div>
      <div className="rowBlock">
        <div className="imageRowBlock1">
          <h2>Z.N.G Residency</h2>
        </div>
        <div className="imageRowBlock2">
          <h2>Home@56</h2>
        </div>
        <button className="exploreBtn">VIEW MORE</button>
      </div>
    </div>
  );
};

export default FeaturedProperties;
