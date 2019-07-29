
import React, { Fragment } from "react";
import {View, } from "react-native";

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
