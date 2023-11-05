"user client";

import React, { useEffect, useState } from "react";
import SingleAccordion from "./SingleAccordion";

const ListAccordion = (dateInfo) => {
  const [selected, setSelected] = useState("");
  const list = dateInfo.dateInfo;
  const handleChange = (itemId) => {
    setSelected((prevSelected) => (prevSelected === itemId ? null : itemId));
  };

  useEffect(() => {
    setSelected("");
  }, [list]);

  return (
    <>
      {Object.keys(list).map((k, index) => (
        <SingleAccordion
          key={index}
          id={k}
          selected={selected}
          handleChange={handleChange}
          title={k}
          data={list[k]}
        />
      ))}
    </>
  );
};

export default ListAccordion;
