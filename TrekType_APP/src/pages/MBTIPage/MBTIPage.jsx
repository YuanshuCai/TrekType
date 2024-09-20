import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MBTIPage() {
  const { id } = useParams(); // Get the dynamic id from the URL
  const [mbtiData, setMbtiData] = useState(null); // State to hold MBTI data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch data from the server for the specific id
    axios
      .get(`http://localhost:8080/personality-types/${id}`)
      .then((response) => {
        setMbtiData(response.data); // Set the MBTI data if found
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data"); // Handle any errors
        setLoading(false);
      });
  }, [id]); // Re-run effect when id changes

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error message if any
  if (error) {
    return <div>{error}</div>;
  }

  // If mbtiData is fetched and available, display it
  return (
    <div>
      <h1>MBTI Type: {mbtiData.type_name}</h1>
      <p>
        <strong>Description:</strong> {mbtiData.description}
      </p>
      <p>
        <strong>Strengths:</strong> {mbtiData.type_strength}
      </p>
      <p>
        <strong>Shortcomings:</strong> {mbtiData.type_shortcoming}
      </p>
    </div>
  );
}

export default MBTIPage;
