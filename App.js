/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import CustomInput from "./app/components/CustomInput";
import styles from "./app/shared/Style";
import CustomButton from "./app/components/CustomButton";

const App = () => {
  return (
    <View style={styles.center_container}>
      <CustomInput placeholder={"Enter Email"} onTextChanged={()=>{}} />
      <CustomInput placeholder={"Enter Password"} onTextChanged={()=>{}}/>
      <CustomButton title={"Login"} />
    </View>
  );
};
export default App;
