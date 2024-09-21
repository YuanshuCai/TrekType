import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Carousel.scss";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const navigate = useNavigate(); // Create a navigate function

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/personality-types/all/mbti"
        ); // Update with the correct API endpoint
        const data = await response.json();
        setCarouselData(data); // Assuming data is an array of character objects
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []); // Fetch data only when the component mounts

  const handleCardClick = (id) => {
    navigate(`/mbti/${id}`); // Navigate to the MBTI page with the id
  };

  const options = { loop: true }; // Your Embla options here
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselData.length > 0 ? (
            carouselData.map((slide) => (
              <div
                className="embla__slide"
                key={slide.character_id}
                onClick={() => handleCardClick(slide.type_id)} // Add onClick event
                style={{ cursor: "pointer" }} // Change cursor to pointer for clickable effect
              >
                <div className="embla__slide__inner">
                  <div className="embla__slide__front">
                    <img
                      src={slide.image_url}
                      alt={slide.character_name}
                      className="embla__slide__image"
                    />
                  </div>
                  <div className="embla__slide__back">
                    <div className="embla__slide__text">{slide.type_name}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
