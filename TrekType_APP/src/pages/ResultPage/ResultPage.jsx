import HolodeckBackground from "../../components/HolodeckBackground/HolodeckBackground";
import RadarGraph from "./../../components/RadarGraph/RadarGraph";
import "./ResultPage.scss";

export function ResultPage() {
  const mbtiValues = {
    Ne: 80,
    Fi: 70,
    Ti: 65,
    Se: 50,
    Ni: 90,
    Fe: 60,
    Te: 75,
    Si: 40,
  };
  return (
    <div className="result">
      <HolodeckBackground />
      <div className="result-content">
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
  );
}

export default ResultPage;
