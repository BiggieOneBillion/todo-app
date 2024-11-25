import React from "react";
import { filterData } from "../../data/home";
import { v4 } from "uuid";

const FilterTags = ({ handleFilter, position, date }) => {
 
  return (
    <div className="flex items-center flex-wrap gap-2 md:gap-3 text-black">
      <p className="text-xs ">Filters:</p>
      {filterData.map((filter, i) => (
        <button
          key={v4()}
          onClick={() => handleFilter(i, date)}
          className={`inline-block px-2 py-1 rounded-lg border ${
            position === i ? "text-white bg-black" : "text-black bg-white"
          }   text-xs capitalize`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
