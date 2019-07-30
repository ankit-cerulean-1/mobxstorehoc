
import React from "react";
import {View, } from "react-native";
import { Provider } from "mobx-react";
import store from "./app/store/Store";
import RootNavigation from './app/shared/RootNavigation'

const App = () => {
  // alert(JSON.stringify(store))
  return (
    <Provider {...{store: store}}>
      <RootNavigation />
    </Provider>
  );
};
export default App;
