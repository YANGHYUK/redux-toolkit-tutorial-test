import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import ToDoContainer from "./containers/ToDo";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <div>Redux-Toolkit</div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            {Routes.map((ROUTE_INFO, idx) => {
              return <Route {...ROUTE_INFO} key={idx} />;
            })}
            {/* <Redirect path="*" to="/404" /> */}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
