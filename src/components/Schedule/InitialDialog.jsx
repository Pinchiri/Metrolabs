import guyAsset from "../../assets/guy-asset.png";

const InitialDialog = () => {
  return (
    <div className="flex flex-col items-center">
      <h2
        className="text-stratos tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 font-bold"
        style={{ fontSize: "45px", whiteSpace: "nowrap" }}
      >
        Selecciona una fecha
      </h2>
      <img
        src={guyAsset.src}
        alt="Guy Asset"
        className="h-1/2 sm:h-1/3 lg:h-[350px] w-1/2 sm:w-1/3 lg:w-[170px] relative z-10 animate-fade-left mr-4 mt-4"
      />
    </div>
  );
};

export default InitialDialog;
