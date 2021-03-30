import React from "react";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "300px",
        justifyContent: "space-around",
      }}
    >
      <Link to="todo"> 비동기 리스트 요청</Link>
      <Link to="count"> 동기 카운터 요청</Link>
    </div>
  );
}
