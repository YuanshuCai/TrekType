import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components from Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarGraph = ({ Ne, Fi, Ti, Se, Ni, Fe, Te, Si }) => {
  const data = {
    labels: [
      "Ne (Extroverted Intuition)",
      "Fi (Introverted Feeling)",
      "Ti (Introverted Thinking)",
      "Se (Extroverted Sensing)",
      "Ni (Introverted Intuition)",
      "Fe (Extroverted Feeling)",
      "Te (Extroverted Thinking)",
      "Si (Introverted Sensing)",
    ],
    datasets: [
      {
        label: "MBTI Personality Traits",
        data: [Ne, Fi, Ti, Se, Ni, Fe, Te, Si], // Use the values passed as props
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100, // Assuming a scale from 0 to 100 for each aspect
        ticks: {
          stepSize: 20,
          color: "#444",
        },
        grid: {
          color: "#ddd",
        },
        angleLines: {
          color: "#bbb",
        },
        pointLabels: {
          color: "#000",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarGraph;
