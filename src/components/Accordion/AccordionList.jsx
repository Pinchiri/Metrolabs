"use client";

import React, { useEffect } from "react";
import Accordion from "./Accordion";

const AccordionList = (prop) => {
  const list = prop.data;

  return (
    <div className="max-h-max flex justify-center items-center">
      <div className="list">
        {Object.keys(list).map((k, index) => (
          <Accordion
            key={index}
            data={list[k]}
            title={k}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionList;
