import Carousel from "../Carousel/Carousel";
import "./CardsDisplay.scss";

const CardsDisplay = () => {
  return (
    <>
      <div className="lcars">
        <div className="lcars-panel lcars-panel--top">
          <label className="lcars-panel__title">
            <span className="lcars-panel__blink">LCARS Database</span>
          </label>
        </div>
        <div>
          <div className="lcars-panel lcars-panel--side">
            <div className="lcars-panel__button lcars-panel__button--bridge">
              Bridge
            </div>
            <div className="lcars-panel__button lcars-panel__button--engineering">
              Engineering
            </div>
            <div className="lcars-panel__button lcars-panel__button--transporter">
              Transporter Room
            </div>
            <div className="lcars-panel__button lcars-panel__button--holodeck">
              Holodeck
            </div>
          </div>
          <div className="lcars-panel lcars-panel--main">
            <Carousel />
          </div>
        </div>

        <div className="lcars-panel lcars-panel--bottom">
          <label className="lcars-panel__title">U.S.S Blackstar NCC-1978</label>
        </div>
      </div>
    </>
  );
};

export default CardsDisplay;
