import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { minusCount, plusCount } from "../../store/CountReducer";
export default function CountComponent() {
  const dispatch = useDispatch();
  const { number } = useSelector((state: any) => ({
    number: state.countReducer.number,
  }));

  return (
    <div>
      <button onClick={() => dispatch(minusCount())}>-</button>
      <span>{number}</span>
      <button onClick={() => dispatch(plusCount())}>+</button>
    </div>
  );
}
