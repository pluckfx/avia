import React from "react";
import s from "./Content.module.css";

export const Content = ({ price, company, time, transplants }) => {
  return (
    <div className={s.card}>
      <div className={s.price}>{price} ₽</div>

      <div className={s.row}>
        <div>
          <div className={s.label}>Авиакомпания</div>
          <div>{company}</div>
        </div>

        <div>
          <div className={s.label}>В пути</div>
          <div>
            {time.hours}ч {time.min}м
          </div>
        </div>

        <div>
          <div className={s.label}>
            {transplants.length} пересадк
            {transplants.length === 1 ? "а" : "и"}
          </div>
          <div>{transplants.join(", ")}</div>
        </div>
      </div>
    </div>
  );
};