import React, { useEffect, useState } from 'react';
import { View, Text ,  StyleSheet ,TouchableOpacity ,  Image , ScrollView , Dimensions} from 'react-native';
import axios from 'axios';
import { NativeBaseProvider } from 'native-base'
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

const Mission = ({contenu}) => {
  const [mission, setmission] = useState({});
  const navigation = useNavigation();
  const [employeeId, setEmployeeId] = useState(13);
  console.log(contenu , 'mission params');
  console.log(mission);
  useEffect(() => {
    axios.get(`http://192.168.43.140:3000/mission/${employeeId}`)
      .then(response => {setmission(response.data);
        console.log("first");
        
      })
      .catch(error =>{ console.log(error) ;
        console.log("test");
      }
      
      
      );
  }, [employeeId]);
  return (
    
    <View style={styles.container}>
          
      <Image source={require('../assets/miss.jpg')} style={styles.logo} />
  <Text style={styles.listTitle}>Mon mission</Text>
  <ScrollView contentContainerStyle={styles.container}>
<TouchableOpacity
  key={mission.id} 
  style={styles.listItem}
  onPress={() => navigation.navigate('DetailMission', { mission })}
>
<Text style={styles.listItemTitle}>
      description de la mission : {mission.description}
    </Text>
    <Text>Date de début : {mission.dateDebut}</Text>
    <Text>Date de fin : {mission.dateFin}</Text>
    <Text>Budjet : {mission.budjet}</Text>
    <Text>Commentaire sur le mission : {mission.commentaireMission}</Text>
    <Text>Documentation sur la mission : {mission.documentationMission}</Text>

</TouchableOpacity>
</ScrollView>
</View>

  
  );
};


export default ()=>{
  return(
      <NativeBaseProvider>
          <Mission/>
      </NativeBaseProvider>
  )
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItem: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: 'blue',
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30 ,
  },
});