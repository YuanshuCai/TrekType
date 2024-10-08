import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-images">
        <a href="/">
          <img
            className="header-img header-img--title"
            src="https://res.cloudinary.com/rwinterhalter/image/upload/v1475031899/Star_Trek_The_Next_Generation_Williams_1993_hizfki.png"
            alt="Star Trek"
          />
        </a>

        <img
          className="header-img header-img--decor"
          src="https://res.cloudinary.com/rwinterhalter/image/upload/v1475033220/lcars_mx2en9.png"
          alt="LCARS"
        />
      </div>
    </div>
  );
};

export default Header;
