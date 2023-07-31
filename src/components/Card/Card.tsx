import { FC, useState } from "react";
import "./Card.scss";

export const Card: FC<{
  icon: string;
  heading1: string;
  heading2: string;
  heading3?: string;
  content1: string | number;
  content2: string | number;
  content3?: string | number;
  bonus1?: string;
  bonus2?: string;
}> = ({
  icon,
  heading1,
  heading2,
  heading3,
  content1,
  content2,
  content3,
  bonus1,
  bonus2,
}) => {
  // const [active, setActive] = useState<string>("All Products");

  return (
    <div
      className={
        heading1 === "Abandoned Cart"
          ? "card card-abandoned"
          : heading1 === "All Orders"
          ? "card card-orders"
          : "card"
      }
    >
      <div className="card__top">
        <img src={icon} alt="Section icon" />

        {heading1 !== "All Products" && (
          <div>
            <p>This Week</p>

            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="card__bottom">
        <div className="card__bottom--item">
          <p
            className={
              heading1 === "Abandoned Cart"
                ? "card__bottom--item-heading title-abandoned"
                : "card__bottom--item-heading"
            }
          >
            {heading1}
          </p>
          <p className="card__bottom--item-content">
            {content1} <span>{bonus1 ? bonus1 : ""}</span>
          </p>
        </div>

        <div className="card__bottom--item">
          <p className="card__bottom--item-heading">{heading2}</p>
          <p className="card__bottom--item-content">
            {content2} <span>{bonus2 ? bonus2 : ""}</span>
          </p>
        </div>

        {heading3 && content3 && (
          <div className="card__bottom--item">
            <p className="card__bottom--item-heading">{heading3}</p>
            <p className="card__bottom--item-content">{content3}</p>
          </div>
        )}
      </div>
    </div>
  );
};
