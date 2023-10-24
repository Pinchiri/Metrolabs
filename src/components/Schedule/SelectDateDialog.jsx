import guyAsset from "../../assets/guy-asset.png";




const SelectDateDialog = () => {
    return (
        <div>
            <h2 className="text-stratos tracking-tighter text-2xl sm:text-5xl lg:self-center font-b612 font-bold " style={{ fontSize: '45px' }}>
                Seleccione una fecha
            </h2>
            <img
                src={guyAsset.src}
                alt="Guy Asset"
                className="h-1/2 sm:h-1/3 lg:h-[350px] w-1/2 sm:w-1/3 lg:w-[170px] relative z-10 animate-fade-left mr-4 mt-4"
            />
        </div>
    );
}

export default SelectDateDialog;