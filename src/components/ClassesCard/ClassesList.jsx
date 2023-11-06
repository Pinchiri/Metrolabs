"user client";

import React, { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const ClassesList = (props) => {
  const [selected, setSelected] = useState("");
  const list = dateInfo.dateInfo;
  const handleChange = (itemId) => {
    setSelected((prevSelected) => (prevSelected === itemId ? null : itemId));
  };

  useEffect(() => {
    setSelected("");
  }, [list]);

  return <>{}</>;
};

export default ClassesList;
