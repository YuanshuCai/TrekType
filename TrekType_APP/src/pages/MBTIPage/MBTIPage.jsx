import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MBTIPage() {
  const { id } = useParams();
  const [mbtiData, setMbtiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/personality-types/${id}`)
      .then((response) => {
        setMbtiData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
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
