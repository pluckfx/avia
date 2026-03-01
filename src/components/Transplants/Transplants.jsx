import React from "react";
import s from "./Transplants.module.css";

export const Transplants = ({
  options = [],
  selected = [],
  onChange = () => {}
}) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Количество пересадок</div>

      {options.map(option => (
        <label key={option.id} className={s.select}>
          <input
            type="checkbox"
            checked={selected.includes(option.id)}
            onChange={() => onChange(option.id)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};