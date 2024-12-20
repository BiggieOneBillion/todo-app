import React from "react";
import FilterTags from "./filter-tags";
import LoadFromLocalStorage from "./local-storage-notice";
import { useDisplayActivities } from "../../hooks/useDisplayActivities";
import DisplayList from "./display-list";
import ActionBtns from "./action-btns";

const DisplayActivityList = () => {
  const {
    setList,
    displayList,
    handleMarkAsCompleted,
    btnText,
    handleClearLocalStorage,
    handleSavingToLocalStorage,
    handleEditActivityList,
    handleDeleteActivity
  } = useDisplayActivities();



  return (
    <section className="flex flex-col gap-4 pb-10">

      <DisplayList
        displayList={displayList}
        handleMarkAsCompleted={handleMarkAsCompleted}
        handleEdit={handleEditActivityList}
        handleDelete={handleDeleteActivity}
        setList={setList}
      />
      <ActionBtns
        btnText={btnText}
        displayList={displayList}
        handleClearLocalStorage={handleClearLocalStorage}
        handleSavingToLocalStorage={handleSavingToLocalStorage}
      />
    </section>
  );
};

export default DisplayActivityList;
