import { NavigationContainer } from "@react-navigation/native";
import React  from "react";
import scheduleNotification from "./screens/MissionNotifications";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { createStackNavigator } from "@react-navigation/stack";
import Mission from "./screens/Mission";
import DetailMission from "./screens/DetailMission";
import PostulationConfirmation from "./screens/PostulationConfirmation";
import Menu from "./screens/Menu";
import Parametres from "./screens/Parametres";
import Profil from "./screens/Profil";
import SkillsEmploye from "./screens/SkillsEmploye";
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
function App(){
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}} >
      
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="Mission" component={Mission}/>
      
      <Stack.Screen name="DetailMission" component={DetailMission}/>
      <Stack.Screen name="PostulationConfurmation" component={PostulationConfirmation}/>
      <Stack.Screen name="Menu" component={Menu}/>
      <Stack.Screen name="Parametres" component={Parametres}/>
      <Stack.Screen name="Profil" component={Profil}/>
      <Stack.Screen name="SkillsEmploye" component={SkillsEmploye}/>






      
    </Stack.Navigator>
   
  );
}

export default ()=> {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}