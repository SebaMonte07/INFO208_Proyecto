// Importa las librerías necesarias
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

// Ajusta la importación según la ubicación real de tu ForoScreen
import ForoScreen from './ForoScreen';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([
    { username: 'A', password: 'A' },
    { username: 'Branco', password: '123' },
    { username: 'Secretaria', password: '123' },
    // ... otros usuarios ...
  ]);
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      Alert.alert("Credenciales correctas");
      console.log("Usuario ha iniciado sesión");
      navigation.navigate('Opciones', { username: username });
    } else {
      Alert.alert("Error al iniciar sesión!");
      console.log('Credenciales incorrectas');
      setShowError(true); // Muestra el aviso de credenciales incorrectas
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logoinformatica.jpg')} style={{ width: 200, height: 117, marginTop: -100 }} />

      <View style={styles.container2}>
        <Text style={styles.titulo}>Inicio de sesión</Text>
        <View style={styles.containerInputs}>
          <Icon name="user" size={25} color='white'/>
          <TextInput
            style={styles.input}
            placeholder='Nombre de usuario'
            onChangeText={text => setUsername(text)}
            value={username}
          />
        </View>
        <View style={styles.containerInputs}>
          <Icon name="lock" size={25} color='white' />
          <TextInput
            style={styles.input}
            placeholder='Contraseña'
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>

        {showError && (
        <Text style={styles.textoErrorCredenciales}>Credenciales Incorrectas</Text>
        )}

        <TouchableOpacity onPress={handleLogin} style={{ width: 100 }}>
          <Text style={{ fontWeight: 'normal', fontSize: 15, backgroundColor: '#00994D', borderRadius: 10, textAlign: 'center', color: 'white' }}>
            INGRESAR
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    //backgroundColor: '#fcd381',
    justifyContent: 'center',
    alignItems: 'center',
  },

// Recuadro interno (debajo del logo)
  container2: {
    backgroundColor: 'skyblue',
    //backgroundColor: '#fab778',
    height: 240,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

// Recuadro que contiene un 'simbolo' y un rectangulo 'input'
  containerInputs: {
    //backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
  },

// Rectangulo para ingresar algo 'input'
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    textAlign: 'center',
    width: 200,
    height: 25,
    margin: 15,
    borderRadius: 20
  },

  titulo: {
    fontFamily: 'Georgia',
    fontSize: 20,
    marginBottom: 0,
  },

  textoErrorCredenciales: {
    //backgroundColor: 'black',
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    paddingBottom: 15,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
