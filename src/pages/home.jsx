import React, { useState } from "react";
import HomeComponent from "../components/home";
import ShowAllTodo from "../components/home/show-all-todo";

const HomePage = () => {
  const [toggle, setToggle] = useState("add-todo");

  const handleSeeTodo = () => setToggle("see-todo");
  const handleAddTodo = () => setToggle("add-todo");

  return (
    <>
      <nav className="fixed top-3 translate-x-[-50%] left-[50%] w-[300px] bg-black py-3 rounded-xl flex items-center gap-4 px-3">
        <button
          className={`py-1 px-3 text-sm  ${
            toggle === "add-todo"
              ? "text-black bg-white "
              : "text-white bg-black"
          }  rounded-xl border`}
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
        <button
          className={`py-1 px-3 text-sm  ${
            toggle === "see-todo"
              ? "text-black bg-white "
              : "text-white bg-black"
          }  rounded-xl border`}
          onClick={handleSeeTodo}
        >
          Todo List
        </button>
      </nav>

      {toggle === "add-todo" && <HomeComponent />}
      {toggle === "see-todo" && <ShowAllTodo />}
    </>
  );
};

export default HomePage;
