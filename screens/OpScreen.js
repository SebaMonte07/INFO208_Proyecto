import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const colorIcon = "#fcfc79"

const OpcionesScreen = ({ navigation , route }) => {

  const { username } = route.params;

    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text
            style={styles.titulo}>Opciones
          </Text>
          <View style={styles.buttonContainer}>
            <View style={styles.containerOpcion}>
              <TouchableOpacity onPress={() => navigation.navigate('ForoConsultas',{ username: username }) } style={{flexDirection:'row'}}>
                <Icon name="circle" size={25} color={'#00994D'}/>
                <Text style={styles.botonOpciones}>
                  Foro Consultas
                </Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.containerOpcion}>
              <TouchableOpacity onPress={() => navigation.navigate('PreguntasFrecuentes',{ username: username })} style={{flexDirection:'row'}}>
                <Icon name="circle" size={25} color={'#00994D'}/>
                <Text style={styles.botonOpciones}>
                  Preguntas Frecuentes
                </Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.containerOpcion}>
              <TouchableOpacity onPress={() => navigation.navigate('Calendario')} style={{flexDirection:'row'}}>
                <Icon name="circle" size={25} color={'#00994D'}/>
                <Text style={styles.botonOpciones}>
                  Calendario
                </Text>
              </TouchableOpacity>
            </View>
  
          </View>
        </View>
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

  container2: {
    backgroundColor: 'skyblue',
    //backgroundColor: '#fab778',
    height: 240,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  titulo:{
    //backgroundColor: '#00994D',
    fontSize: 20,
    marginBottom: 25,
  },

//Contiene los 3 botones
  buttonContainer: {
    //backgroundColor: 'red',
    width: 250,
  },

// Recuadro con el circulo y el texto
  containerOpcion:{
    //backgroundColor: 'black',
    marginBottom: 20,
  },

// Recuadro que contiene el texto de la 'opcion'
  botonOpciones:{
    //backgroundColor: 'green',
    marginLeft: 10,
    color: 'black', // Color del texto
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
  
export default OpcionesScreen;
