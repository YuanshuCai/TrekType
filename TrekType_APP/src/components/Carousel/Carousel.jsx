import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.scss";

function Carousel({ setMBTIType }) {
  const [carouselData, setCarouselData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/personality-types/all/mbti"
        );
        const data = await response.json();
        setCarouselData(data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    setMBTIType(id);
  };

  const options = { loop: true };
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
                onClick={() => handleCardClick(slide.type_id)}
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
}

export default Carousel;
