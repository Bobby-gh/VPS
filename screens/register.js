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
import Icon from 'react-native-vector-icons/Feather';







const profile = ({navigation}) => {
    
    const [FullName, setfName] = useState('');
    const [Email, setemail] = useState('');
    const [Password, setPassword] = useState('');
    const [CPassword, setcPassword] = useState('');


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
          <Image source = {require('../images/Logo.jpg')}
                            style = {{ width: 150, height: 150, borderRadius: 100, borderColor:"cyan", borderWidth:5, }}
                  />

      </View>
      <View style={styles.subcontainer}>
          
          <Text style={{paddingTop:45}}></Text>
          <div>
           
           <TextInput style = {styles.input}
               
               underlineColorAndroid = "transparent"
               placeholder = "Full Name"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               value={FullName}
               onChange={(e) => setfName(e.target.value)}
               />
            </div>
            
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               type="text" 
               value={Email}
               onChange={(e) => setemail(e.target.value)}
               />
               
        

           <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               value={Password}
               onChange={(e) => setPassword(e.target.value)}
              secureTextEntry
               />
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Confirm Password"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               value={CPassword}
               onChange={(e) => setcPassword(e.target.value)}
               />
          <Text style={{paddingTop: 10,}}></Text>
           <TouchableOpacity style={styles.button}  
          onPress={() => console.log("firebase")}>
              <Text style={{fontWeight: "bold", color: "black",}}>Click to Register</Text>
          </TouchableOpacity>
          <Text style={{paddingTop: 20,}}></Text> 
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

export default profile;