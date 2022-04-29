import React from "react";
import { Provider } from "react-redux";
import TodoApp from "./component/todoApp";
import store from "./_redux/store";

//get out the apk
export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
