import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Upload from './screens/Upload';
import Assignments from './screens/Assignments';
import Test from './screens/Test';
import Overview from './screens/Overview';
import Algorithms from './screens/Algorithms';
import Mathematics from './screens/Mathematic';
import StaffLogin from './screens/StaffLogin';
import StaffOverview from './screens/StaffOverview';
import ClassList from './screens/ClassList';
import Cprograms from './screens/Cprograms';
import Web from './screens/Web';
import Assignmentsgive from './screens/Assignmentsgive';
import Batch2 from './screens/Batch2';
import Batch3 from './screens/Batch3';
import Batch4 from './screens/Batch4';
import Profile from './screens/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Cprograms" component={Cprograms} />
        
        <Stack.Screen name="Algorithms" component={Algorithms} />
        <Stack.Screen name="Mathematics" component={Mathematics} />
        <Stack.Screen name="web" component={Web} />
        
        <Stack.Screen name="StaffLogin" component={StaffLogin} />
        <Stack.Screen name="StaffOverview" component={ StaffOverview} />
        <Stack.Screen name="ClassList" component={ClassList} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="Assignments" component={Assignments} />
        <Stack.Screen name="Assignmentsgive" component={Assignmentsgive}/>
        <Stack.Screen name="Batch2" component={Batch2}/>
        <Stack.Screen name="Batch3" component={Batch3}/>
        <Stack.Screen name="Batch4" component={Batch4}/>
        <Stack.Screen name="Profile" component={Profile}/>

        




      </Stack.Navigator>
    </NavigationContainer>
  );
}
