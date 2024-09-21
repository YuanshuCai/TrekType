import React from "react";
import "./../../assets/styles/global.scss"; // Import global SCSS for colors

const RandomColor = () => {
  // Define a list of color variables that match your SCSS variable names
  const colors = [
    "star-trek-lemon",
    "star-trek-blue",
    "star-trek-red",
    "star-trek-orange",
  ];

  // Function to randomly pick a color from the array
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Generate cards with random colors
  const cards = Array.from({ length: 4 }, (_, index) => (
    <div key={index} className={`card ${getRandomColor()}`}>
      Card {index + 1}
    </div>
  ));

  return <div className="cards-list">{cards}</div>;
};

export default RandomColor;
