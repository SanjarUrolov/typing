import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
  let location = useLocation();
  let count1 = location.state;
  console.log(location);
  return (
    <div className="result">
      <div className="result2">
        <h1>
          To'g'ri yozilgan harflar <span>{count1.myArr.length} tadan </span> 
          {Math.floor((count1.count * 100) / count1.myArr.length)}%{" "}
        </h1>
        <h1>To'gri yozilgan harflar soni {count1.count} ta </h1>
      </div>
    </div>
  );
}

export default Result;
