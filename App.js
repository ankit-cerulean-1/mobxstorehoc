
import React from "react";
import {View, } from "react-native";

import Login from "./app/screens/Login";
import { Provider } from "mobx-react";
import store from "./app/store/Store";
import RootNavigation from './app/shared/RootNavigation'

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};
export default App;
