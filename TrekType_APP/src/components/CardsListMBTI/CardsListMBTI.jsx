import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CardsListMBTI.scss";

function CardsListMBTI() {
  const [mbtiTypes, setMbtiTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch MBTI types from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/personality-types")
      .then((response) => {
        setMbtiTypes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching MBTI types");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Define an array of color classes from your SCSS
  const colors = [
    "star-trek-lemon",
    "star-trek-blue",
    "star-trek-red",
    "star-trek-orange",
    "lcars-purple",
  ];

  // Function to randomly pick a color from the array
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="cards-list">
      {mbtiTypes.map((type) => (
        <Link
          to={`/mbti/${type.type_id}`}
          key={type.type_id}
          className={`card ${getRandomColor()}`} // Apply random color class
        >
          <h3 className="card-text">{type.type_name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default CardsListMBTI;
