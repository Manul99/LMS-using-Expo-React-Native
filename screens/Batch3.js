import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid , Image, TouchableOpacity, ImageBackground,Button,Pressable} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getStorage , ref, uploadBytes } from 'firebase/storage';


const Batch3 = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyAcACCNljxyQ3_KagCfmw1iB8dBD4EQX50",
        authDomain: "mobile-d7fac.firebaseapp.com",
        projectId: "mobile-d7fac",
        storageBucket: "mobile-d7fac.appspot.com",
        messagingSenderId: "40003257768",
        appId: "1:40003257768:web:2080b522a67b7d04b6499d"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);
      
      

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: false,
      });

      if (res.type === 'success') {
        const { uri } = res;

        const fileUri = Platform.OS === 'android' ? uri : uri.replace('file://', '');

        const storageRef = ref(storage, `documents/${res.name}`);
        await uploadBytes(storageRef, fileUri);

        setSelectedFile(res.name);
        console.log('File uploaded successfully!');
      }
    } catch (error) {
      console.log('Error uploading file:', error);
    }
  };
 
  

  const openDrawer = () => {
    setDrawerOpen(true);
  }

  const closeDrawer = () => {
    setDrawerOpen(false);
  }

  const drawerItems = [
    { title: 'Site Home', onPress: () => console.log('Site Home pressed') },
   
    <Text></Text>,
    { title: 'Class List', onPress: () => console.log('Class list pressed') },
    { title: 'Time table', onPress: () => console.log('Time table pressed') },
    { title: 'Exams', onPress: () => console.log('Exams pressed') },
    { title: 'Exam Results', onPress: () => console.log('Exam results pressed') },
    { title: 'Assigments', onPress: () => console.log('Assignments pressed') },
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

  const handlePress = () => {
    console.log('Button Pressed');
  };

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
          <Image source={require('../assets/person1.png')} style={{width:30, height:30,left:120,top:23}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdown}>
          <Image source={require('../assets/drop2.png')} style={{width:40, height:40,left:150,top:-14}}/>
        </TouchableOpacity>
      </View>
      </View>    

      <View style={styles.body}>
      <View style={styles.section1}>
            <Text style={{fontSize:25,left:5}}>Admin</Text>
            <Text style={{left:5}}>skary</Text>
            <Image source={require('../assets/person3.png')} style={{width:35,height:35,top:-42,left:350,}}></Image>
             

        </View>
       
       <View style={styles.batch}>
            <Text style={{fontSize:20,left:15,top:3}}>22.1/22.2</Text>
       </View>

       <View style={styles.section2}>
            <View style={styles.lectures}>
                <Text style={{fontSize:20,top:3,left:40}}>Lectures</Text>
            </View>
            <View style={styles.materials}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Lecture Materials</Text>

            <Button title="Select File" onPress={handleFileUpload}/>
            {/* Display selected file name */}
            {selectedFile && <Text>Selected File: {selectedFile.name}</Text>}
            </View>

            <View style={styles.shedule}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Schedule</Text>
            <Button title="Select File" onPress={handleFileUpload}  />
            {/* Display selected file name */}
            {selectedFile && <Text>Selected File: {selectedFile.name}</Text>}
            </View>

            <View style={styles.coursework}>
                <Text style={{fontSize:20,top:3,left:40}}>Course Work</Text>
            </View>

            <View style={styles.exams}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>Exams</Text>
                <Button title="Select File" onPress={handleFileUpload}/>
            {/* Display selected file name */}
            {selectedFile && <Text>Selected File: {selectedFile.name}</Text>}
            </View>
            
            <View style={styles.marks}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>Marks</Text>
                <Button title="Select File" onPress={handleFileUpload}/>
            {/* Display selected file name */}
            {selectedFile && <Text>Selected File: {selectedFile.name}</Text>}
            </View>
       </View>

       <View style={styles.footer}>
            <Text style={{fontSize:20,top:10,left:20}}>Latest annousements</Text>
            <Text style={{fontSize:15,top:20,left:30}}>(No announcements have been posted yet)</Text>
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
    left:10
  },
  heading: {
    fontSize: 20,
    color: '#fff',
    left:18
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
    top:-40,
    left:1,
  },

  batch:{
    backgroundColor:'#D48181',
    width:"30%",
    height:"5%",
    top:-20,
    left:40,
    borderRadius:20,
    
  },

  section2:{
    backgroundColor: 'whitesmoke',
    width:"95%",
    height:"70%",
    top:-5,
    left:10,
  },

  lectures:{
    width:"100%",
    height:"10%",
    backgroundColor:'#D0CFCE',
  },

  button:{
    width:50,
    height:50,
    borderRadius:10
  },

  marks:{
    top:100
    

  },

  shedule:{
    top:20
  },

  coursework:{
    width:"100%",
    height:"10%",
    backgroundColor:'#D0CFCE',
    top:50
  },
  exams:{
    top:80
  },

  footer:{
    width:"95%",
    height:"20%",
    backgroundColor:'rgba(255, 255, 255, 0.76)',
    left:10
  }


});

export default Batch3;
