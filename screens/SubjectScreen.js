import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert} from 'react-native'
import db from "../config"
import firebase from 'firebase'

export default class SubjectScreen extends Component {

    constructor(){
        super()
        this.state = {
            emailId: firebase.auth().currentUser.email,
            status: "",
            category: "",
        }
    }
    
   

    render(){
        return(
            <View style = {styles.container}>
              <Text style = {{alignItems: "center", fontSize: 30, justifyContent: "center", color: "blue", marginLeft: 480 }}>
                Choose your subject:
            </Text>

            <TouchableOpacity
                    style = {styles.button}
                    onPress={()=>{
                        this.props.navigation.navigate("QuestionScreen")
                    }}>
                    <Text style = {styles.buttonText}>Maths</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("EnglishScreen")
                }}>
                    <Text
                    style = {styles.buttonText}>English</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("BiologyScreen")
                }}>
                    <Text
                    style = {styles.buttonText}>Biology</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("ChemistryScreen")
                }}>
                    <Text
                    style = {styles.buttonText}>Chemistry</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style = {styles.button}
                onPress={()=>{
                    this.props.navigation.navigate("PhysicsScreen")
                }}>
                    <Text
                    style = {styles.buttonText}>Physics</Text>
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
        marginBottom: 10,
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
        backgroundColor: "pink"
      },
})
