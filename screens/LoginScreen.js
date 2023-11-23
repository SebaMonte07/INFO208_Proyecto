import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    // esto deberia estar en una base de datos
    const user = "A";
    const psw = "A"
  
    const handleLogin = () => {
      navigation.navigate('Opciones');
    };
  
    const verificar = async () => {
      try{
        console.log(username, password);
        if(username == user && password == psw){
          console.log("Usuario ha iniciado sesión");
          Alert.alert("Credenciales correctas");
          handleLogin();
        }
        else{
          Alert.alert("Error al iniciar sesión!");
        }
      }
      catch(error) {
        console.log("Error al iniciar sesión");
        Alert.alert("Error al iniciar sesión");
      }
    };
  
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logoinformatica.jpg')} style={{width: 200, height: 117}} marginTop={-100} />
        <View style={styles.container2}>
          <Text style={styles.titulo}>Inicio de sesión</Text>
          <View style={styles.containerRow}>
            <Icon name="user" size={25} color='white'/>
            <TextInput style={styles.input} placeholder='Nombre de usuario...' onChangeText={text => setUsername(text)} value={username}></TextInput>
          </View>
          <View style={styles.containerRow}>
            <Icon name="lock" size={25} color='white'/>
            <TextInput style={styles.input} placeholder='Contraseña...' onChangeText={text => setPassword(text)} value={password} secureTextEntry={true}></TextInput>
          </View>
  
          <TouchableOpacity onPress={verificar} style={{width:100}}>
            <Text style={{fontWeight:'normal', fontSize:15, backgroundColor:'#50a5e6', borderRadius:10, textAlign: 'center', color:'white'}}>
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
    backgroundColor: '#fcd381',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container2: {
    backgroundColor: '#fab778',
    height: 240,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  containerRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    textAlign: 'center',
    width: 200,
    margin: 15,
    borderRadius: 20
  },

  titulo:{
    fontSize: 20,
    marginBottom: 0,
  },
});  

export default LoginScreen;