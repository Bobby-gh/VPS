import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

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
import { createNativeStackNavigator } from '@react-navigation/native-stack'







const profile = ({navigation}) => {
  const [isEnabled,setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled (previousState=>!previousState)
  
  const [isEnabled1,setIsEnabled1] = useState(false);
  const togSwitch = () => setIsEnabled1 (previousState=>!previousState)  
  return (  
  <View style={styles.container}> 
    
       <View style = {styles.header}>  
     <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../images/Logo.jpg')}
                  style = {{ width: 35, height: 30,   }}
        />
         
        </TouchableOpacity>   
        <Text style = {{color: "black", }}> Settings </Text>
        </View>
      <View style={styles.navbar}>
      
        
        
        
         <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../images/BackArrow.jpg')}
                  style = {{ width: 25, height: 13, left: 1, top: 5,}}
       
        />
       
        </TouchableOpacity>  
     <Text style = {{color: "black", }}>  </Text>
        
      </View>
      <View style={styles.image}>
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
 
  image: {
     borderRadius: 50,
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
});

export default profile;