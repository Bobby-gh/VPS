import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style = {styles.header}>   
     <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../images/Logo.jpg')}
                  style = {{ width: 35, height: 30, borderRadius:50,  }}
        />
         
        </TouchableOpacity>   
        
        </View>
      <View style={styles.navbar}>

      <TouchableOpacity
      onPress={() => navigation.navigate('Settings')}>
      <Icon name="settings" size ={24}  style = {{ width: 30, height: 25, left: 1, }}/>
      </TouchableOpacity>
        
        
        
         <TouchableOpacity>
         
        </TouchableOpacity>  
        <Text style={{fontSize: 15}}> Settings </Text>
        
      </View>
      
      <View style={styles.container1} >
        <Text style= {{color: "blue",fontWeight: 'bold'}}> SECURING YOUR PHONE </Text>
        <Text style= {{fontSize: 12, paddingBottom: 10, }}> Click the Mic to set up your Vocal Recogntion</Text>
        
        <Text style= {{fontSize: 18, paddingBottom: 10, }}> </Text>
        <Text style= {{fontSize: 20,}}></Text> 
        <Image source = {require('../images/Logo.jpg')}
                  style = {{ width: 115, height: 115, borderRadius: 10 }}
        />
        
        <View>
        <Text style={{fontSize: 20}}>
         </Text>
         <TouchableOpacity
          /*onPress={() =>
           navigation.navigate('VoiceSettings')}*/>
         <Icon name="mic" size ={90}  style = {{ width: 90, height: 80, }}/>
         </TouchableOpacity>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  container1: {
    flex: 2,
    paddingBottom: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

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
export default HomeScreen;