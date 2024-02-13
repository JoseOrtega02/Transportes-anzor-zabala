import arrow from "../../../assets/211687_down_arrow_icon (1).svg";
import React, { useState } from "react";
import "./frequentQuestion.css";
interface FrequentQuestion {
  title: string;
  description: string;
}
interface FrequentQuestionProps {
  data: FrequentQuestion[];
}

const FrequentQuestion: React.FC<FrequentQuestionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.preventDefault();
    const img = e.target as HTMLImageElement;
    setActiveIndex(activeIndex === index ? null : index);

    if (img.style.transform === "rotate(180deg)") {
      img.style.transform = "rotate(0deg)";
      return;
    }
    img.style.transform = "rotate(180deg)";
  };

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`frequent__question ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <div className="frequent__question__header">
            <h3>{item.title}</h3>
            <button
              onClick={(e) => handleClick(e, index)}
              className="frequent__question__button"
            >
              <img src={arrow} alt="" />
            </button>
          </div>

          <hr className="frequent__question__line"></hr>
          <p>{activeIndex === index ? item.description : ""}</p>
        </div>
      ))}
    </>
  );
};

export default FrequentQuestion;
