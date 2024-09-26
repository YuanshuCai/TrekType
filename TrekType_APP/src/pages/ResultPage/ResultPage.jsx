import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toJpeg } from "html-to-image"; // Library to convert DOM to image
import { saveAs } from "file-saver"; // Library to save files
import HolodeckBackground from "../../components/HolodeckBackground/HolodeckBackground";
import RadarGraph from "./../../components/RadarGraph/RadarGraph";
import "./ResultPage.scss";

// Define possible MBTI types with dominant functions
const mbtiTypes = [
  {
    dominant_function: "Ne",
    types: ["ENFP", "ENTP"],
    auxiliary: { ENFP: "Fi", ENTP: "Ti" },
  },
  {
    dominant_function: "Ni",
    types: ["INFJ", "INTJ"],
    auxiliary: { INFJ: "Fe", INTJ: "Te" },
  },
  {
    dominant_function: "Se",
    types: ["ESTP", "ESFP"],
    auxiliary: { ESTP: "Ti", ESFP: "Fi" },
  },
  {
    dominant_function: "Si",
    types: ["ISTJ", "ISFJ"],
    auxiliary: { ISTJ: "Te", ISFJ: "Fe" },
  },
  {
    dominant_function: "Te",
    types: ["ENTJ", "ESTJ"],
    auxiliary: { ENTJ: "Ni", ESTJ: "Si" },
  },
  {
    dominant_function: "Ti",
    types: ["INTP", "ISTP"],
    auxiliary: { INTP: "Ne", ISTP: "Se" },
  },
  {
    dominant_function: "Fe",
    types: ["ENFJ", "ESFJ"],
    auxiliary: { ENFJ: "Ni", ESFJ: "Si" },
  },
  {
    dominant_function: "Fi",
    types: ["INFP", "ISFP"],
    auxiliary: { INFP: "Ne", ISFP: "Se" },
  },
];

// Function to get the MBTI type
const getMbtiType = (dominant, auxiliary) => {
  const matchedType = mbtiTypes.find(
    (type) => type.dominant_function === dominant
  );

  if (matchedType) {
    const { types, auxiliary: auxFunctions } = matchedType;
    // Check if auxiliary matches the first or second type
    if (auxFunctions[types[0]] === auxiliary) {
      return types[0];
    } else if (auxFunctions[types[1]] === auxiliary) {
      return types[1];
    }
    // If no auxiliary match, default to the first type
    return types[0];
  }

  // Default to 'Unknown' if no matched type found (though this should rarely occur)
  return "Unknown";
};

export function ResultPage() {
  const location = useLocation();
  const [PersonalityType, setPersonalityType] = useState(null);
  const [personalityInfo, setPersonalityInfo] = useState(null); // For storing fetched MBTI and character data
  const resultRef = useRef(null); // Ref to capture the result page

  // Extract mbtiValues from location state (assuming they are passed here)
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

  // Sort function values and calculate MBTI type
  useEffect(() => {
    const sortedFunctions = Object.entries(mbtiValues).sort(
      (a, b) => b[1] - a[1]
    );
    const dominantFunction = sortedFunctions[0][0];
    const auxiliaryFunction = sortedFunctions[1][0];

    const mbtiType = getMbtiType(dominantFunction, auxiliaryFunction);
    setPersonalityType(mbtiType);
  }, [mbtiValues]);

  // Fetch personality info from backend
  useEffect(() => {
    if (PersonalityType) {
      axios
        .get(`http://localhost:8080/personality-types/type/${PersonalityType}`)
        .then((response) => {
          setPersonalityInfo(response.data);
        })
        .catch((error) => {
          console.error("Error fetching personality info:", error);
        });
    }
  }, [PersonalityType]);

  // Function to generate JPEG and allow sharing
  const generateImage = () => {
    if (resultRef.current) {
      toJpeg(resultRef.current, { quality: 0.95 })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `${PersonalityType}_Result.jpeg`;
          saveAs(dataUrl, `${PersonalityType}_Result.jpeg`);
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    }
  };

  return (
    <div className="result" ref={resultRef}>
      <HolodeckBackground />
      <div className="result-content">
        <div className="result-display">
          {personalityInfo?.character && (
            <div className="result-character">
              <img
                src={personalityInfo.character.image_url}
                alt={personalityInfo.character.character_name}
                className="result-character-image"
              />
            </div>
          )}

          <div className="result-details">
            <h1>Your MBTI Type: {PersonalityType}</h1>
            {personalityInfo?.character && (
              <>
                <h2>You are: {personalityInfo.character.character_name}</h2>
                <p>{personalityInfo.character.description}</p>
              </>
            )}
            {PersonalityType ? (
              <div className="mbti-details">
                {personalityInfo && (
                  <div className="mbti-info">
                    <div>
                      <p>{personalityInfo.mbtiType.description}</p>
                      <p>Strengths: {personalityInfo.mbtiType.type_strength}</p>
                      <p>
                        Shortcomings:{" "}
                        {personalityInfo.mbtiType.type_shortcoming}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <h1>Scanning your personality matrix, Captain...</h1>
            )}
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
          </div>
        </div>
        {/* Add button to generate and share image */}
        <div className="share-button-container">
          <button onClick={generateImage} className="share-button">
            Generate JPEG & Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
