import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Profil from './Profil';
import Mission from './Mission';
import 'react-native-gesture-handler';
import Parametres from "./Parametres";
import Signup from './Signup';

const Drawer = createDrawerNavigator();

const Menu = ({route})=>{
  const [contenu , setcontenu] = useState(route.params);
  const navigation = useNavigation();
  console.log("menu");
  console.log(route.params);
  const propsToPass = {
    //Ajoutez ici les props à envoyer
   contenu
  };
  return (
    <View style={styles.container}>
      <Drawer.Navigator 
        drawerStyle={styles.drawer}
        
        screenOptions={({ route }) => ({
          headerStyle: styles.header,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerTitle,
          drawerIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profil') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'Mission') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            } else if (route.name === 'Parametres') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Signup') {
              iconName = focused ? 'person-add' : 'person-add-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        drawerContentOptions={{
          activeTintColor: '#005792',
          inactiveTintColor: 'gray',
        }}
      >
        <Drawer.Screen 
          name="Profil" 
          component={Profil}  
          initialParams={propsToPass}
          options={{
            title: 'Mon Profil'
          }}
        />
        <Drawer.Screen 
          name="Mission" 
          component={() => <Mission {...propsToPass} />}
         // initialParams={propsToPass}
          options={{
            title: 'Mes Missions'
          }}
        />
        <Drawer.Screen 
          name="Parametres" 
          component={Parametres} 
          initialParams={propsToPass}
          options={{
            title: 'Paramètres'
          }}
        />
        <Drawer.Screen 
          name="Signup" 
          component={Signup} 
          initialParams={propsToPass}
          options={{
            title: 'Inscription'
          }}
        />
      </Drawer.Navigator>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Mission</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    backgroundColor: 'white',
    paddingTop: 50,
  },
  footer: {
    height: 50,
    backgroundColor: '#005792',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#333',
    height: 80,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005792'
  },
});

export default Menu;
