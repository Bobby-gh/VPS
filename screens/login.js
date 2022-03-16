import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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



const Login = ({navigation}) => {

    const auth = getAuth()
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const handlesLogin = () => {
      console.log("hi")
      console.log(Email,Password)
      
      createUserWithEmailAndPassword(auth,Email,Password)
      .then(userCredentials =>{
        const user = userCredentials.user;
        console.log(user.Email);
      }).catch(err=>{
        console.log(err)
      })
      
    }
   

  return (
    <SafeAreaView
     style={styles.container}>
     <ImageBackground
          source={require('../images/Background.jpg')}    
          resizeMode="cover"
           style={styles.image}>
            <View style={styles.navbar}>
        <Image source = {require('../images/Logo.jpg')}
                  style = {{ width: 30, height: 30, left: 1, borderRadius: 50, }}
        />
        </View>
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{fontSize: 21, fontWeight: 'bold', color:'white'}}>Voice Protection Seeker (VPS)</Text>
           <Text style={{fontSize: 17, fontWeight: "bold", color: "white", }}>Securing Your Phone</Text>
        </View>
          <Text style={{paddingTop:168,}}></Text>
          <View style={{justifyContent: "center", alignItems: "center"}}>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               type="text" 
               value={Email}
               onChangeText = {text => setEmail(text)}
                
               />
            
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               value={Password}
               onChangeText = {text => setPassword(text)}
               secureTextEntry
               />
               </View>
          <Text style={{paddingTop: 1,}}></Text> 
          <View style={{justifyContent:"center", alignItems: 'center'}}>    
          <TouchableOpacity style={styles.button}> 
          <TouchableOpacity
           onPress={() => handlesLogin()}>
              <Text style={{fontWeight: "bold", color: "#fff",}}>Login</Text>
          </TouchableOpacity> 
          </TouchableOpacity> 
          </View> 
      </ImageBackground>
      <TouchableOpacity>
        <Text style={{color:"white", backgroundColor:"grey", alignItems:"center",}}>Forget Password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"blue",alignItems:"center"}}
          onPress={() => navigation.navigate('Register')} >
        <Text style={{color:"white"}}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
      flex: 1,
    },
   image: {
    flex:1,
    paddingTop:20,
    justifyContents: "row",
   },
    button:{
      backgroundColor: "blue",
      borderRadius: 10,
      alignItems: "center",
      paddingVertical:12,
      width: 120,
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
     
  });
  export default Login;
