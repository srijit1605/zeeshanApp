import React from "react";
import "./projectCategories.css";
import Card from "./Card";

const ProjectCategories = () => {
  const categories = [
    "New Launches",
    "Upcoming Projects",
    "Ready to Move",
    "Re-sale flats",
    "Bunglows",
    "Commercial",
    "Lands",
    "Investments",
  ];
  return (
    <div className="ProjectBackground">
      <div className="ProjectContainer">
        <h1>Project Categories</h1>
        <h3>Choose your home based on the type you are looking for. That will make your search much easier.</h3>
      <div className="cardSection">
      {categories.map((category, key) => <Card key={key} name={category}/>)}
      </div>
      </div>
    </div>
  );
};

export default ProjectCategories;
