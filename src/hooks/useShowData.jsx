import  { useEffect, useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { filterData } from "../data/home";

//    {
//     "todo": {
//       "2024-11-24": {
//         "work": [
//           {
//             "status": "pending",
//             "activity": "osi boy",
//             "time": ""
//           },
//           {
//             "status": "pending",
//             "activity": "sma dave",
//             "time": ""
//           },
//           {
//             "status": "pending",
//             "activity": "good times",
//             "time": "04:20"
//           },
//           {
//             "status": "pending",
//             "activity": "hello boss",
//             "time": "12:30"
//           }
//         ]
//       },
//       "2024-11-02": {
//         "work": [
//           {
//             "status": "pending",
//             "activity": "good things",
//             "time": ""
//           },
//           {
//             "status": "pending",
//             "activity": "osi boy",
//             "time": ""
//           },
//           {
//             "status": "pending",
//             "activity": "sma dave",
//             "time": ""
//           }
//         ]
//       }
//     }
//   }

const useShowData = () => {
  const [localData, setLocalData] = useState(false); // checks if localData exist.
  const { showTodoData, setShowTodoData } = useGlobalContext(); // loaded data from local-storage.
  const [position, setPosition] = useState(0);
  const [reSave, setReSave] = useState(false);
  const [originalData, setOriginalData] = useState({ ...showTodoData });
  const [trackDateForFilter, setTrackDateForFilter] = useState();

  const handleResaveToTrue = () => setReSave(true);
  const handleResaveToFalse = () => setReSave(false);

  function handleMarkAsCompleted(index, element) {
    let data = showTodoData.todo[element];
    if (data) {
      data.work = data.work?.map((el, i) => {
        if (i === index) {
          el.status = "completed";
          return el;
        }
        return el;
      });
      let result = { ...showTodoData };

      setShowTodoData(result);
      handleResaveToTrue();
    }
  }

  function handleFilter(i, date) {
    setPosition(i);

    let fromStorage = localStorage.getItem("todo");
    let parsed = JSON.parse(fromStorage);
    let result = { ...parsed };

    if (filterData[i] === "all") {
      setShowTodoData(result);
      return;
    }
    if (result.todo[date].work) {
      result.todo[date].work = result.todo[date].work.filter(
        (el) => el.status === filterData[i]
      );
      setShowTodoData(result);
    }
  }

  function handleCheckLocalStorage() {
    let fromStorage = localStorage.getItem("todo");

    if (fromStorage) {
      setLocalData(true);
    }
  }

  function handleLoadLocalData() {
    let fromStorage = localStorage.getItem("todo");
    let parsed = JSON.parse(fromStorage);
    setShowTodoData(parsed);
    setLocalData(false);
  }

  function handleEditActivityList(index, value, date) {
    let data = showTodoData.todo[date];
    let result = data.work.map((el, i) => {
      if (i === index) {
        el.activity = value;
        return el;
      }
      return el;
    });
    data.work = result;
    setShowTodoData({ ...showTodoData });
    handleResaveToTrue();
  }

  function handleClearLocalStorage() {
    localStorage.removeItem("todo");
    setShowTodoData({});
  }

  function handleDeleteActivity(index, date) {
    let data = showTodoData.todo[date];
    let filteredList = data.work.filter((el, i) => i !== index);
    data.work = filteredList;
    setShowTodoData({ ...showTodoData });
    handleResaveToTrue();
  }

  function handleDeleteTodo(date) {
    delete showTodoData.todo[date];
    setShowTodoData({ ...showTodoData });
    handleResaveToTrue();
  }

  function handleSavingToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify({ ...showTodoData }));
    handleResaveToFalse();
  }

  useEffect(() => {
    if (Object.keys(showTodoData).length === 0) {
      return;
    }
    if (!trackDateForFilter) {
      setTrackDateForFilter(Object.keys(showTodoData.todo)[0]); // default date
    }
  }, [showTodoData]);

  return {
    localData,
    showTodoData,
    position,
    reSave,
    trackDateForFilter,
    setTrackDateForFilter,
    handleFilter,
    handleResaveToFalse,
    handleCheckLocalStorage,
    handleClearLocalStorage,
    handleLoadLocalData,
    handleMarkAsCompleted,
    handleDeleteActivity,
    handleEditActivityList,
    handleSavingToLocalStorage,
    handleDeleteTodo
  };
};

export default useShowData;
