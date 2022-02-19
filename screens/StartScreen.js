import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert} from 'react-native'
import db from "../config"
import firebase from 'firebase'

export default class StartScreen extends Component {

    render(){
        return(

            <View style = {styles.container}>

            <Text style = {{alignItems: "center", fontSize: 30, justifyContent: "center", color: "pink", marginLeft: 400, marginBottom: 20 }}>
                Are you a Teacher or a Student?
            </Text>

                <TouchableOpacity
                    style = {styles.button}
                    onPress={()=>{
                        this.props.navigation.navigate("TeacherLogin")
                    }}>
                    <Text style = {styles.buttonText}>Teacher</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("WelcomeScreen")
                }}>
                    <Text
                    style = {styles.buttonText}>Student</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginTop: 30,
        marginLeft: 120,
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
      container: {
        flex: 1,
        backgroundColor: "#39276d"
      },
})