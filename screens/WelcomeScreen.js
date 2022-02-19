import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Alert, Modal, 
  ScrollView} from 'react-native'
import db from "../config"
import firebase from 'firebase'

export default class WelcomeScreen extends Component{

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

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            this.props.navigation.navigate("SubjectScreen")})
        .catch(error => {
            var errorCode = error.ecode
            var errorMessage = error.message
            return alert("Error message")
        })
    }

    userSignUp = (emailId, password, confirmPassword) => {
        if(password !== confirmPassword){
            return alert("The passwords do not match\nCheck your password")
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then(()=>{
                db.collection("users").add({
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    contact: this.state.contact,
                    email_id: this.state.emailId,
                    address: this.state.address,
                    category: this.state.category
                })
                return alert("User added successfully", "", [
                    {
                        text: "OK",
                        onPress: ()=>{this.setState({isModalVisible: false})}
                    }
                ])
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message
                return alert(errorMessage)
            })
        }
    }

    showModal = ()=>{
        return(
            <Modal animationType="slide"
            transparent={true}
            visible={this.state.isModalVisible}>

<ScrollView style={styles.scrollview}>
          <View style={styles.signupView}>
            <Text style={styles.signupText}> SIGN UP </Text>
          </View>
          <View style={{ flex: 0.95 }}>
            
            <TextInput
              style={styles.formInput}
              placeholder={"First Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  firstName: text
                });
              }}
            />

            <TextInput
              style={styles.formInput}
              placeholder={"Last Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  lastName: text
                });
              }}
            />

            
            <TextInput
              style={styles.formInput}
              placeholder={"Contact"}
              maxLength={10}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({
                  contact: text
                });
              }}
            />

           
            <TextInput
              style={styles.formInput}
              placeholder={"Address"}
              multiline={true}
              onChangeText={text => {
                this.setState({
                  address: text
                });
              }}
            />

           
            <TextInput
              style={styles.formInput}
              placeholder={"Email"}
              keyboardType={"email-address"}
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

            
            <TextInput
              style={styles.formInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

            
            <TextInput
              style={styles.formInput}
              placeholder={"Confirm Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />

              <TextInput
              style={styles.formInput}
              placeholder={"Teacher or Student"}
              onChangeText={text => {
                this.setState({
                  category: text
                });
              }}
              />

          </View>


          <View style={{ flex: 0.2, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {
                this.userSignUp(
                  this.state.emailId,
                  this.state.password,
                  this.state.confirmPassword
                )
                this.setState({
                    isModalVisible: true
                })
            }
              }
            >
              <Text style={styles.registerButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text
              style={styles.cancelButtonText}
              onPress={() => {
                this.setState({ isModalVisible: false });
              }}
            >
              Cancel
            </Text>
          </View>
        </ScrollView>

            </Modal>
        )
    }
    

    render(){
        return(

        <View style = {styles.container}>
            {this.showModal()}

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
            <View>
            <TouchableOpacity
                style = {styles.backButton}
                onPress={()=>{
                    this.props.navigation.navigate("StartScreen")
                }}>
                    <Text
                    style = {styles.buttonText}>Back</Text>
                </TouchableOpacity>
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
      backButton: {
        width: 50,
        height: 50,
        justifyContent: "center",
      },
      TextInput: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
      },
      registerButton: {
        width: "75%",
        height: 50,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        backgroundColor: "#33867d",
        },
        registerButtonText: {
            fontSize: 23,
            fontWeight: "bold",
            color: "#fff"
          },
        signupText: {
          fontSize: 20,
          fontColour: "#45237d"
        },
})