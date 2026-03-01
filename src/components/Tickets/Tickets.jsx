import React from "react";
import s from "./Tickets.module.css";

export const Tickets = ({ onSort }) => {
  return (
    <div className={s.container}>
      <button onClick={() => onSort("pUp")}>Цена ↑</button>
      <button onClick={() => onSort("pDown")}>Цена ↓</button>
      <button onClick={() => onSort("tUp")}>Время ↑</button>
      <button onClick={() => onSort("tDown")}>Время ↓</button>
    </div>
  );
};