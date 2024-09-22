import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HolodeckBackground from "../../components/HolodeckBackground/HolodeckBackground";
import RadarGraph from "./../../components/RadarGraph/RadarGraph";
import "./ResultPage.scss";

export function ResultPage() {
  const location = useLocation();
  const [PersonalityType, setPersonalityType] = useState(null); // State to store the fetched MBTI type data

  const oppositePairs = {
    Ti: "Te",
    Te: "Ti",
    Fi: "Fe",
    Fe: "Fi",
    Ni: "Ne",
    Ne: "Ni",
    Si: "Se",
    Se: "Si",
  };

  // Initial MBTI function values from state or default
  const mbtiValues = location.state?.functionScores || {
    Ne: 0,
    Fi: 0,
    Ti: 0,
    Se: 0,
    Ni: 0,
    Fe: 0,
    Te: 0,
    Si: 0,
  };

  // Rank the functions by their scores
  const rankedFunctions = Object.entries(mbtiValues).sort(
    (a, b) => b[1] - a[1]
  );
  console.log(rankedFunctions);

  // Keep track of selected functions to prevent selecting their opposites
  const selectedFunctions = new Set();
  const finalFunctions = [];

  // Iterate over the ranked functions and select the top 4 distinct ones
  for (const [func] of rankedFunctions) {
    // Skip if the opposite function has already been selected
    if (
      !selectedFunctions.has(func) &&
      !selectedFunctions.has(oppositePairs[func])
    ) {
      finalFunctions.push(func);
      selectedFunctions.add(func);
    }
    // Stop once we've selected 4 functions
    if (finalFunctions.length === 4) {
      break;
    }
  }

  // Destructure the final 4 functions into dominant, auxiliary, tertiary, and inferior
  const [dominant, auxiliary, tertiary, inferior] = finalFunctions;
  console.log(dominant, auxiliary, tertiary, inferior);
  // POST the ranked MBTI functions to find the matching personality type
  useEffect(() => {
    const findPersonalityType = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/personality-types/findMBTIType",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              dominant: dominant,
              auxiliary: auxiliary,
              tertiary: tertiary,
              inferior: inferior,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setPersonalityType(data); // Set the returned MBTI type data
      } catch (error) {
        console.error("Error fetching MBTI personality type:", error);
      }
    };

    findPersonalityType();
  }, [dominant, auxiliary, tertiary, inferior]);

  return (
    <div className="result">
      <HolodeckBackground />
      <div className="result-content">
        <div className="result-display">
          <div className="result-stats">
            <RadarGraph
              Ne={mbtiValues.Ne}
              Fi={mbtiValues.Fi}
              Ti={mbtiValues.Ti}
              Se={mbtiValues.Se}
              Ni={mbtiValues.Ni}
              Fe={mbtiValues.Fe}
              Te={mbtiValues.Te}
              Si={mbtiValues.Si}
            />
          </div>
          <div>
            {PersonalityType ? (
              <div className="mbti-details">
                <h1>Your MBTI Type: {mbtiType.type_name}</h1>
                <img src={mbtiType.image_url} alt={mbtiType.character_name} />
                <p>{mbtiType.description}</p>
                <p>
                  <strong>Character:</strong> {mbtiType.character_name}
                </p>
                <p>
                  <strong>Type Strength:</strong> {mbtiType.type_strength}
                </p>
                <p>
                  <strong>Type Shortcoming:</strong> {mbtiType.type_shortcoming}
                </p>
              </div>
            ) : (
              <h1>Loading your MBTI type...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
