import React from 'react';
import { View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import styles from "../shared/Style";

export default class Login extends React.Component {
    render(){
        return(
           <View style={styles.center_container}>
            <CustomInput placeholder={"Enter Email"} onTextChanged={()=>{}} />
            <CustomInput placeholder={"Enter Password"} onTextChanged={()=>{}}/>
            <CustomButton title={"Login"} />
          </View>
        )
    }
}