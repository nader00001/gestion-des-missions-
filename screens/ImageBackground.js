import { StyleSheet, Text, View , ImageBackground } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'

const Background = () => {
  return (
    <View style={styles.container}> 
      <ImageBackground source={require('../assets/mission.jpg')} style={styles.image}>
        
      </ImageBackground>
    </View>
  )
}

export default ()=>{
    return(
        <NativeBaseProvider>
            <Background/>
        </NativeBaseProvider>
    )
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  });