import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from "./screens/StartScreen"
import WelcomeScreen from "./screens/WelcomeScreen"
import SubjectScreen from "./screens/SubjectScreen"
import QuestionScreen from "./screens/QuestionScreen"
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import EnglishScreen from "./screens/EnglishScreen"
import ChemistryScreen from "./screens/ChemistryScreen"
import BiologyScreen from "./screens/BiologyScreen"
import PhysicsScreen from "./screens/PhysicsScreen"
import ListOfQuestions from "./screens/ListOfQuestions"
import TeacherLogin from "./screens/TeacherLogin"
import GiveAnswerScreen from "./screens/GiveAnswerScreen"

export default class App extends React.Component{


  render(){
    return(
      <AppContainer/>
    )
  }

}

const switchNavigator = createSwitchNavigator({
  StartScreen:{screen: StartScreen},
  TeacherLogin:{screen: TeacherLogin},
  WelcomeScreen:{screen: WelcomeScreen},
  SubjectScreen:{screen: SubjectScreen},
  QuestionScreen:{screen: QuestionScreen},
  EnglishScreen:{screen: EnglishScreen},
  ChemistryScreen:{screen: ChemistryScreen},
  BiologyScreen:{screen: BiologyScreen},
  PhysicsScreen:{screen:PhysicsScreen},
  ListOfQuestions:{screen:ListOfQuestions},
  GiveAnswerScreen:{screen:GiveAnswerScreen},
})

const AppContainer = createAppContainer(switchNavigator)
  