/* eslint-disable prettier/prettier */
import React,{ Component } from "react";
import {TextInput, StyleSheet } from "react-native";
import constants from "../shared/Constants";

export default class CustomInput extends Component{
    constructor(props){
        super(props)
    }
    render(){
            return(
                <TextInput
                        onChangeText={(text) => this.props.onTextChanged(text)}
                        placeholder = {this.props.placeholder} 
                        style={[defaultstyle.inputStyle,this.props.style]}
                        // underlineColorAndroid={constants.colors.grey}
                        keyboardType={this.props.keyboardType}
                        multiline={this.props.multiline}
                        value={this.props.value}
                    />
            )
    }
}

const defaultstyle = StyleSheet.create({
    inputStyle:{
        height: 50,
        fontFamily: constants.fonts.regular,
        fontSize: constants.dimensions.xmedium,
        paddingLeft: constants.dimensions.medium,
        marginTop: constants.dimensions.small,
        marginBottom: constants.dimensions.small,
        backgroundColor: 'rgba(0,0,0,0.2)', 
        color: 'white',
        borderRadius: 25,
    }
})