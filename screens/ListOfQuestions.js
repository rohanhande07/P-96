import React, {Component} from 'react'
import {View, FlatList, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert} from 'react-native'
import db from "../config"
import firebase from 'firebase'
import {ListItem} from 'react-native-elements'

export default class ListOfQuestions extends Component{
    constructor(){
        super()
        this.state = {
            userId: firebase.auth().currentUser.email,
            questionsList: [],
        }
        this.requestRef = null
    }

getQuestionsList = ()=>{
    this.requestRef = db.collection("quesAns").onSnapshot((snapshot)=>{
        var questionsList = snapshot.docs.map(document => document.data())
        console.log(questionsList)
        this.setState({
            questionsList: questionsList,
        })
    })
}

componentDidMount() {
    this.getQuestionsList()
}

componentWillUnmount() {
    this.requestRef()
}

keyExtractor = (item,index) => index.toString()

renderItem = ({item,i})=>{
    return(
        <ListItem
        key={i}
        title={item.subject}
        subtitle = {item.ques}
        titleStyle={{color:'pink',fontWeight:'bold'}}
        rightElement={
            <TouchableOpacity
           onPress={()=>{
              this.props.navigation.navigate("GiveAnswerScreen", {details:item})
            }}
            >
                <Text>Give Answer</Text>
            </TouchableOpacity>
        }
        bottomDivider
        />
    )
}

render(){
    return(
        <View>
            {this.state.questionsList.length === 0 
            ?(
                <View>
                    <Text>List of all Questions</Text>
                </View>
            ):(

                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.questionsList}
                renderItem={this.renderItem}
                />

            )}
        </View>
    )
}


}

