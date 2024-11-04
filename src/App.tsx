import React from "react";
import TasksApp from "../apps/tasks/Index.js";
import { Provider } from "react-redux";
import { store } from "../apps/tasks/model/store.js";
const App = () => {
  return (
    <Provider store={store}>
      <TasksApp />
    </Provider>
  );
};

export default App;
