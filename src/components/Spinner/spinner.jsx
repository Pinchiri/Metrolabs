import { Skeleton } from "@mui/material";
const Spinner = () => {
    return (
        <>
            <div className="w-full px-20 py-10">
                <Skeleton variant="text" width="100%" height={50} />
                <Skeleton variant="text" width="100%" height={50} />
                <Skeleton variant="text" width="100%" height={50} />
                <Skeleton variant="rectangular" width="100%" height={120} />
                <Skeleton variant="text" width="100%" height={50} />
                <Skeleton variant="rectangular" width="100%" height={120} />
                <Skeleton variant="text" width="100%" height={50} />
                <Skeleton variant="text" width="100%" height={50} />
                <Skeleton variant="rectangular" width="100%" height={120} />
            </div>
        </>
    )
};

export default Spinner;