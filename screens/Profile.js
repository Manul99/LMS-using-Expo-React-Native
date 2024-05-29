import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid , Image, TouchableOpacity, ImageBackground,Alert, TouchableWithoutFeedback} from 'react-native';

function Profile(props) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false); 
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
      {title:'Profile', onPress:() => console.log('Dashboard pressed')},
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
            <Image source={require('../assets/person3.png')} style={{width:150,height:150,top:30,left:50}}></Image>
            <Text style={{color:'#FFFF',top:40,left:80,fontSize:20}}>Hello User!</Text>

            <View style={styles.dashboard}>
              <View style={styles.profile}>
                  <Text style={{top:4,left:50,fontSize:20,color:'#23799E'}}>Dahsboard/Profile</Text>
              </View>
            </View>

            <View style={styles.details}> 
                <Text style={{fontSize:25,top:10,left:10}}>User Details</Text>
                <Text style={{fontSize:20,top:10,left:20,fontWeight:'bold'}}>Email</Text>
                <Text style={{fontSize:15,top:10,left:20}}>198765@students.bk.uk</Text>
                <Text style={{fontSize:20,top:20,left:20,fontWeight:'bold'}}>Student Ref.</Text>
                <Text style={{fontSize:15,top:20,left:20}}>198765</Text>
            </View>
            <View style={styles.login}>
                <Text style={{fontSize:20,top:10,left:10}}>Login activity</Text>
                <Text style={{fontSize:15,top:20,left:10,fontWeight:'bold'}}>First access to site</Text>
                <Text style={{fontSize:15,top:20,left:10}}>Wednesday, 14 September 2022, 5.12 AM</Text>
                <Text style={{fontSize:15,top:22,left:10}}>(247days 5 hours) </Text>
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
      dashboard:{
        top:60,
        width:"90%",
        height:"10%",
        backgroundColor:'#F8F8F8',
        left:20,
        borderRadius:10
      },
      profile:{
        top:15,
        width:"80%",
        height:"50%",
        backgroundColor:'#D9D9D9',
        left:35,
        borderColor:'#000000',
      },
      details:{
        width:"90%",
        height:"25%",
        backgroundColor:'#F8F8F8',
        top:98,
        left:20,
      },

      login:{
        width:"90%",
        height:"20%",
        backgroundColor:'#F8F8F8',
        top:105,
        left:20,
      }
    })
export default Profile;