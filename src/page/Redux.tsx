// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment } from "../store/slice/ExampleRedux";
export const Redux = () => {
  const amount = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {amount}
      <button className="bg-green-600" onClick={() => dispatch(increment())}>
        increment
      </button>
    </div>
  );
};
