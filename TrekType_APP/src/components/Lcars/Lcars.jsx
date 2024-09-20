import React, { useState } from "react";
import Carousel from "./../Carousel/Carousel";
import CardsListMBTI from "./../CardsListMBTI/CardsListMBTI";
import "./Lcars.scss";

const Lcars = () => {
  //manage the displayed component in Main
  const [activeComponent, setActiveComponent] = useState("carousel");
  const handleNavClick = (component) => {
    setActiveComponent(component);
  };
  const renderContent = () => {
    switch (activeComponent) {
      case "carousel":
        return <Carousel />;
      case "cardsDisplay":
        return <CardsListMBTI />;
      case "underConstruction":
        return (
          <div>
            <h1>Under Construction</h1>
            <p>This section is still being worked on.</p>
          </div>
        );
      default:
        return <Carousel />;
    }
  };

  return (
    <section className="wrap-standard" id="column-3">
      <div className="wrap">
        <div className="scroll-top">
          <a id="scroll-top" href="#">
            <span className="hop">screen</span> top
          </a>
        </div>
        <div className="left-frame-top">
          <div className="panel-1">
            <a href="#">LCARS</a>
          </div>
          <div className="panel-2">
            02<span className="hop">-262000</span>
          </div>
        </div>
        <div className="right-frame-top">
          <div className="banner">
            <a href="#">LCARS • </a>
            <span className="blink">MBTI Voyage</span>
          </div>
          <div className="data-cascade-button-group">
            <div className="cascade-wrapper">{/* Data Cascade Rows */}</div>
            <nav id="nav-standard">
              <a id="b-one" onClick={() => handleNavClick("carousel")}>
                Engineering
              </a>
              <a id="b-two" onClick={() => handleNavClick("cardsDisplay")}>
                Ten Forward
              </a>
              <a
                id="b-three"
                onClick={() => handleNavClick("underConstruction")}
              >
                Transporter
              </a>
              <a
                id="b-four"
                onClick={() => handleNavClick("underConstruction")}
              >
                Holodeck
              </a>
            </nav>
          </div>
          <div className="bar-panel first-bar-panel">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
            <div className="bar-4"></div>
            <div className="bar-5"></div>
          </div>
        </div>
      </div>
      <div className="wrap" id="gap">
        <div className="left-frame">
          <div>
            <div className="panel-3">
              03<span className="hop">-111968</span>
            </div>
            <div className="panel-4">
              04<span className="hop">-041969</span>
            </div>
            {/* More panels */}
          </div>
          <div className="panel-10">
            10<span className="hop">-31</span>
          </div>
        </div>
        <div className="right-frame">
          <div className="bar-panel">
            <div className="bar-6"></div>
            <div className="bar-7"></div>
            <div className="bar-8"></div>
            <div className="bar-9"></div>
            <div className="bar-10"></div>
          </div>
          <main>
            {/* Display the active component */}
            {renderContent()}
            <footer>
              <div className="footer-inside">
                <div className="footer-text">
                  <p>Content Copyright &#169; 2024 TrekType</p>
                  <p>
                    LCARS Inspired Website Template by{" "}
                    <a href="https://www.thelcars.com">www.TheLCARS.com</a>
                  </p>
                </div>
              </div>
              <div className="footer-panel">
                <span className="hop">22</span>47
              </div>
            </footer>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Lcars;
