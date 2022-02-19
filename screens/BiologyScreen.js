import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert} from 'react-native'
import db from "../config"
import firebase from 'firebase'

export default class BiologyScreen extends Component{

    constructor(){
        super()
        this.state = {
            question: "",
            userId: firebase.auth().currentUser.email,
        }
    }

    addQuestion = (ques)=>{
        var userId = this.state.userId
        db.collection("quesAns").add({
            user_id: userId,
            ques: ques,
            subject: "biology",
        })
        alert("Your question has been submitted")
    }



    render(){
        return(

            <View style = {styles.container}>
                <Text style = {{alignItems: "center", fontSize: 30, justifyContent: "center", color: "cyan" }}>
                Enter your question here
            </Text>

            <View>
                <TextInput
                placeholder = {"Enter your question here"}
                placeholderTextColor = "gray"
                mutliline = {true}
                onChangeText={text => {
                    this.setState({
                        question: text
                    })
                }}
                value = {this.state.question}
                style = {styles.inputBox}
                />

                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.addQuestion(this.state.question)
                }}
                >
                    <Text style = {styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>


            </View>

        )
    }
}

const styles = StyleSheet.create({
    inputBox: {justifyContent: "center", width: 200,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: 10,
    marginLeft: 20,
    marginBottom: 14},
    button: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom: 10,
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