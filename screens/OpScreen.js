import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const colorIcon = "#fcfc79"

const OpcionesScreen = ({ navigation , route }) => {

  const { username } = route.params;

    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.titulo}>Opciones </Text>
          <View style={styles.buttonContainer}>
  
            <View style={styles.separacion}>
              <TouchableOpacity onPress={() => navigation.navigate('ForoConsultas',{ username: username }) } style={{flexDirection:'row'}}>
                <Icon name="circle" size={25} color={colorIcon}/>
                <Text style={styles.botonOpciones}>
                  Foro Consultas
                </Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.separacion}>
              <TouchableOpacity onPress={() => navigation.navigate('PreguntasFrecuentes',{ username: username })} style={{flexDirection:'row'}}>
                <Icon name="circle" size={25} color={colorIcon}/>
                <Text style={styles.botonOpciones}>
                  Preguntas Frecuentes
                </Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.separacion}>
              <TouchableOpacity onPress={() => navigation.navigate('Calendario')} style={{flexDirection:'row'}}>
                <Icon name="circle" size={25} color={colorIcon}/>
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

  titulo:{
    fontSize: 20,
    marginBottom: 0,
  },

  buttonContainer: {
    width: '70%',
    flexDirection: 'column',
    marginTop:10,
  },

  separacion:{
    marginBottom: 10,
  }, 

  botonOpciones:{
    color: 'black', 
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: 20, 
    marginLeft: 5,
  },
});
  
export default OpcionesScreen;