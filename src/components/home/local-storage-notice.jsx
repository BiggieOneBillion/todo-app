import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";

const LoadFromLocalStorage = ({ localData, handleLoadLocalData }) => {
  return (
    <>
      {localData ? (
        <p className="flex items-center gap-3 bg-green-100 border border-green-400 text-green-900 text-xs px-2 py-1 w-fit">
          <span className="text-sm">
            <PiWarningCircleLight />
          </span>
          <span>Local data exist, do you want to load it? </span>{" "}
          <button
            onClick={handleLoadLocalData}
            className="px-2 py-1 bg-green-500 rounded-md"
          >
            Load it
          </button>
        </p>
      ) : (
        <p className="flex items-center gap-3 bg-red-100 border border-red-400 text-red-900 text-xs px-2 py-1 w-fit">
          <span className="text-sm">
            <PiWarningCircleLight />
          </span>
          <span>No data exist, please add some activities </span>{" "}
        </p>
      )}
    </>
  );
};

export default LoadFromLocalStorage;
