import React from "react";
import LabInformation from "./LabInformation";
import LabEquipment from "./LabEquipment";
import LabGuideRules from "./LabGuideRules";

const LabInfo = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <LabInformation />
      <LabEquipment />
      <LabGuideRules />
    </div>
  );
};

export default LabInfo;
