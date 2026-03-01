import React from "react";
import s from "./Main.module.css";

export const Main = ({ transplantsChild, ticketsChild, children }) => {
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        {transplantsChild}
        {ticketsChild}
      </div>
      <div className={s.content}>{children}</div>
    </div>
  );
};