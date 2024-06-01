import {
  BlackArrowDown,
  BlackArrowUp,
  WhiteArrowDown,
  WhiteArrowUp,
} from "assets/images";
import { ButtonStatic } from "components/Button";
import { useState } from "react";
import useTime from "services/useTime";
import { ComponentProps } from "utils/types/props/types";

interface DropdownProps extends ComponentProps {
  options: any[];
}

const Dropdown = ({ state, setState, property, options }: DropdownProps) => {
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);
  const { time } = useTime("hours");

  const handleClick = (option: any) => {
    setState({
      ...state,
      [property]: option.name,
    });
    setOptionsIsOpen(false);
  };

  return (
    <div className="dropdown">
      <ButtonStatic
        type="button"
        onClick={() => setOptionsIsOpen(!optionsIsOpen)}
        calledFrom="sidebar"
      >
        <p className={`dropdown-button--${time}`}>
          {state[property] === "" ? "Select" : state[property]}
        </p>
        {optionsIsOpen ? (
          time === 11 || time === 12 ? (
            <WhiteArrowUp />
          ) : (
            <BlackArrowUp />
          )
        ) : time === 11 || time === 12 ? (
          <WhiteArrowDown />
        ) : (
          <BlackArrowDown />
        )}
      </ButtonStatic>
      {optionsIsOpen ? (
        <div className="dropdown-options">
          {options.map((option, i) => (
            <ButtonStatic
              key={i}
              type="button"
              onClick={() => handleClick(option)}
              calledFrom="main"
            >
              {option.name}
            </ButtonStatic>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
