import React, { useEffect } from "react";
import LoadFromLocalStorage from "./local-storage-notice";
import FilterTags from "./filter-tags";
import { ShowList } from "./show-list";
import useShowData from "../../hooks/useShowData";
import { useGlobalContext } from "../../hooks/useGlobalContext";

const ShowAllTodo = () => {
  const {
    handleLoadLocalData,
    localData,
    handleFilter,
    position,
    handleCheckLocalStorage,
    trackDateForFilter,
    setTrackDateForFilter,
  } = useShowData();
  const { showTodoData } = useGlobalContext();

  useEffect(() => {
    handleCheckLocalStorage();
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-3">
      <section className="max-w-2xl space-y-5 min-h-[500px]">
        <header className="space-y-3">
          <h1 className="text-2xl font-mono font-bold text-black">Todo List</h1>
          <p className=" md:max-w-lg text-gray-500 text-xs font-light">
            View your tasks and activites for the day or week. <br />
            You can filter the task based on the status of the task either
            pending and completed.
          </p>
        </header>
        <LoadFromLocalStorage
          handleLoadLocalData={handleLoadLocalData}
          localData={localData}
        />
        <FilterTags
          handleFilter={handleFilter}
          position={position}
          date={trackDateForFilter}
        />
        {showTodoData.todo && (
          <ShowList
            data={showTodoData}
            setTrackDateForFilter={setTrackDateForFilter}
          />
        )}
      </section>
    </main>
  );
};

export default ShowAllTodo;
