import React from 'react';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Image, StyleSheet,Button,TouchableOpacity, Modal } from 'react-native';


const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
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
      <Text style={styles.subHeading}>WELCOME </Text>
      <Text style={styles.subHeading2}>to</Text>
      <Text style={styles.subHeading3}> BK Students & Staff</Text>
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

            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.student}>Student</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
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
      
      <Text style={styles.contactDetails}>
        University of BK
      </Text>
      
      <Text style={styles.contactDetails}> Springvilla 3A </Text>
      <Text style={styles.contactDetails}>United Kindom  </Text>

    <View stylw={styles.bottoms}>
      <Text style={styles.contactDetails}>+44 1123212321 </Text>
      <Text style={styles.visitUs}>Visit us</Text>
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
    top:150,
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
    top:20,
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
    top:80,
    right:"25%",
  },
  subHeading2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    right:-155,
    top:-20
  },
  subHeading3: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    top:-5
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
  },
  contactDetails: {
    fontSize: 16,
    color: '#fff',
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
    height:217
  },

  bottoms:{
     alignItems:"flex-end",
  },

  iconBK:{
    top:-110,
    width:200,
    height:100,
    left:200
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

export default App;