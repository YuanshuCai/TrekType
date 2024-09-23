import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
const getMbtiType = (dominant, auxiliary) => {
  const matchedType = mbtiTypes.find(
    (type) => type.dominant_function === dominant
  );

  if (matchedType) {
    const { types, auxiliary: auxFunctions } = matchedType;
    if (auxFunctions[types[0]] === auxiliary) {
      return types[0];
    } else if (auxFunctions[types[1]] === auxiliary) {
      return types[1];
    }
  }
  return "Unknown";
};
export function ResultPage() {
  const location = useLocation();
  const [PersonalityType, setPersonalityType] = useState(null);

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
  console.log(mbtiValues);

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
                <h1>Your MBTI Type: {PersonalityType}</h1>
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
