"user client";

import React, { useEffect, useState } from "react";
import SingleAccordion from "./SingleAccordion";

const ListAccordion = (dateInfo) => {
  const [selected, setSelected] = useState("item1");
  const list = dateInfo.dateInfo;
  const handleChange = (itemId) => {
    setSelected((prevSelected) => (prevSelected === itemId ? null : itemId));
  };

  useEffect(() => {
    console.log("ListAccordion:", list);
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
