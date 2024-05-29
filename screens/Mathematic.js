import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid , Image, TouchableOpacity, ImageBackground,Alert, TouchableWithoutFeedback} from 'react-native';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';



function Mathematics(props) {

  const firebaseConfig = {
   
    apiKey: "AIzaSyAcACCNljxyQ3_KagCfmw1iB8dBD4EQX50",
    authDomain: "mobile-d7fac.firebaseapp.com",
    projectId: "mobile-d7fac",
    storageBucket: "mobile-d7fac.appspot.com",
    messagingSenderId: "40003257768",
    appId: "1:40003257768:web:2080b522a67b7d04b6499d"
  
  };

  initializeApp(firebaseConfig);
  

  const storage = getStorage();

  const [fileUrl, setFileUrl] = useState(null);
  //const [fileUri, setFileUri] = useState(null);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false); 

    useEffect(() => {
      const fetchFileUrl = async () => {
        try {
          const storageRef = ref(storage, 'gs://mobile-d7fac.appspot.com/documents/IoT.pdf'); // Replace 'example.pdf' with your actual file name or path
          const url = await getDownloadURL(storageRef);
          setFileUrl(url);
        } catch (error) {
          console.log('Error retrieving file:', error);
        }
      };
      
      fetchFileUrl()
        .then(() => {
          console.log('File URL fetched successfully');
        })
        .catch((error) => {
          console.log('Error fetching file URL:', error);
        });
      
    }, []);

   
    const openDrawer = () => {
      setDrawerOpen(true);
    }
  
    const closeDrawer = () => {
      setDrawerOpen(false);
    }
  
    const drawerItems = [
      { title: 'Dashboard', onPress: () => console.log('Dashboard pressed') },
      { title: 'Site home', onPress: () => console.log('home pressed') },
      { title: 'Calender', onPress: () => console.log('Calender pressed') },
      <Text></Text>,
      { title: 'C Programming', onPress: () => console.log('C Programming pressed') },
      { title: 'Algorithm', onPress: () => console.log('Algo pressed') },
      { title: 'Mathematics', onPress: () => console.log('Maths pressed') },
      { title: 'Web application', onPress: () => console.log('Web pressed') },
    ];

    const dropdownItems = [
      {title:'Dashboard', onPress:() => console.log('Dashboard pressed')},
      {title:'Profile', onPress:() => console.log('Profile pressed')},
      {title:'Log out', onPress:() => console.log('Log out pressed')},
    ]

    const toggleDropdown = () =>{
      setDropdownVisible(!dropdownVisible);
    }
    

    const renderDrawer = () => {
        return (
          <View style={styles.drawer}>
            {drawerItems.map((item, index) => (
              <TouchableHighlight key={index} onPress={item.onPress}>
                <Text style={styles.drawerItem}>{item.title}</Text>
              </TouchableHighlight>
            ))}
            {dropdownItems.map((item, index) => (
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
        <Text style={{fontSize:30,color:'#fff'}}>Mathematics</Text>
        <Text style={{fontSize:30,color:'#fff'}}>2022/2023</Text>

        <View style={styles.section1}>
           <View style={styles.lecBox}>
           <TouchableOpacity style={styles.dropdown}>
            <Image source={require('../assets/drop2.png')} style={{width:40, height:40,left:20,top:2}}/>
          </TouchableOpacity>
            <Text style={{fontSize:25,top:-36,left:55,fontWeight:'bold'}}>Lectures</Text>
            
            <Image source={{ uri: fileUrl }} style={styles.image} />
           </View>
          
            <View style={styles.coursework}>
           < TouchableWithoutFeedback  onPress={toggleDropdown}>
            <View style={styles.dropdown}>
            <Image source={require('../assets/drop2.png')} style={{width:40, height:40,left:20,top:2}}/>
            </View>
          </ TouchableWithoutFeedback>
            <Text style={{fontSize:25,top:-36,left:55,fontWeight:'bold'}}>Course Works</Text>
            <Text>Exams</Text>
            <Text>Assignments</Text>
            <Text>Marks</Text>
           </View>
        </View>

      <View style={styles.latest}>
        <Text style={{top:30,left:50,fontWeight:'bold'}}>Latest annousement</Text>
          <Text style={{top:40,left:60}}>(No annoucement has been posted yet.)</Text>
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
        backgroundColor:'#FFFFFF',
        width:"100%",
        height:"65%",
        top:10,
      },
      lecBox:{
        backgroundColor:'#D0CFCE',
        width:"100%",
        height:"10%",
        top:10,
      },
      coursework:{
        backgroundColor:'#D0CFCE',
        width:"100%",
        height:"10%",
        top:200,
      },
      download: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      latest:{
        backgroundColor:'#FFFFFF',
        width:"100%",
        height:"25%",
        top:30,
      },
      image: {
        width: 200,
        height: 200,
      },
})
export default Mathematics;