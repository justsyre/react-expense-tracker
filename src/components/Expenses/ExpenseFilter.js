import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  // const [dateSelected, setDateSelected] = useState("");

  // const dateSelectedHandler = (event) => {
  //   setDateSelected(event.target.value);
  // };
  // console.log(dateSelected);
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label> Filter by Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
