"user client";

import React, { useEffect } from "react";

const SingleAccordion = ({ id, selected, handleChange, title, data }) => {
  const isActive = selected === id;

  return (
    <div className="collapse collapse-plus mb-2">
      <input
        type="checkbox"
        name="my-accordion"
        value={id}
        checked={isActive}
        onChange={() => handleChange(id)}
        className="peer"
        id={id}
      />
      <label
        htmlFor={id}
        className={`collapse-title text-xl font-medium bg-primary text-primary-content peer-checked:bg-white peer-checked:text-black`}
      >
        {title}
      </label>
      <div
        className={`collapse-content ${
          isActive ? "block" : "hidden"
        } bg-primary text-primary-content peer-checked:bg-white peer-checked:text-black`}
      >
        {Object.keys(data).map((k, index) => (
          <div
            className="flex"
            key={index}
          >
            <p className="font-bold mr-2">{k}:</p>
            <p>{data[k]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleAccordion;
