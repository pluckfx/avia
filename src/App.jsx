import React, { useMemo, useState } from "react";
import "./App.css";
import { Content } from "./components/Content/Content";
import { Main } from "./components/Main/Main";
import { Tickets } from "./components/Tickets/Tickets";
import { Transplants } from "./components/Transplants/Transplants";
import logo from "./images/Logo.png";

const data = [
  { price: "13 400", company: "Air Astana", time: { hours: 11, min: 20 }, transplants: ["HKG"] },
  { price: "12 400", company: "Air Astana", time: { hours: 12, min: 20 }, transplants: ["HKG", "JNB"] },
  { price: "11 400", company: "Air Astana", time: { hours: 13, min: 20 }, transplants: ["HKG"] },
  { price: "10 400", company: "Air Astana", time: { hours: 10, min: 20 }, transplants: ["HKG", "JNB", "POP"] },
  { price: "12 400", company: "Air Astana", time: { hours: 9, min: 20 }, transplants: ["HKG", "JNB"] },
  { price: "11 400", company: "Air Astana", time: { hours: 11, min: 20 }, transplants: ["HKG", "JNB", "POP"] }
];

const checkboxes = [
  { id: "all", label: "Все" },
  { id: 0, label: "Без пересадок" },
  { id: 1, label: "1 пересадка" },
  { id: 2, label: "2 пересадки" },
  { id: 3, label: "3 пересадки" }
];

function App() {
  const [selectedStops, setSelectedStops] = useState([]);
  const [sortType, setSortType] = useState(null);

  const filteredData = useMemo(() => {
    let result = [...data];

    if (selectedStops.length && !selectedStops.includes("all")) {
      result = result.filter(ticket =>
        selectedStops.includes(ticket.transplants.length)
      );
    }

    if (sortType) {
      result.sort((a, b) => {
        const priceA = +a.price.replace(/\s/g, "");
        const priceB = +b.price.replace(/\s/g, "");
        const timeA = a.time.hours * 60 + a.time.min;
        const timeB = b.time.hours * 60 + b.time.min;

        if (sortType === "pUp") return priceA - priceB;
        if (sortType === "pDown") return priceB - priceA;
        if (sortType === "tUp") return timeA - timeB;
        if (sortType === "tDown") return timeB - timeA;

        return 0;
      });
    }

    return result;
  }, [selectedStops, sortType]);

  const handleStopsChange = id => {
    if (id === "all") {
      setSelectedStops(["all"]);
      return;
    }

    setSelectedStops(prev => {
      const withoutAll = prev.filter(i => i !== "all");
      return prev.includes(id)
        ? withoutAll.filter(i => i !== id)
        : [...withoutAll, id];
    });
  };

  return (
    <div className="App">
      <div className="avia__logo">
        <img src={logo} alt="logo" />
      </div>

      <Main
        transplantsChild={
          <Transplants
            options={checkboxes}
            selected={selectedStops}
            onChange={handleStopsChange}
          />
        }
        ticketsChild={<Tickets onSort={setSortType} />}
      >
        {filteredData.length ? (
          filteredData.map((ticket, i) => (
            <Content key={i} {...ticket} />
          ))
        ) : (
          <span>Билеты не найдены</span>
        )}
      </Main>
    </div>
  );
}

export default App;