import React from "react";
import list from "../../public/list.json";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);x
  return <div></div>;
}

export default Freebook;
