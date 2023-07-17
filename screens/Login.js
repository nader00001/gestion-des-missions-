import { View, Text , StyleSheet , TouchableOpacity , Dimensions } from 'react-native'
import { Input , NativeBaseProvider , Button , Icon , Box , Image , AspectRatio } from 'native-base'
import React ,{useState} from 'react'
import { FontAwesome } from '@expo/vector-icons'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'
const windowWidth = Dimensions.get('window').width;
const Login = () => {
    const navigation= useNavigation();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handleSendPress = () => {
        if (!email  || !password ) {
            alert('Veuillez remplir tous les champs obligatoires.');
            }
        const data = {
          email,
          password,
        };
    console.log(data);
        axios.post('http://192.168.43.140:3000/auth/login/employe', data)
          .then(response => {
            console.log('Données envoyées avec succès :', response.data);
            navigation.navigate('Menu', response.data);
          })
          .catch(error => {
            console.log('Une erreur est survenue :', error);
          
          });
      };
      return (
    <View style={styles.container}>
        <View style={styles.circle}>
        <Image source={require('../assets/miss.jpg')} style={styles.logo} />
      </View>
        {/* <View style={styles.Middle}>
        <View style={styles.text2}>
        <Text>Don't have an account </Text>
        </View>
        
            <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
                <Text style={styles.signupText}> Sign Up </Text>
            </TouchableOpacity>
        </View> */}
        
        {/*email  input fieled  */}
        <View style={styles.buttonStyle}>
            <View style={styles.emailInput}>
                <Input
                    value={email}
                    onChangeText={(text) => setemail(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='user-scret'/>}
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
                    placeholder='email'
                    _light={{
                        placeholderTextColor : "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor : "blueGray.50",
                    }}
                />

            </View>
            </View>
            {/*email  input fieled  */}
            <View style={styles.buttonStyleX}>
            <View style={styles.emailInput}>
                <Input
                    value={password}
                    onChangeText={(text) => setpassword(text)}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesome name='key'/>}
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
                    secureTextEntry={true}
                    placeholder='password'
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
               {/*line  */}
                <View style={styles.lineStyle}>
                    <View style={{flex:1 , height :1 , backgroundColor :'back'}}/>
                    <View>
                        <Text style={{width:50 , textAlign : 'center'}}>Or</Text>
                    </View>
                    <View style={{flex :1 ,height:1 ,backgroundColor:'black'}}/>
                </View>
                {/*Box  */}
                <View style={styles.boxStyle}>
                    <Box onPress={()=>navigation.navigate('#')}
                        style={{height:80 , width :80 , marginLeft:20}}
                        shadow={3}
                        _light={{
                            backgroundColor:"gray.50"
                        }}
                        _dark={{
                            backgroundColor:"gray.700"
                        }}
                    >
                        <AspectRatio ratio={1/1}>
                            <Image
                                roundedTop="lg"
                                source={{
                                    uri:"https://www.bing.com/images/search?view=detailv2&form=SBIHVR&lightschemeovr=1&iss=sbi&q=imgurl:https%3A%2F%2Fwww.transparentpng.com%2Fthumb%2Finstagram-logo-icon%2FJTKuuM-instagram-logo-icon-free-transparent.png&pageurl=https%3A%2F%2Fwww.transparentpng.com%2F&pagetl=Transparent+PNG%2C+FREE+Transparent+Background+Images&imgalt=Instagram+Logo+ICON+Free+Transparent&imgsz=250x276&selectedindex=0&id=6F68408CBB940273B4816BB33DA27FFFDE51AD1C&ccid=jKcnFIM0&simid=607997224453358996&ck=13A4BCC915515D73E1C387D8535112A8&thid=OIP.jKcnFIM0k35AAB3jbCInQgAAAA&mediaurl=https%3A%2F%2Fwww.talab.org%2Fwp-content%2Fuploads%2F2017%2F07%2F919869521-talab-org.png&exph=300&expw=300&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8ca727148334937e40001de36c222742%3Frik%3DHK1R3v9%252foj2zaw%26pid%3DImgRaw%26r%3D0&vt=2"
                                }}
                            />
                        </AspectRatio>

                    </Box>
                    <Box onPress={()=>navigation.navigate('#')}
                        style={{height:80 , width :80 , marginLeft:20}}
                        shadow={3}
                        _light={{
                            backgroundColor:"gray.50"
                        }}
                        _dark={{
                            backgroundColor:"gray.700"
                        }}
                    >
                        <AspectRatio ratio={1/1}>
                            <Image
                                roundedTop="lg"
                                source={{
                                    uri:"https://www.bing.com/images/search?view=detailv2&form=SBIHVR&lightschemeovr=1&iss=sbi&q=imgurl:https%3A%2F%2Fwww.transparentpng.com%2Fthumb%2Finstagram-logo-icon%2FJTKuuM-instagram-logo-icon-free-transparent.png&pageurl=https%3A%2F%2Fwww.transparentpng.com%2F&pagetl=Transparent+PNG%2C+FREE+Transparent+Background+Images&imgalt=Instagram+Logo+ICON+Free+Transparent&imgsz=250x276&selectedindex=0&id=6F68408CBB940273B4816BB33DA27FFFDE51AD1C&ccid=jKcnFIM0&simid=607997224453358996&ck=13A4BCC915515D73E1C387D8535112A8&thid=OIP.jKcnFIM0k35AAB3jbCInQgAAAA&mediaurl=https%3A%2F%2Fwww.talab.org%2Fwp-content%2Fuploads%2F2017%2F07%2F919869521-talab-org.png&exph=300&expw=300&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8ca727148334937e40001de36c222742%3Frik%3DHK1R3v9%252foj2zaw%26pid%3DImgRaw%26r%3D0&vt=2"
                                }}
                            />
                        </AspectRatio>

                    </Box>
                    <Box onPress={()=>navigation.navigate('#')}
                        style={{height:80 , width :80 , marginLeft:20}}
                        shadow={3}
                        _light={{
                            backgroundColor:"gray.50"
                        }}
                        _dark={{
                            backgroundColor:"gray.700"
                        }}
                    >
                        <AspectRatio ratio={1/1}>
                            <Image
                                roundedTop="lg"
                                source={{
                                    uri:"https://www.bing.com/images/search?view=detailv2&form=SBIHVR&lightschemeovr=1&iss=sbi&q=imgurl:https%3A%2F%2Fwww.transparentpng.com%2Fthumb%2Finstagram-logo-icon%2FJTKuuM-instagram-logo-icon-free-transparent.png&pageurl=https%3A%2F%2Fwww.transparentpng.com%2F&pagetl=Transparent+PNG%2C+FREE+Transparent+Background+Images&imgalt=Instagram+Logo+ICON+Free+Transparent&imgsz=250x276&selectedindex=0&id=6F68408CBB940273B4816BB33DA27FFFDE51AD1C&ccid=jKcnFIM0&simid=607997224453358996&ck=13A4BCC915515D73E1C387D8535112A8&thid=OIP.jKcnFIM0k35AAB3jbCInQgAAAA&mediaurl=https%3A%2F%2Fwww.talab.org%2Fwp-content%2Fuploads%2F2017%2F07%2F919869521-talab-org.png&exph=300&expw=300&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8ca727148334937e40001de36c222742%3Frik%3DHK1R3v9%252foj2zaw%26pid%3DImgRaw%26r%3D0&vt=2"
                                }}
                            />
                        </AspectRatio>

                    </Box>
                    <Box onPress={()=>navigation.navigate('#')}
                        style={{height:80 , width :80 , marginLeft:20}}
                        shadow={3}
                        _light={{
                            backgroundColor:"gray.50"
                        }}
                        _dark={{
                            backgroundColor:"gray.700"
                        }}
                    >
                        <AspectRatio ratio={1/1}>
                            <Image
                                roundedTop="lg"
                                source={{
                                    uri:"https://www.bing.com/images/search?view=detailv2&form=SBIHVR&lightschemeovr=1&iss=sbi&q=imgurl:https%3A%2F%2Fwww.transparentpng.com%2Fthumb%2Finstagram-logo-icon%2FJTKuuM-instagram-logo-icon-free-transparent.png&pageurl=https%3A%2F%2Fwww.transparentpng.com%2F&pagetl=Transparent+PNG%2C+FREE+Transparent+Background+Images&imgalt=Instagram+Logo+ICON+Free+Transparent&imgsz=250x276&selectedindex=0&id=6F68408CBB940273B4816BB33DA27FFFDE51AD1C&ccid=jKcnFIM0&simid=607997224453358996&ck=13A4BCC915515D73E1C387D8535112A8&thid=OIP.jKcnFIM0k35AAB3jbCInQgAAAA&mediaurl=https%3A%2F%2Fwww.talab.org%2Fwp-content%2Fuploads%2F2017%2F07%2F919869521-talab-org.png&exph=300&expw=300&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.8ca727148334937e40001de36c222742%3Frik%3DHK1R3v9%252foj2zaw%26pid%3DImgRaw%26r%3D0&vt=2"
                                }}
                            />
                        </AspectRatio>

                    </Box>
                </View>

    </View>
  )
}

export default ()=>{
    return(
        <NativeBaseProvider>
            <Login/>
        </NativeBaseProvider>
    )
}
const styles =StyleSheet.create({
    container :{
        flex:1 ,
        backgroundColor :'#fff',
        justifyContent: 'center',
        marginTop:20 ,        
    },
    LoginText :{
        marginTop :100,
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
    buttonStyleX :{
        marginTop :12,
        marginLeft :15,
        marginRight  :15,
    },
    buttonDesign:{
        backgroundColor:'#026efd',
    },
    lineStyle :{
        flexDirection :'row',
        marginTop : 30,
        marginLeft : 15 ,
        marginRight : 15,
        alignItems: 'center',
    },
    boxStyle :{
        flexDirection : 'row',
        marginTop : 30,
        marginLeft : 15 ,
        marginRight : 15,
        justifyContent :'space-around'
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        left: (windowWidth - 150) / 2,
       
      },
      logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        
      },
})