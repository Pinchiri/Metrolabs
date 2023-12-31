"user client";

import React, { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const ClassesList = ({
  data,
  setEditIndex,
  setEditData,
  setDeleteIndex,
  setToasterProperties,
  showToast,
}) => {
  return (
    <>
      {data.map((item, index) => (
        <ClassesCard
          key={index}
          index={index}
          className={item.className}
          professor={item.professor}
          trimester={item.trimester}
          day={item.day}
          start={item.start}
          end={item.end}
          setEditIndex={setEditIndex}
          setEditData={setEditData}
          setDeleteIndex={setDeleteIndex}
          setToasterProperties={setToasterProperties}
          showToast={showToast}
        />
      ))}
    </>
  );
};

export default ClassesList;
