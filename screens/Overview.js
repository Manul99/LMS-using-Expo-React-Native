import {  StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid , Image, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
 

const Overview = () => {
    const navigation = useNavigation();
    const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  }

  const closeDrawer = () => {
    setDrawerOpen(false);
  }

  const handlePress = (screenName) => {
    switch (screenName) {
      case 'C Programming pressed':
        navigation.navigate('Cprograms');
        break;
      case 'Algo pressed':
        navigation.navigate('Algorithms');
        break;
      case 'Maths pressed':
        navigation.navigate('Mathematics');
        break;
      case 'Web pressed':
        navigation.navigate('Web');
        break;
      case 'Profile pressed':
        navigation.navigate('Profile');
        break;
      default:
        break;
    }
    
  };
  

  const drawerItems = [
    { title: 'Dashboard', onPress: () => console.log('Dashboard pressed') },
    { title: 'Site home', onPress: () => console.log('home pressed') },
    { title: 'Calender', onPress: () => console.log('Calender pressed') },
    <Text></Text>,
    { title: 'C Programming', onPress: () => handlePress('C Programming pressed') },
    { title: 'Algorithm', onPress: () => handlePress('Algo pressed') },
    { title: 'Mathematics', onPress: () => handlePress('Maths pressed') },
    { title: 'Web application', onPress: () => handlePress('Web pressed') },
    { title: 'Profile', onPress: () => handlePress('Profile pressed') },
  ];

  const renderDrawer = () => {
    return (
      <View style={styles.drawer}>
        {drawerItems.map((item, index) => (
          <TouchableHighlight key={index} onPress={item.onPress}>
            <Text style={styles.drawerItem}>{item.title}</Text>
          </TouchableHighlight>
        ))}
      </View>
    );
  }

 

  return (
    <DrawerLayoutAndroid
      drawerWidth={200}
      drawerPosition={'left'}
      renderNavigationView={renderDrawer}
      onDrawerClose={closeDrawer}
      onDrawerOpen={openDrawer}
      drawerBackgroundColor="#fff"
      drawerLockMode={drawerOpen ? 'unlocked' : 'locked-closed'}
      statusBarBackgroundColor="#000"
    >
      <View style={styles.container}>
        <TouchableHighlight onPress={openDrawer}>
          <Text style={styles.menuIcon}>≡</Text>
        </TouchableHighlight>
        <Image source={require('../assets/iconBK.png')} style={{width:50,height:50}}></Image>
        <Text style={styles.heading}>University of BK</Text>
        <View style={styles.personContainer}>
        <TouchableOpacity style={styles.person} onPress={() => handlePress('Profile pressed')}>
          <Image source={require('../assets/person1.png')} style={{width:30, height:30,left:95,top:23}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdown}>
          <Image source={require('../assets/drop2.png')} style={{width:40, height:40,left:120,top:-14}}/>
        </TouchableOpacity>
      </View>
      </View>    

      <View style={styles.body}>
        <View style={styles.section1}>
            <Text style={{fontSize:25}}>Course Overview</Text>
            <View style={styles.footer}>
            <Text style={{fontSize:25}}>Evaluations</Text>
            <View style={styles.num}>
              <Text style={{fontSize:25,left:18,top:7}}>1</Text>
              
            </View>
            <Text style={{fontSize:18,top:15,left:80}}>Open surveys available</Text>
        </View>

        </View>

        <View style={styles.programming}>
           <Image source={require('../assets/programmer.png')} style={{width:150,height:150}}></Image>
           <View style={styles.c}>
           <TouchableOpacity style={styles.press} onPress={() => handlePress('C Programming pressed')}>
           <Text  style={{fontWeight:'bold',fontSize:20,left:3}}>C Programming</Text>
            </TouchableOpacity>
           </View>
        </View>

        <View style={styles.algorithms}>
           <Image source={require('../assets/child.png')} style={{width:150,height:150}}></Image>
           <View style={styles.algo}>
           <TouchableOpacity style={styles.press} onPress={() => handlePress('Algo pressed')}>
           <Text  style={{fontWeight:'bold',fontSize:20,left:25}}>Algorithms</Text>
            </TouchableOpacity>
           </View>
        </View>

        <View style={styles.mathematics}>
           <Image source={require('../assets/maths.png')} style={{width:150,height:150}}></Image>
           <View style={styles.maths}>
           <TouchableOpacity style={styles.press} onPress={() => handlePress('Maths pressed')}>
           <Text  style={{fontWeight:'bold',fontSize:20,left:18}}>Mathematics</Text>
            </TouchableOpacity>
           </View>
        </View>

        <View style={styles.application}>
           <Image source={require('../assets/web.png')} style={{width:150,height:150}}></Image>
           <View style={styles.web}>
           <TouchableOpacity style={styles.press} onPress={() => handlePress('Web pressed')}>
           <Text  style={{fontWeight:'bold',fontSize:20,left:2}}>Web application</Text>
            </TouchableOpacity>
           </View>
        </View>

        
      </View> 
    </DrawerLayoutAndroid>

  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#013348',
      top:-38
    },
    menuIcon: {
      fontSize: 30,
      color: '#fff',
      paddingRight: 10,
    },
    heading: {
      fontSize: 20,
      color: '#fff',
    },
    drawer: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 50,
      paddingLeft: 20,
    },
    drawerItem: {
      fontSize: 18,
      fontWeight: 'bold',
      padding: 10,
    },
  
    body:{
      backgroundColor:'lightblue',
      flex:1,
      top:-38
    },
  
    section1:{
      backgroundColor: 'whitesmoke',
      width:"100%",
      height:"100%",
      top:20,
      left:1,
    },
  
    programming:{
      backgroundColor:'maroon',
      width:150,
      height:150,
      top:-560,
      left:10,
      opacity:0.5,
  
    },
  
    c:{
      top:-27,
      left:1,
      backgroundColor:'maroon',
      width:"99%"
    },
  
    algorithms:{
      backgroundColor:'rgba(89, 187, 65, 0.8)',
      width:150,
      height:150,
      top:-708,
      left:218,
      opacity:0.5,
  
    },
    
    algo:{
      top:-27,
      left:1,
      backgroundColor:'#1D740E',
      width:"99%"
    },
  
    mathematics:{
      backgroundColor:'rgba(86, 65, 214, 0.8)',
      width:150,
      height:150,
      top:-670,
      left:10,
      opacity:0.5,
  
    },
    
    maths:{
      top:-27,
      left:1,
      backgroundColor:'#101B83',
      width:"99%"
    },
  
    application:{
      backgroundColor:'rgba(142, 16, 241, 0.74)',
      width:150,
      height:150,
      top:-818,
      left:218,
      opacity:0.5,
  
    },
    
    web:{
      top:-27,
      left:1,
      backgroundColor:'#57158A',
      width:"99%"
    },
  
    footer:{
      backgroundColor:'rgba(217, 217, 217, 0.9)',
      top:470,
      width:"100%",
      height:"25%",
    },
  
    num:{
      width:50,
      height:50,
      backgroundColor:'#1B309B',
      left:150,
      top:10,
      borderRadius:40,
    }
  });
  
export default Overview