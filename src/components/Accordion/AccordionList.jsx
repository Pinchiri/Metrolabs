"use client";

import React from "react";
import Accordion from "./Accordion";

const AccordionList = (props) => {
  const list = props.list;

  return (
    <div className="max-h-max flex justify-center items-center">
      <div className="list">
        {list.map((item, index) => (
          <Accordion
            key={index}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionList;
