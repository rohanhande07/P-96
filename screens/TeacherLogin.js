import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput,} from 'react-native'
import db from "../config"
import firebase from 'firebase'

export default class TeacherLogin extends Component{

    constructor(){
        super()
        this.state = {
            emailId: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            contact: "",
            confirmPassword: "",
            isModalVisible: false,
            category: "",
        }
    }

    userLogin = async (emailId, password)=>{
        if(emailId && password){
            try{
      const response = await firebase.auth().signInWithEmailAndPassword(emailId, password)
      if(response){
            this.props.navigation.navigate("ListOfQuestions")
      }
        }
        catch(error){
            switch(error.code){
                case 'auth/user-not-found':
                alert("User doesn't exist")
                break;
                case 'auth/invalid-email':
                    alert("Incorrect email or password")
                    break;
            }
        }
    }
    else{
        alert("Enter email and password")
    }
    }
    

    render(){
        return(

        <View style = {styles.container}>

            <View style = {{flex:0.45}}>

            <View style = {styles.TextInput}>
                <TextInput
                    placeholder="abc@gmail.com"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    onChangeText={text => {
                        this.setState({
                            emailId: text
                        })
                        }}
                        style = {styles.loginBox}
                    />

                <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    secureTextEntry={true}
                    onChangeText={text => {
                        this.setState({
                            password: text
                        })
                    }}
                    style = {styles.loginBox}
                />


                <TouchableOpacity
                style = {styles.button}
                onPress = {()=>{
                    this.userLogin(
                    this.state.emailId,
                    this.state.password
                )}}
                >
                    <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>  
        </View>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        width: "80%",
        height: 50,
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: 20,
        marginBottom: 15,
        paddingLeft: 20,
        marginLeft: 100,
      },
      container: {
        flex: 1,
        backgroundColor: "#6fc0b8"
      },
      button: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom: 5,
        paddingLeft: 20,
        marginLeft: 100,
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: 20
      },
      TextInput: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
      },
        signupText: {
          fontSize: 20,
          color: "#45237d"
        },
})