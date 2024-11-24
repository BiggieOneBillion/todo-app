import React from "react";
import InputBox from "./input-box";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import DisplayActivityList from "./display-activity-list";

const HomeComponent = () => {
  const { list, setList } = useGlobalContext();

  const handleToList = (activity) => {
    let todo;
    if (Object.keys(list).length == 0) {
      todo = { date: new Date().toLocaleDateString(), work: [activity] };
      setList(todo);
    } else {
      setList({ ...list, work: [activity, ...list.work] });
    }
  };

  return (
    <section className="min-h-screen flex pt-20 justify-center bg-white">
      <main className="flex flex-col md:flex-row items-start gap-5  justify-start md:justify-center bg-white space-y-10 px-3">
        <section className="flex flex-col items-start  justify-center bg-white space-y-10">
          <header className="space-y-5">
            <h1 className="text-2xl font-mono font-bold text-black">
              Todo List
            </h1>
            <p className=" md:max-w-lg text-gray-500 text-xs font-light">
              Create and organise your tasks and activites for the day or week.{" "}
              <br /> Keep track of your progress and stay on top of your tasks.{" "}
              <br /> Drag to rearrange your task list.
            </p>
          </header>
          {/* input box */}
          <InputBox addToList={handleToList} />
        </section>
        <section>
          <DisplayActivityList />
        </section>
      </main>
    </section>
  );
};

export default HomeComponent;
