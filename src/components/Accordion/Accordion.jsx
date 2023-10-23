import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Accordion = (props) => {
  const [item, setItem] = useState(props.data);

  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  return (
    <div
      className={`bg-manz-200 p-5 pb-1 border border-[#c9c6c655] rounded-md
         ${item.active === 1 ? "is-active bg-white" : ""}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-start">
          <div className="w-auto mt-2 mr-2">
            <WatchLaterIcon className="text-3xl" />
          </div>
          <div className="flex flex-col items-start">
            <div className={`w-full ${item.active === 1 ? "font-bold" : ""}`}>
              {item.title}
            </div>
            <div className="w-full">{item.subtitle}</div>
          </div>
          <div className="w-auto ml-auto mt-2">
            <EventAvailableIcon className="text-3xl" />
          </div>
        </div>
        <div
          className={`text-xl cursor-pointer flex items-center justify-center`}
          onClick={handleToggleActive}
        >
          <KeyboardArrowRightIcon
            className={`${item.active === 1 ? "rotate-[270deg]" : "rotate-90"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden max-h-0 duration-500 ${
          item.active === 1 ? "max-h-[100px]" : ""
        }`}
      >
        {item.content}
      </div>
    </div>
  );
};

export default Accordion;
