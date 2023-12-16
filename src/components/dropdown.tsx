// components/Dropdown.js
"use client";
import React, { useState, ChangeEvent } from "react";

export default function Dropdown({
  defaultValue,
  options,
}: {
  defaultValue: string;
  options: string[];
}) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="m-3">
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
        className="bg-gray-300 rounded-xl py-2 px-3 justify-center items-center"
      >
        <option value="">{defaultValue}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
}
