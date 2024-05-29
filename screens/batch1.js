import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid , Image, TouchableOpacity, ImageBackground,Button} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const Batch1 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // Add the additional code snippet here
      const formData = new FormData();
      formData.append('file', {
        uri: Platform.OS === 'android' ? res.uri : res.uri.replace('file://', ''),
        name: 'document', // Replace with the actual file name if available
        type: 'application/pdf', // Replace with the actual file type if different
      });
      
      setSelectedFile(formData);
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
       
       <View style={styles.batch}>
            <Text style={{fontSize:20,left:15,top:3}}>20.2/20.3</Text>
       </View>

       <View style={styles.section2}>
            <View style={styles.lectures}>
                <Text style={{fontSize:20,top:3,left:40}}>Lectures</Text>
            </View>
            <Text style={{fontSize:15}}>Lecture Materials</Text>
            <Button title="Select File" onPress={handleFileUpload} />
      {/* Display selected file name */}
      {selectedFile && <Text>Selected File: {selectedFile.name}</Text>}
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
    top:2,
    left:1,
  },

  batch:{
    backgroundColor:'#D48181',
    width:"30%",
    height:"5%",
    top:30,
    left:40,
    borderRadius:20,
    
  },

  section2:{
    backgroundColor: 'whitesmoke',
    width:"95%",
    height:"60%",
    top:70,
    left:10,
  },

  lectures:{
    width:"100%",
    height:"10%",
    backgroundColor:'#D0CFCE',
  }

 
 
  
 

 
});

export default Batch1;
