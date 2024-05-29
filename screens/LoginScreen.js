import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { ImageBackground, TextInput } from 'react-native';
import {Image , StyleSheet, View , Text,Button, TouchableOpacity} from 'react-native';

function LoginScreen(props) {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (inputText) => {
      setEmail(inputText);
    };
  
    const handlePasswordChange = (inputText) => {
      setPassword(inputText);
    };
  
    
     
        const handlePress = () => {
            if (email === 'jhonperera123' && password === 'jhon1234') {
                // If email and password match, navigate to the home screen
                navigation.navigate('Overview');
              } else {
                // Handle incorrect email or password here
                console.log('Incorrect email or password');
              }
        };
    
    return (
       <ImageBackground style={styles.background} source={require('../assets/uni.png')}>
            <View style={styles.signForm}>
                <Image style={styles.BK} source={require('../assets/BK.png')}></Image>
            <View style={styles.heading}>
                <Text style={{fontSize:20,right:-6,left:18}}>UNIVERSITY OF </Text>
                <Text style={{left:70,fontSize:20}}>BK</Text>
                
            </View>
            <Text style={styles.sign}>Login</Text>

            <TextInput style={{ width: '80%', height: 40, borderBottomWidth: 1, top: 50, left: 20 }}
          onChangeText={handleEmailChange}
          value={email}
          placeholder="Your university email address"></TextInput>
            <Text style={{color:'blue',top:50,left:22}}>Can't access to your account</Text>
           
            <TextInput style={{ width: '80%', height: 40, borderBottomWidth: 1, top: 60, left: 20 }}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
          placeholder="Your password"></TextInput>

            <TouchableOpacity style={styles.press} onPress={handlePress}>
            <Text style={{fontSize:20,left:10,color:'#fff'}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.back} onPress={handlePress}>
            <Text style={{fontSize:20,left:15,color:'#fff'}}>Back</Text>
            </TouchableOpacity>
            
            <View style={styles.footer}>
                <Text style={styles.text2}>Sign in using your University email address (such as sam.smith@bk.ac.uk) rather than your short login name (such as ssmith) used on University computers.</Text>
            </View>
            </View>

           

            
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    signForm:{
        width:"87%",
        height:"70%",
        backgroundColor:"#fff",
        top:120,
        left:30,
      
    },
    background:{
        flex:1
    },

    BK:{
        width:100,
        height:100,
        left:"30.5%",
        top:10,
        left:120
    },
    heading:{
        left:"23%",
        top:10,
        backgroundColor:'lightblue',
        width:"50%",
        borderRadius:10  
    },
    sign:{
        left:20,
        top:30,
        fontSize:25,
    },

    press:{
        top:110,
        left:220,
        width:70,
        backgroundColor:'#3E51FE'
    },
    back:{
        top:84,
        left:140,
        width:70,
        backgroundColor:'#3E51FE'
    },

    footer:{
        top:95,
        left:4,
        width:"99%",
        height:"20%",
        backgroundColor:'rgba(217, 217, 217, 0.32)'
    },
    text2:{
        top:6,
        left:1,
        fontSize:17,
        fontWeight:'bold',
    },
    
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:"#fc5c65",
        position:'absolute',
        top:40,
        left:30,
    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:"green",
        position:'absolute',
        top:40,
        right:30,
    }
})
export default LoginScreen;