import  { useEffect, useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { filterData, hasTimePassed } from "../data/home";

export const useDisplayActivities = () => {
  // FROM GLOBAL CONTEXT
  const { list, setList, dateInput } = useGlobalContext();

  // STATE VALUES
  const [displayList, setDisplayList] = useState({}); // we would use this state to perform editing and deleting and remind the user to save before existing.
  const [position, setPosition] = useState(0);
  const [localData, setLocalData] = useState(false);
  const [btnText, setBtnText] = useState("Save Activities");
  const [showTodoData, setShowTodoData] = useState({});

  // FUNCTIONS
  function handleMarkAsCompleted(index) {
    if (displayList.work) {
      displayList.work = displayList.work?.map((el, i) => {
        if (i === index) {
          el.status = "completed";
          return el;
        }
        return el;
      });
      let result = { ...displayList };

      setDisplayList(result);
    }
  }

  function handleFilter(i) {
    setPosition(i);
    const result = { ...list };

    console.log(result);

    if (filterData[i] === "all") {
      setDisplayList(result);
      return;
    }
    if (result.work) {
      result.work = result.work.filter((el) => el.status === filterData[i]);
      setDisplayList(result);
    }
  }

  const removeDuplicates = (data) => {
    const uniqueData = Array.from(
      new Set(data.map((item) => item.activity))
    ).map((activity) => data.find((item) => item.activity === activity));

    return uniqueData;
  };

  // SAVING TO LOCALSTORAGE
  function handleSavingToLocalStorage() {
    let fromStorage = localStorage.getItem("todo");
    if (fromStorage) {
      let parsed = JSON.parse(fromStorage);
      if (Object.keys(parsed.todo).includes(dateInput)) {
        parsed.todo[dateInput].work = removeDuplicates([
          ...displayList.work,
          ...parsed.todo[dateInput].work,
        ]);
        localStorage.setItem("todo", JSON.stringify(parsed));
      } else {
        parsed.todo[dateInput] = displayList;
        localStorage.setItem("todo", JSON.stringify(parsed));
      }
      setBtnText("saved");
      setList({});
      setDisplayList({});
    } else {
      localStorage.setItem(
        "todo",
        JSON.stringify({ todo: { [dateInput]: displayList } })
      );
      setBtnText("saved");
      setList({});
      setDisplayList({});
    }
  }
  // CHECKING AND LOADING FROM LOCAL STORAGE
  function handleCheckLocalStorage() {
    let fromStorage = localStorage.getItem("todo");

    if (fromStorage) {
      setLocalData(true);
    }
  }

  function checkTime(arr) {
    let result = arr.map((el) => {
      if (el.time !== "" && hasTimePassed(el.time)) {
        el.status = "uncompleted";
        return el;
      }
      return el;
    });
    return result;
  }

  function handleLoadLocalData() {
    let fromStorage = localStorage.getItem("todo");
    let parsed = JSON.parse(fromStorage);
    setShowTodoData(parsed);
    setLocalData(false);
    // if (
    //   fromStorage &&
    //   JSON.parse(fromStorage).todo[0].date === new Date().toLocaleDateString()
    // ) {
    //   if (Array.isArray(list.work) && list.work.length > 0) {
    //     setList({
    //       ...list,
    //       work: checkTime([
    //         ...new Set([...list.work, ...JSON.parse(fromStorage).todo[0].work]),
    //       ]),
    //     });
    //     setLocalData(false);
    //   } else {
    //     setList({
    //       ...JSON.parse(fromStorage).todo[0],
    //       work: checkTime(JSON.parse(fromStorage).todo[0].work),
    //     });
    //     setLocalData(false);
    //   }
    // }
  }

  function handleClearLocalStorage() {
    localStorage.removeItem("todo");
    setList({});
  }

  function handleEditActivityList(index, value) {
    let result = displayList.work.map((el, i) => {
      if (i === index) {
        el.activity = value;
        return el;
      }
      return el;
    });
    setDisplayList({ ...displayList, work: [...result] });
  }

  function handleDeleteActivity(index) {
    let result = displayList.work.filter((el, i) => i !== index);
    setList({ ...list, work: result });
  }

  // SIDE-EFFECTS
  useEffect(() => {
    if (Array.isArray(list.work) && Array.isArray(displayList.work)) {
      setDisplayList({
        ...displayList,
        work: [...new Set([...list.work, ...displayList.work])],
      });
      setBtnText("Save Activities");
    }
  }, [list]); // when the list value is completely changed / updated not just the list.work value, then this effect runs and updates the display state also to reflex that change

  useEffect(() => {
    setDisplayList(list);
    setBtnText("Save Activities");
  }, [list.work?.length]); // only runs when the length of the work array is updated.

  // RETURNED VALUES

  return {
    list,
    // STATES
    displayList,
    position,
    localData,
    btnText,
    // FUNCTIONS
    setList,
    setDisplayList,
    handleEditActivityList,
    handleMarkAsCompleted, // marks the activity as complete
    handleDeleteActivity, // deletes the activity
    handleFilter, // filters data shown using the tags
    handleSavingToLocalStorage, // saves data to local storage
    handleCheckLocalStorage, // checks if their is data in the local storage
    handleLoadLocalData, // loads the data if the data exist in the localstorage
    handleClearLocalStorage, // clears the data stored in the local storage.
    showTodoData,
  };
};
