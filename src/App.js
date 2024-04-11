import { useState } from "react";

export default function App() {
  const [activeButton, setActiveButton] = useState("flight");

  function handleActive(buttonName) {
    setActiveButton(buttonName);
  }
  return (
    <div className="app">
      <Purpose>
        <>
          <Button
            active={activeButton === "flight"}
            onHandleActive={() => handleActive("flight")}
          >
            Flight
          </Button>
          <Button
            active={activeButton === "stay"}
            onHandleActive={() => handleActive("stay")}
          >
            Stays
          </Button>
          <Button
            active={activeButton === "car"}
            onHandleActive={() => handleActive("car")}
          >
            Car Rentals
          </Button>
        </>
      </Purpose>
      <SelectOptions>
        <SelectOption option={["One-Way", "Two-Ways"]} />
        <SelectOption option={["1 Adult", "2 Adults", "3 Adults"]} />
        <SelectOption option={["Economy", "Business"]} />
      </SelectOptions>
      <Forms />
      <Button className={"selectBtn"}>Search</Button>
    </div>
  );
}

function Purpose({ children }) {
  return <div className="purpose">{children}</div>;
}

function Button({ children, active, className = "btn", onHandleActive }) {
  return (
    <button
      onClick={onHandleActive}
      className={active ? `${className} active` : className}
    >
      {children}
    </button>
  );
}

function SelectOptions({ children }) {
  return <div className="selectOptions">{children}</div>;
}
function SelectOption({ option }) {
  return (
    <div>
      <select className="select">
        {option.map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

function Forms() {
  return (
    <div className="forms">
      <Form placeholder={"from:"} type={"text"} />
      <Form placeholder={"to:"} type={"text"} />
      <Form placeholder={"calendar"} type={"date"} />
    </div>
  );
}

function Form({ placeholder, type }) {
  return <input type={type} placeholder={placeholder} className="form" />;
}
