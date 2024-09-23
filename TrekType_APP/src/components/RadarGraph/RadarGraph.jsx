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
import "./RadarGraph.scss";

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
        data: [Ne, Fi, Ti, Se, Ni, Fe, Te, Si],
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Make the chart responsive
    scales: {
      r: {
        beginAtZero: true,
        max: 30,
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
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div className="radar-graph">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarGraph;
