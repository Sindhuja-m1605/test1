import React from "react";
// import {connect} from 'react-redux';
import { increase, decrease } from "./Action";
import countReducer from "./reducer";

const Inc = ({ count }) => {
  return (
    <div>
      count from inc component : {count} <br />
      <button onClick={() => increase}>Increment</button>
      <button onClick={() => decrease}>decrease</button>{" "}
    </div>
  );
};
export default Inc;
