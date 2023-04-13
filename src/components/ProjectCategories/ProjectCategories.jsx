import React from "react";
import "./projectCategories.css";
import Card from "./Card";
import newLaunches from "../../assets/newLaunches.jpg"
import upcomingProjects from "../../assets/upcomingProjects.jpg"
import ReadyToMove from "../../assets/ReadyToMove.jpg"
import reSaleFlats from "../../assets/reSaleFlats.jpg"
import bunglows from "../../assets/bunglows.jpg"
import commercial from "../../assets/commercial.jpg"
import land from "../../assets/land.jpg"
import investments from "../../assets/investments.jpg"

const ProjectCategories = () => {
  const projCategories = [
  {
    title: "New Launches",
    url: newLaunches
  },
  {
    title: "Upcoming Projects",
    url: upcomingProjects
  },
  {
    title: "Ready to Move",
    url: ReadyToMove
  },
  {
    title: "Re-sale flats",
    url: reSaleFlats
  },
  {
    title: "Bunglows",
    url: bunglows
  },
  {
    title: "Commercial",
    url: commercial
  },
  {
    title: "Lands",
    url: land
  },
  {
    title: "Investments",
    url: investments
  },
]
  return (
    <div className="ProjectBackground">
      <div className="ProjectContainer">
        <h1>Project Categories</h1>
        <h3>Choose your home based on the type you are looking for. That will make your search much easier.</h3>
        <div className="cardSection">
          {projCategories.map((category, key) => <Card key={key} name={category.title} bg={category.url}/>)}
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories;
