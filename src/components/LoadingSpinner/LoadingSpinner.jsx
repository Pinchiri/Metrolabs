import React from "react";

const LoadingSpinner = ({ color = "primary", extraStyles }) => {
  const colors = {
    primary: "text-primary",
    masala: "text-secondary",
    stratos: "text-accent",
    oxford: "text-neutral",
  };

  return (
    <span
      className={`loading loading-spinner loading-xs sm:loading-sm md:loading-md ${colors[color]} ${extraStyles}`}
    ></span>
  );
};

export default LoadingSpinner;
