
import React from "react";
import {View, } from "react-native";

import Login from "./app/screens/Login";
import { Provider } from "mobx-react";
import store from "./app/store/Store";

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};
export default App;
