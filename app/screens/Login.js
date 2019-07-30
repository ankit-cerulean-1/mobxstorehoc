import React,{Component} from 'react';
import { View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import styles from "../shared/Style";

import { observer, inject } from "mobx-react";

@inject("store")
export default class Login extends Component {
  
    componentDidMount(){
      alert(JSON.stringify(this.props));
    }
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