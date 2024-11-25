import React, { Fragment } from "react";
import { Tooltip } from "../ui/tooltip";

const ActionBtns = ({
  displayList,
  handleSavingToLocalStorage,
  handleClearLocalStorage,
  btnText,
}) => {
  return (
    <Fragment>
      {displayList.work?.length > 0 && (
        <div className="flex justify-end gap-2">
          {/* save list to local-storage */}
          <Tooltip content="saves to local storage">
            <button
              disabled={btnText === "saved"}
              onClick={handleSavingToLocalStorage}
              className="text-sm font-medium rounded bg-blue-600 text-white px-4 py-2 w-fit disabled:bg-blue-300"
            >
              {btnText}
            </button>
          </Tooltip>
        </div>
      )}
    </Fragment>
  );
};

export default ActionBtns;

// {displayList.work?.length > 0 && (
//     <div className="flex justify-end gap-2">
//       {/* save list to local-storage */}
//       <Tooltip content="saves to local storage">
//         <button
//           disabled={btnText === "saved"}
//           onClick={handleSavingToLocalStorage}
//           className="text-sm font-medium rounded bg-blue-600 text-white px-4 py-2 w-fit disabled:bg-blue-300"
//         >
//           {btnText}
//         </button>
//       </Tooltip>
//       {/* clear local storage */}
//       <Tooltip content="clear from storage">
//         <button
//           onClick={handleClearLocalStorage}
//           className="text-xl  font-medium rounded bg-red-200 text-white px-2 py-1 w-fit"
//         >
//           <VscTrash color="red" />
//         </button>
//       </Tooltip>
//     </div>
//   )}
