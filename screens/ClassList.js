import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid , Image, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClassList = () => {
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
      case 'upload pressed':
        navigation.navigate('Upload');
        break;
      case 'batch2 pressed':
        navigation.navigate('Batch2');
        break;
      case 'batch3 pressed':
        navigation.navigate('Batch3');
        break;
      case 'batch4 pressed':
        navigation.navigate('Batch4');
        break;
      default:
        break;
    }
    
  };

  const drawerItems = [
    { title: 'Site Home', onPress: () => console.log('Site Home pressed') },
   
    <Text></Text>,
    { title: 'upload', onPress: () => handlePress('upload pressed')},
    { title: 'batch2', onPress: () => handlePress('batch2 pressed') },
    { title: 'batch3', onPress: () => handlePress('batch3 pressed') },
    { title: 'batch4', onPress: () =>handlePress('batch4 pressed') },


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
        <Image source={require('../assets/iconBK.png')} style={{width:50,height:50,left:15}}></Image>
        <Text style={styles.heading}>University of BK</Text>
        <View style={styles.personContainer}>
        <TouchableOpacity style={styles.person}>
          <Image source={require('../assets/person1.png')} style={{width:30, height:30,left:115,top:23}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdown}>
          <Image source={require('../assets/drop2.png')} style={{width:40, height:40,left:150,top:-14}}/>
        </TouchableOpacity>
      </View>
      </View>    

      <View style={styles.body}>
        <View style={styles.section1}>
            <Text style={{fontSize:25}}>Admin</Text>
            <Text>skary</Text>
            <Image source={require('../assets/person3.png')} style={{width:35,height:35,top:-42,left:350,}}></Image>
             

        </View>
            <Text  style={{fontSize:25,color:'white',left:135,top:-8}}>Class List</Text>
            <Text  style={{fontSize:25,color:'white',left:20,top:5}}>Batch</Text>

        <View style={styles.class1}>
          
           <View style={styles.c}>
           <TouchableOpacity style={styles.press} onPress={() => handlePress('upload pressed')}>
           <Text  style={{fontWeight:'bold',fontSize:20,left:3,top:65,left:40,color:'white'}}>20.2</Text>
           <Text  style={{fontWeight:'bold',fontSize:20,left:3,top:70,left:40,color:'white'}}>20.3</Text>
            </TouchableOpacity>
           </View>
        </View>

        <View style={styles.class2}>
          
          <View style={styles.c}>
          <TouchableOpacity style={styles.press} onPress={() => handlePress('batch2 pressed')}>
          <Text  style={{fontWeight:'bold',fontSize:20,left:3,top:75,left:40,color:'white'}}>21.1</Text>
         
           </TouchableOpacity>
          </View>
       </View>

       <View style={styles.class3}>
          
          <View style={styles.c}>
          <TouchableOpacity style={styles.press} onPress={() => handlePress('batch3 pressed')}>
          <Text  style={{fontWeight:'bold',fontSize:20,left:3,top:65,left:40,color:'white'}}>22.1</Text>
          <Text  style={{fontWeight:'bold',fontSize:20,left:3,top:70,left:40,color:'white'}}>22.2</Text>
           </TouchableOpacity>
          </View>
       </View>

       <View style={styles.class4}>
          
          <View style={styles.c}>
          <TouchableOpacity style={styles.press} onPress={() => handlePress('batch4 pressed')}>
          <Text  style={{fontWeight:'bold',fontSize:20,left:3,top:75,left:40,color:'white'}}>23.1</Text>
          
           </TouchableOpacity>
          </View>
       </View>

       <View style={styles.footer}>
            <Text style={{fontSize:20,fontWeight:'bold',top:10,left:20}}>Latest annousements</Text>
            <Text  style={{fontSize:15,top:15,left:30}}>(No announcements have been posted yet)</Text>

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
    top:-40
  },
  menuIcon: {
    fontSize: 30,
    color: '#fff',
    paddingRight: 10,
    left:5
  },
  heading: {
    fontSize: 20,
    color: '#fff',
    left:15
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
    top:-30,
    left:1,
  },

  class1:{
    backgroundColor:'#C88181',
    width:130,
    height:130,
    top:50,
    left:20,
  },
  class2:{
    backgroundColor:'#5BD17C',
    width:130,
    height:130,
    top:-80,
    left:250,
  },

  class3:{
    backgroundColor:'#4F84B5',
    width:130,
    height:130,
    top:-30,
    left:20,
  },

  class4:{
    backgroundColor:'#915AAB',
    width:130,
    height:130,
    top:-160,
    left:250,
  },

  c:{
    top:-27,
    left:1,
    width:"99%"
  },

  footer:{
    width:"90%",
    height:"15%",
    backgroundColor:"rgba(255, 255, 255, 0.76)",
    top:-90,
    left:20,
  }

 
  
 

 
});

export default ClassList;
