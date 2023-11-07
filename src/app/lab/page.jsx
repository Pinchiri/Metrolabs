import LabInformation from "./LabInformation";
import LabEquipment from "./LabEquipment";
import LabGuideRules from "./LabGuideRules";
import LabGeneralIndex from "./LabGeneralIndex";
import LabTeachersInformation from "./LabTeachersInformation";

const LabInfo = () => {
  return (
    <div className="w-full flex flex-col ">
      <LabGeneralIndex />
      <LabInformation />
      <LabTeachersInformation />
      <LabEquipment />
      <LabGuideRules />
    </div>
  );
};

export default LabInfo;
