import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.scss";
import imgCommanderData from "./../../assets/images/commander-data-pixel.png";
import imgJeanLuc from "./../../assets/images/jean-luc-pixel.png";
import imgRiker from "./../../assets/images/william-riker-pixel.png";

const Carousel = () => {
  const carouselData = [
    { id: 1, image: imgCommanderData, text: "INTP" },
    { id: 2, image: imgJeanLuc, text: "INSJ" },
    { id: 3, image: imgRiker, text: "ENTJ" },
    { id: 4, image: "image4.jpg", text: "Card 4" },
    { id: 5, image: "image5.jpg", text: "Card 5" },
    { id: 6, image: "image6.jpg", text: "Card 6" },
    { id: 7, image: "image7.jpg", text: "Card 7" },
    { id: 8, image: "image8.jpg", text: "Card 8" },
    { id: 9, image: "image9.jpg", text: "Card 9" },
    { id: 10, image: "image10.jpg", text: "Card 10" },
    { id: 11, image: "image11.jpg", text: "Card 11" },
    { id: 12, image: "image12.jpg", text: "Card 12" },
    { id: 13, image: "image13.jpg", text: "Card 13" },
    { id: 14, image: "image14.jpg", text: "Card 14" },
    { id: 15, image: "image15.jpg", text: "Card 15" },
    { id: 16, image: "image16.jpg", text: "Card 16" },
  ];

  const options = {}; // Your Embla options here
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselData.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__slide__inner">
                <div className="embla__slide__front">
                  <img
                    src={slide.image}
                    alt={slide.text}
                    className="embla__slide__image"
                  />
                </div>
                <div className="embla__slide__back">
                  <div className="embla__slide__text">{slide.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
