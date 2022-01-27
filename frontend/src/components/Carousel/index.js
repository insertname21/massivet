import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 5000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    {
      name: "Meredith Seawell",
      citation: "",
      quote:
        "The Massies took the time to connect with my less-than-tame donkey and proceeded to treat him with respect, confidence, and professionalism. I have to say that we all had an unusually good time. I highly recommend them!"
    },
    {
      name: "Adriana Bailey",
      citation: "",
      quote:
        "Dr. Massie is very friendly, knowledgeable, and has an extensive background of experience in the field. He is both professional and personal. This business is super convenient for our rural residence and the services are especially budget friendly. I am so blessed to have this company in our area."
    },
    {
      name: "Megan Rakisits",
      citation: "",
      quote:
        "MassieVet came out for my horse's emergency today and it was amazing. Dr. Massie is very honest, kind, and did all he could. He even followed us out to a different location to lay my boy to rest."
    },
    {
      name: "Chickie Guillaume",
      citation: "",
      quote:
        "The Massie team were amazing, personable, made us feel comfortable, answered all of our questions, and we will definitely have them care for all of our furries! We liked the idea that they have local ties and that we did not feel pressured, like you sometimes feel at an office visit!"
    },
    {
      name: "Lindsay Prentice",
      citation: "",
      quote:
        "Dr. Massie is so nice to talk to and actually cares enough to take the time to explain things. He was so great with all of our cats and it was invaluable to have him come to the house! Our fluffs were immediately back to themselves instead of having to drive home, get carsick, and spend hours getting over the stress of going to a strange office. The icing on the cake is  discounts for veterans!"
    }
  ];

  return (
    <div className="App">
      <ul className="carousel__list">
        {reviews.map((review, index) => {
          const { citation, name, quote } = review;
          const count = index + 1;
          return (
            <li
              className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
              key={count}
            >
              <blockquote className="carousel__quote">
                <cite>
                  <span className="carousel__name">{name}</span>
                  <span className="carousel__citation">{citation}</span>
                </cite>
                <p>"{quote}"</p>
              </blockquote>
            </li>
          );
        })}
        <li className="carousel__indicator">
          <span
            className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 4 ? " active" : ""}`}
          />
          <span
            className={`carousel__dot${activeSlide === 5 ? " active" : ""}`}
          />
        </li>
      </ul>
    </div>
  );
}

export default Carousel
