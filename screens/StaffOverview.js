import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid , Image, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const StaffOverview = () => {
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
      case 'ClassList pressed':
        navigation.navigate('ClassList');
        break;
      case 'Assignment pressed':
        navigation.navigate('Assignmentsgive');
        break;
      default:
        break;
    }
    
  };

  const drawerItems = [
    { title: 'Site Home', onPress: () => console.log('Site Home pressed') },
   
    <Text></Text>,
    { title: 'Class List', onPress: () => handlePress('ClassList pressed') },
    { title: 'Assigments', onPress: () => handlePress('Assignment pressed') },
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
        <TouchableOpacity style={styles.person}>
          <Image source={require('../assets/person1.png')} style={{width:30, height:30,left:95,top:23}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdown}>
          <Image source={require('../assets/drop2.png')} style={{width:40, height:40,left:120,top:-14}}/>
        </TouchableOpacity>
      </View>
      </View>    

      <View style={styles.body}>
        <View style={styles.section1}>
            <Text style={{fontSize:25}}>Admin</Text>
            <Text>skary</Text>
            <Image source={require('../assets/person3.png')} style={{width:35,height:35,top:-42,left:350,}}></Image>
             

        </View>

        <View style={styles.class}>
           <Image source={require('../assets/list.png')} style={{width:120,height:120,left:25,top:20}}></Image>
           <View style={styles.c}>
           <TouchableOpacity style={styles.press} onPress={() => handlePress('ClassList pressed')}>
           <Text  style={{fontWeight:'bold',fontSize:20,left:3,top:50,left:44}}>Class List</Text>
            </TouchableOpacity>
           </View>
        </View>

       
        <View style={styles.assignments}>
           <Image source={require('../assets/assignments.png')} style={{width:120,height:120,left:30,top:25}}></Image>
           <View style={styles.c}>
           <TouchableOpacity style={styles.press} onPress={() => handlePress('Assignment pressed')}>
           <Text  style={{fontWeight:'bold',fontSize:18,left:38,top:50,}}> Assigments</Text>
            </TouchableOpacity>
           </View>
        </View>

        <View style={styles.footer}>

        </View>
        

       

        
      </View> 
    </DrawerLayoutAndroid>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#013348',
    top:-50
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
    backgroundColor:'#031F2B',
    flex:1,
    
  },

  section1:{
    backgroundColor: 'whitesmoke',
    width:"100%",
    height:"8%",
    top:-50,
    left:1,
  },

  class:{
    backgroundColor:'white',
    width:180,
    height:180,
    top:10,
    left:120,
    borderRadius:20
   

  },

  c:{
    top:-27,
    left:1,
    width:"99%"
  },

  timetable:{
    backgroundColor:'white',
    width:130,
    height:130,
    top:-50,
    left:250,
    borderRadius:20

  },
  
  algo:{
    top:-27,
    left:1,
    backgroundColor:'#1D740E',
    width:"99%"
  },

  exam:{
    backgroundColor:'white',
    width:130,
    height:130,
    top:-5,
    left:20,
    borderRadius:20

  },
  
  maths:{
    top:-27,
    left:1,
    backgroundColor:'#101B83',
    width:"99%"
  },

  results:{
    backgroundColor:'white',
    width:130,
    height:130,
    top:-130,
    left:250,
    borderRadius:20

  },
  
  assignments:{
    backgroundColor:'white',
    width:180,
    height:180,
    top:50,
    left:120,
    borderRadius:20
  },

  footer:{
    backgroundColor:'rgba(217, 217, 217, 0.9)',
    top:40,
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
  },

  footer:{
    width:"100%",
    height:"20%",
   
    top:110
  }
});

export default StaffOverview;
