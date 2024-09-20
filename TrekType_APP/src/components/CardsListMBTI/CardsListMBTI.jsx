// CardsListMBTI.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CardsListMBTI() {
  const [mbtiTypes, setMbtiTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="cards-list">
      {mbtiTypes.map((type) => (
        <Link
          to={`/mbti/${type.type_id}`}
          key={type.type_id}
          className="card-link"
        >
          <div className="card">
            <h3>{type.type_name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardsListMBTI;
