import { IconButton, SimpleGrid, Tabs } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { v4 } from "uuid";
import EditableText from "./editable-text";
import { VscTrash } from "react-icons/vsc";
import { borderColor } from "../../data/home";
import { Tooltip } from "../ui/tooltip";
import useShowData from "../../hooks/useShowData";
import { DeleteTodo } from "./delete-todo";

// "{"todo":{"2024-11-24":{"work":[{"status":"pending","activity":"osi boy","time":""},{"status":"pending","activity":"sma dave","time":""},{"status":"pending","activity":"good times","time":"04:20"},{"status":"pending","activity":"hello boss","time":"12:30"}]},"2024-11-02":{"work":[{"status":"pending","activity":"good things","time":""},{"status":"pending","activity":"osi boy","time":""},{"status":"pending","activity":"sma dave","time":""}]}}}"

export const ShowList = ({ data, setTrackDateForFilter }) => {
  const {
    handleMarkAsCompleted,
    handleDeleteActivity,
    handleEditActivityList,
    reSave,
    handleSavingToLocalStorage,
    handleDeleteTodo,
  } = useShowData();

  return (
    <section className="space-y-5 min-w-[300px] px-2  md:w-[500px]">
      <SimpleGrid columns={2} gap="14" width="full">
        <Tabs.Root
          size={"xl"}
          defaultValue={Object.keys(data.todo)[0]}
          variant={"line"}
          onValueChange={(value) => setTrackDateForFilter(value.value)}
        >
          <Tabs.List className="flex gap-10">
            {Object.keys(data.todo).map((el) => (
              <Tabs.Trigger className="text-sm" key={v4()} value={el}>
                <div className="flex items-center gap-3">
                  <span>{el}</span>
                  <DeleteTodo handleDelete={handleDeleteTodo} date={el}/>
                </div>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <section className="mt-5">
            {Object.keys(data.todo).map((el) => (
              <Tabs.Content key={v4()} value={el} className="bordery w-fit">
                <section className="flex flex-col gap-3">
                  {data.todo[el].work.map((item, index) => (
                    <section
                      key={v4()}
                      className={`flex items-center gap-1 w-[300px] md:w-[400px] relative mb-4y ${
                        item.time !== "" && "mt-10 md:mt-6"
                      }`}
                    >
                      {item.time !== "" && (
                        <p className="text-xs absolute top-[-50%] left-0 text-gray-500">
                          Time - {item.time}
                        </p>
                      )}
                      <div className="h-14 w-10 border text-black flex items-center justify-center">
                        <TbGridDots />
                      </div>
                      <section
                        className={`border ${borderColor(
                          item.status
                        )} flex items-center justify-between max-w-screen-md w-[300px] md:w-[400px] rounded-md p-2 flex-1`}
                      >
                        <div className="flex items-center">
                          <Tooltip content="Mark as completed">
                            <IconButton
                              padding={0}
                              margin={"-1.5"}
                              aria-label="mark as completed"
                              onClick={() => handleMarkAsCompleted(index, el)}
                            >
                              {item.status === "completed" ? (
                                <FaRegCircleCheck />
                              ) : (
                                <MdRadioButtonUnchecked />
                              )}
                            </IconButton>
                          </Tooltip>
                          <EditableText
                            defaultValue={item.activity}
                            handleEdit={handleEditActivityList}
                            index={index}
                            date={el}
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
                            onClick={() => handleDeleteActivity(index, el)}
                          >
                            <VscTrash color="red" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </section>
                  ))}
                </section>
              </Tabs.Content>
            ))}
          </section>
        </Tabs.Root>
      </SimpleGrid>
      {reSave && (
        <div className="flex justify-start">
          <Tooltip content="re-saves to local storage">
            <button
              onClick={handleSavingToLocalStorage}
              className="text-sm font-medium rounded bg-blue-600 text-white px-4 py-2 w-fit disabled:bg-blue-300"
            >
              save edits
            </button>
          </Tooltip>
        </div>
      )}
    </section>
  );
};
