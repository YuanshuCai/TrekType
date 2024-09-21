import React, { useEffect, useState } from "react";
import axios from "axios";

function TypeDetails({ mbtiType }) {
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch character details based on selected mbtiType
    axios
      .get(`http://localhost:8080/personality-types/${mbtiType}/character`)
      .then((response) => {
        setCharacterDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching character details");
        setLoading(false);
      });
  }, [mbtiType]); // Fetch data when mbtiType changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="type-details">
      <h2>{characterDetails.character_name}</h2>
      <p>{characterDetails.description}</p>
      <img
        src={characterDetails.image_url}
        alt={characterDetails.character_name}
      />
    </div>
  );
}

export default TypeDetails;
