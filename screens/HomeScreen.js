
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Image, StyleSheet,Button,TouchableOpacity, Modal } from 'react-native';


const HomeScreen = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const loginPress = (role) => {
    if (role === 'Student') {
      navigation.navigate('Login');
    } else if (role === 'Staff') {
      navigation.navigate('StaffLogin');
    }
  };
  

  const closeModal = () => {
    setModalVisible(false);
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        { /* Add your image URLs to the images array */ }
        <Image style={styles.image} source={require('../assets/BK.png')} />
        <Image style={styles.image1} source={require('../assets/BK.png')} />
        <Text style={styles.heading}>University of BK</Text>
      </View>
    
    <View style={styles.section1}>
    <ImageBackground style={styles.background}source={require('../assets/uni.png')}>
      <View style={styles.topics}>
      <Text style={styles.subHeading}>WELCOME </Text>
      <Text style={styles.subHeading2}>to</Text>
      <Text style={styles.subHeading3}> BK Students & Staff</Text>
      </View>
      </ImageBackground>
      </View>
      <View style={styles.container1}>
      {/* ... other components ... */}
   
      <TouchableOpacity onPress={openModal}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose your role:</Text>

            <TouchableOpacity onPress={() => loginPress('Student')}>
              <Text style={styles.student}>Student</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => loginPress('Staff')}>
              <Text style={styles.staff}>Staff</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* ... other components ... */}
    </View>
    
   <View style={styles.section2}>
      <Text style={styles.contactUs}>Contact us</Text>
      <Text></Text>
      <Text style={styles.contactDetails}>
        University of BK
      </Text>
      
      <Text style={styles.contactDetails}> Springvilla 3A </Text>
      <Text style={styles.contactDetails}>United Kindom  </Text>

    <View stylw={styles.bottoms}>
      <Text style={styles.bottomss}>+44 1123212321 </Text>
      <Text style={styles.bottomss}>Visit us</Text>
      <Image style={styles.iconBK}source={require('../assets/iconBK.png')}></Image>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  section1:{
    top:140,
    width:"100%",
    
   
    
  },
  background:{
    top:-70,
    width:"100%",
    height:450,
    justifyContent:'center',
    right:1,

    

  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position:'absolute',
    top:-4,
    flex:0.5,
    
  },
  image: {
    width: 100,
    height: 100,
    margin:5,
    marginRight:350,
  },
  image1: {
    width: 100,
    height: 100,
    margin:5,
    marginLeft:300,
    position:'absolute',
    top:1
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    justifyContent:'center',
    position:'absolute',
    top:40,
    left:110,
    
  },
  
  subHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    position:'absolute',
    top:-5,
    right:"24%",
  },
  subHeading2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    right:-155,
    top:50,
    left:170,
  },
  subHeading3: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    top:60,
    left:8
  },
  topics:{
    width:"95%",
    height:"40%",
    backgroundColor:'lightblue',
    top:-35,
    left:12,
    borderRadius:20,
  },

  login: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    width:80,
    height:30,
    top:-98,
    
    
  },
  student: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  staff: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  contactUs: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    top:10,
    left:20
  },
  contactDetails: {
    fontSize: 16,
    color: '#fff',
    top:10,
    left:20
  },
  visitUs: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  section2:{
    bottom:-40,
    backgroundColor:'#013348',
    width:"100%",
    height:217,
    
  },

  bottoms:{
     alignItems:"flex-end",
     
  },

  bottomss:{
    fontSize: 16,
    color: '#fff',
    top:35,
    left:20,
  },

  iconBK:{
    top:-130,
    width:250,
    height:150,
    left:180
  },
  //************** */
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#598193',
  },
  modalView: {
    backgroundColor: '#598193',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;