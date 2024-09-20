import "./TextDisplay.scss";

const TextDisplay = () => {
  return (
    <div className="lcars-test">
      <div className="lcars__frame-top">
        <div className="lcars__top lcars__top--1"></div>
        <div className="lcars__top lcars__top--2"></div>
        <div className="lcars__top lcars__top--3">
          <p className="lcars__text">2063</p>
        </div>
        <div className="lcars__top lcars__top--4"></div>
        <div className="lcars__top lcars__top--5">
          <p className="lcars__text">47</p>
        </div>
        <div className="lcars__top lcars__top--6"></div>
        <div className="lcars__top lcars__top--7">
          <p className="lcars__text">709</p>
        </div>
        <div className="lcars__top lcars__top--8"></div>
        <div className="lcars__top lcars__top--9">
          <p className="lcars__text">2233</p>
        </div>
        <div className="lcars__top lcars__top--10"></div>
      </div>

      <div className="lcars__frame-left">
        <div className="lcars__left lcars__left--1"></div>
        <div className="lcars__left lcars__left--2">
          <p className="lcars__text">0187</p>
        </div>
        <div className="lcars__left lcars__left--3">
          <p className="lcars__text">1701</p>
        </div>
        <div className="lcars__left lcars__left--4">
          <p className="lcars__text">2309</p>
        </div>
        <div className="lcars__left lcars__left--5"></div>
      </div>

      <div className="lcars__quote-container">
        <p className="lcars__title">{"Captain's log"}</p>
        <p className="lcars__quote">MBTI intro</p>
        <p className="lcars__author"></p>
        <a href="" target="_blank" className="lcars__link"></a>
      </div>

      <div role="button" className="lcars__generate-button">
        Read More
      </div>
      <div className="lcars__generate-button-cap"></div>

      <div className="lcars__bottom lcars__bottom--1"></div>
      <div className="lcars__bottom lcars__bottom--2"></div>
      <div className="lcars__bottom lcars__bottom--3"></div>
    </div>
  );
};

export default TextDisplay;
