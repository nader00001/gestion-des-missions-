import { StyleSheet, Text, View } from 'react-native'
import React , { useEffect, useState }from 'react';
import axios from 'axios';

const SkillsEmploye = ({route}) => {
    const [employeSkills, setemployeSkills] = useState([]);
    const [employeeId, setEmployeeId] = useState(route);
    useEffect(() => {
        axios.get(`http://192.168.43.140:3000/skills/findEmployeSkills/${employeeId}`)
          .then(response => {setemployeSkills(response.data);
            console.log(response.data)
            
          })
          .catch(error =>{ console.log(error) ;
            console.log("test");
          }
          
          
          );
      }, [employeeId]);
      console.log("kvhkxjvhk")
      console.log(employeeId);  
     employeSkills.map((item)=>{console.log(item.name)}); 
  return (
    <View>
     {employeSkills.map((item)=><Text>{item.name}</Text>)}
    </View>
  )
}

export default SkillsEmploye

const styles = StyleSheet.create({})