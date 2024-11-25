import React, { Fragment } from "react";
import { IconButton, Text } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";
import { VscTrash } from "react-icons/vsc";
import { borderColor } from "../../data/home";
import { v4 } from "uuid";
import EditableText from "./editable-text";
import { Reorder } from "framer-motion";

const DisplayList = ({
  displayList,
  handleMarkAsCompleted,
  handleDelete,
  handleEdit,
  setList,
}) => {
  return (
    <Fragment>
      <Reorder.Group
        values={displayList.work || []}
        onReorder={(e) => setList({ ...displayList, work: e })}
      >
        <ul className="flex flex-col gap-4 pt-5 w-full">
          {displayList?.work?.map((item, i) => (
            <Reorder.Item value={item} key={v4()}>
              <section
                key={i}
                className={`flex items-center gap-1 w-[300px] md:w-[400px] relative mb-4y ${
                  item.time !== "" && "mt-10 md:mt-6"
                }`}
              >
                {item.time !== "" && (
                  <p className="text-xs absolute top-[-50%] left-0 text-gray-500">
                    Time - {item.time}
                  </p>
                )}
              
                <section
                  className={`border ${borderColor(
                    item.status
                  )} flex items-center justify-between max-w-screen-md w-[300px] md:w-[400px] rounded-md p-2 flex-1`}
                >
                  <div className="flex items-center">
                    <EditableText
                      defaultValue={item.activity}
                      handleEdit={handleEdit}
                      index={i}
                    />
                  </div>
                </section>
                {/* actions */}
                <div className="flex items-center">
                  {/* delete button */}
                  <Tooltip content="Delete">
                    <IconButton
                      padding={0}
                      margin={"-1.5"}
                      aria-label="delete list item"
                      onClick={() => handleDelete(i)}
                    >
                      <VscTrash color="red" />
                    </IconButton>
                  </Tooltip>
                </div>
              </section>
            </Reorder.Item>
          ))}
        </ul>
      </Reorder.Group>
    </Fragment>
  );
};

export default DisplayList;
