import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, getList } from "../../store/TodoReducer";
export default function ToDoComponent() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const { loading, error, list } = useSelector((state: any) => ({
    loading: state.todoReducer.loading,
    error: state.todoReducer.error,
    list: state.todoReducer.list,
  }));
  if (loading === "pending") {
    return <div>불러오는중</div>;
  }

  if (error) {
    return (
      <React.Fragment>
        <div>요청에러</div>
        <button onClick={() => dispatch(getList())}>재요청</button>
      </React.Fragment>
    );
  }
  return (
    <div>
      <button onClick={() => dispatch(getList())}>리스트 요청</button>
      {list.map((ele: any, index: number) => {
        let id = ele?.id || "";
        let content = ele?.content || "";
        return (
          <div key={index}>
            id:{id} - {content}
          </div>
        );
      })}

      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          let value = e.target.value;
          setInputValue(value);
        }}
      />

      <button
        onClick={() => {
          dispatch(addList({ content: inputValue })); //post 요청 후
          dispatch(getList()); // 바로 get 요청
          setInputValue("");
        }}
      >
        추가
      </button>
    </div>
  );
}
