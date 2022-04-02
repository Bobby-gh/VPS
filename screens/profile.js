import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
// import firebase from '../firebase/firebase';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
  Switch,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { registerVersion } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXrR-VyOYOR8Y02Cla5igwgvpyLVr9FdM",
  authDomain: "vocal-protection-seeker-1.firebaseapp.com",
  projectId: "vocal-protection-seeker-1",
  storageBucket: "vocal-protection-seeker-1.appspot.com",
  messagingSenderId: "63383565184",
  appId: "1:63383565184:web:3ff0002bd5f176a7440765",
  measurementId: "G-8VFTHK4HC2"
};

const app  = initializeApp(firebaseConfig);


const Profile = ({navigation}) => {
  const auth = getAuth()
  const [FullName, setfName] = useState('');
  const [Email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [CPassword, setcPassword] = useState('');
  
  
    const profile = () => {
     
      console.log("hi")
      console.log(Email,Password)
    
      const logout = () => {
      auth().signout
          
        }
    }
    
  return (  
  <View style={styles.container}> 
    
       <View style = {styles.header}>  
          <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <Image source = {require('../images/Logo.jpg')}
                        style = {{ width: 35, height: 30,   }}
              />
              
              </TouchableOpacity>   
      </View>
      <View style={styles.navbar}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Login')}>
        <Icon name="chevron-left" size ={24}/> 
      </TouchableOpacity>
      </View>
      <View style= {{justifyContent: "center", alignItems: "center", paddingTop:10,}}>
          <Icon name = "user-circle-o" size = {180}/>

      </View>

      <View>
        <Text> Name : </Text>
        <Text> Email :  firebase.auth().currentUser.email  </Text>
        <TouchableOpacity
        onPress={() => logout()}>
          <Text style= {{color: "red"}}> Log Out </Text>
        </TouchableOpacity>
      </View>


  
 
      
      <StatusBar style="auto" />
    
  </View>
    
  );
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "black",

  },
 
  navbar: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    backgroundColor: "#e8e8e8",
    height: 30,
  },
  header: {
    backgroundColor: "#235f98",
    height: 35,
    color: "white",
  },

  subcontainer:{
    justifyContent: "center",
    backgroundColor: "#235f98",
    alignItems:"center",
    top: 10,
    borderTopLeftRadius: 38,
    
  },
   input: {
      margin: 3,
      height: 50,
      width:300,
      borderColor: 'black',
      backgroundColor: "white",
      borderRadius: 5,
      borderWidth: 2,
    },

    button:{
      backgroundColor: "cyan",
      borderRadius: 10,
      alignItems: "center",
      paddingVertical:2,
      width: 220,
      height: 40,
      justifyContent:"center"
      
    }, 
});

export default Profile;