import { View, Text , StyleSheet , TouchableOpacity , ScrollView} from 'react-native'
import React , { useState } from 'react'
import { Input , Button , Icon } from 'native-base'
import { NativeBaseProvider } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
// import { RadioButton } from 'react-native-paper';
import axios from 'axios';
const Signup = ({route}) => {
    const navigation = useNavigation();
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [titre, settitre] = useState('');
    const [salaire, setsalaire] = useState('');
    const [experience, setexperience] = useState('');
    const [enMission, setenMission] = useState('');
    const [role, setrole] = useState('');
    const navigate = useNavigation();

    const handleSendPress = () => {
        if (!username || !email || !password || !titre || !salaire || !experience || !role) {
            alert('Veuillez remplir tous les champs obligatoires.');
            }
        const data = {
          username,
          email,
          password,
          titre ,
          salaire ,
          experience ,
          enMission ,
          role
        };
    
        axios.post('http://192.168.43.140:3000/employe', data)
          .then(response => {
            console.log('Données envoyées avec succès :', response.data);
            navigation.navigate('Menu');
          })
          .catch(error => {
            console.log('Une erreur est survenue :', error);
            navigation.navigate('Menu');
          });
      };
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
        <View style={styles.Middle}>
            <Text style={styles.LoginText}></Text>
        </View>
        <View style={styles.text2}>
            <Text>Selectionner un nouveau skills </Text>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.signupText}> Sign In </Text>
            </TouchableOpacity> */}
        </View>
        {/*username  input fieled  */}
        <View style={styles.buttonStyle}>
            <View style={styles.emailInput}>
                <Input
                value={username}
                onChangeText={(text) => setusername(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='name'/>}
                            size="sm"
                            m={2}
                            _light={{
                                color :'black',
                            }}   
                            _dark={{
                                color :"gray.300"
                            }}
                        />
                    }
                    variant ="outline"
                    placeholder='Username'
                    _light={{
                        placeholderTextColor : "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor : "blueGray.50",
                    }}
                />

            </View>
            <View style={styles.emailInput}>
                <Input
                value={email}
                onChangeText={(text) => setemail(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='last name'/>}
                            size="sm"
                            m={2}
                            _light={{
                                color :'black',
                            }}   
                            _dark={{
                                color :"gray.300"
                            }}
                        />
                    }
                    variant ="outline"
                    placeholder='last name'
                    _light={{
                        placeholderTextColor : "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor : "blueGray.50",
                    }}
                />

            </View>
            <View style={styles.emailInput}>
                <Input
                    value={password}
                    onChangeText={(text) => setpassword(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='password'/>}
                            size="sm"
                            m={2}
                            _light={{
                                color :'black',
                            }}   
                            _dark={{
                                color :"gray.300"
                            }}
                        />
                    }
                    variant ="outline"
                    placeholder='password '
                    _light={{
                        placeholderTextColor : "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor : "blueGray.50",
                    }}
                />

            </View>
            <View style={styles.emailInput}>
                <Input

                    value={titre}
                    onChangeText={(text) => settitre(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='titre'/>}
                            size="sm"
                            m={2}
                            _light={{
                                color :'black',
                            }}   
                            _dark={{
                                color :"gray.300"
                            }}
                        />
                    }
                    variant ="outline"
                    placeholder='titre'
                    _light={{
                        placeholderTextColor : "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor : "blueGray.50",
                    }}
                />

            </View>

            <View style={styles.emailInput}>
                <Input
                    value={salaire}
                    onChangeText={(text) => setsalaire(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='salaire'/>}
                            size="sm"
                            m={2}
                            _light={{
                                color :'black',
                            }}   
                            _dark={{
                                color :"gray.300"
                            }}
                        />
                    }
                    variant ="outline"
                    placeholder='salaire '
                    _light={{
                        placeholderTextColor : "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor : "blueGray.50",
                    }}
                />

            </View>
            

            <View style={styles.emailInput}>
                <Input
                    value={experience}
                    onChangeText={(text) => setexperience(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='experience'/>}
                            size="sm"
                            m={2}
                            _light={{
                                color :'black',
                            }}   
                            _dark={{
                                color :"gray.300"
                            }}
                        />
                    }
                    variant ="outline"
                    placeholder='experience'
                    _light={{
                        placeholderTextColor : "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor : "blueGray.50",
                    }}
                />

            </View>



            <View style={styles.emailInput}>
                <Input
                    value={role}
                    onChangeText={(text) => setrole(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='role'/>}
                            size="sm"
                            m={2}
                            _light={{
                                color :'black',
                            }}   
                            _dark={{
                                color :"gray.300"
                            }}
                        />
                    }
                    variant ="outline"
                    placeholder='role'
                    _light={{
                        placeholderTextColor : "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor : "blueGray.50",
                    }}
                />

            </View>
            </View>
            
             {/*Button  */}

             <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign} onPress={()=>handleSendPress()}>Login</Button> 

             </View>
             </View>
             {/* <RadioButton.Group onValueChange={(value) => setChecked(value)} value={checked}>
        <View style={styles.radioButtonContainer}>
          <RadioButton value="option1" />
          <Text style={styles.radioButtonText}>Option 1</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton value="option2" />
          <Text style={styles.radioButtonText}>Option 2</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton value="option3" />
          <Text style={styles.radioButtonText}>Option 3</Text>
        </View>
      </RadioButton.Group> */}
             </ScrollView>
  )
}

export default ()=>{
    return(
        <NativeBaseProvider>
            <Signup/>
        </NativeBaseProvider>
    )
}

const styles =StyleSheet.create({
    container :{
        flex:1 ,
        backgroundColor :'#fff',
    },
    LoginText :{
        marginTop :50,
        fontSize:30 ,
        fontWeight :'bold',


    },
    Middle :{
        alignItems: 'center',
        justifyContent :'center',
    },
    text2 :{
        flexDirection:'row',
        justifyContent :'center' ,
        paddingTop :5,
    },
    signupText :{
        fontWeight:'bold',
    },
    emailInput :{
        marginTop :10 ,
        marginRight :5 ,
    },
    buttonStyle : {
        marginTop :30,
        marginLeft :15,
        marginRight :15,
    },
   
    buttonDesign:{
        backgroundColor:'#026efd',
    } ,
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      radioButtonText: {
        fontSize: 16,
        marginLeft: 8,
      },
})