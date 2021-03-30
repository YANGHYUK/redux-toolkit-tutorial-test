import React from "react";
import ToDoComponent from "../../components/ToDo";
export default function ToDoContainer() {
  return (
    <>
      <div>
        json서버 실행 후 테스트 가능! 터미널에 명령어 입력 : npx json-server
        ./data.json --port 8000
      </div>
      <ToDoComponent />
    </>
  );
}
