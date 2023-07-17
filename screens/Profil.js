import React , { useEffect, useState }from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import SkillsEmploye from './SkillsEmploye';

const Profil = ({route}) => {
  const [employees, setemployees] = useState({});
  const [employeId, setEmployeId] = useState(route.params.contenu.idEmploye);
 console.log(route.params , 'profil params');
 console.log(route.params.contenu.idEmploye);
  useEffect(() => {
    axios.get(`http://192.168.43.140:3000/employe/${employeId}`)
      .then(response => {setemployees(response.data);
        console.log("bienvenue sur mon profil");
        
       
       
      })
      .catch(error =>{ console.log(error) ;
        console.log("test");
      }
      
      
      );
  }, [employeId]);
  
  console.log('la valeur de id est :',employeId);
  console.log(employees);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}> {employees.username} </Text>
          <Text style={styles.userEmail}> {employees.email}</Text>
          <Text style={styles.userTitle}>{employees.titre}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          je suis {employees.username} , je suis un {employees.titre} depuis {employees.experience} ans dans ma societe
          , mon salaire est {employees.salaire} .
        </Text>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skills}>
          <Text style={styles.skill}>
            <SkillsEmploye route={route.params.contenu.idEmploye}/>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#2196f3',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 24,
    color: '#fff',
  },
  userEmail: {
    fontSize: 18,
    color: '#fff',
  },
  userTitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default Profil;
