import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base'

const PostulationConfirmation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Postulation effectuée avec succès !</Text>
      <Text style={styles.description}>
        Votre candidature a été envoyée. Nous vous recontacterons bientôt si votre profil est retenu.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ()=>{
    return(
        <NativeBaseProvider>
            <PostulationConfirmation/>
        </NativeBaseProvider>
    )
  }
    