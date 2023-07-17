import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity , Button } from 'react-native';
import { NativeBaseProvider } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

const DetailMission = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState(null);
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setSelectedFile(result);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('file', {
      uri: selectedFile.uri,
      name: selectedFile.name,
      type: selectedFile.type,
    });
    // Ajouter les données au formulaire
    formData.append('field1', 'valeur1');
    formData.append('field2', 'valeur2');
    try {
      const response = await axios.post('https://example.com/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [resume, setResume] = useState('');
   const navigation =useNavigation();
  const handleSubmit = () => {
    if (!selectedFile) {
      alert('Veuillez selectionnez un fichier pour votre parcours de votre mission');
      return;}
      
    navigation.navigate('PostulationConfurmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Votre avis pour cette mission</Text>
      
      <Button title="Sélectionner un fichier" onPress={pickDocument} />
      {selectedFile && <Text style={styles.fileText}>Fichier sélectionné : {selectedFile.name}</Text>}
      <Button title="Télécharger le fichier" onPress={uploadFile} />
      {response && <Text style={styles.responseText}>Réponse du serveur : {JSON.stringify(response)}</Text>}
  
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Postuler</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#eee',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    margin : 29,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin : 59,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fileText: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    margin : 29,
  },
  responseText: {
    //marginVertical: 20,
    fontSize: 16,
    margin : 29,
  },
});

export default ()=>{
  return(
      <NativeBaseProvider>
          <DetailMission/>
      </NativeBaseProvider>
  )
}