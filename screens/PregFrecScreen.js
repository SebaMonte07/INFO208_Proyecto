import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PregFrecScreen = ({ navigation }) => {
  const [preguntasRespuestas, setPreguntasRespuestas] = useState([
    { pregunta: '¿Cuál es tu color favorito?', respuesta: 'Mi color favorito es el azul.' },
    { pregunta: '¿Cuál es tu comida preferida?', respuesta: 'Me encanta la pizza.' },
    { pregunta: '¿Qué tipo de música te gusta?', respuesta: 'Me gusta escuchar música pop.' },
    { pregunta: '¿Tienes alguna mascota?', respuesta: 'Sí, tengo un perro llamado Max.' },
    { pregunta: '¿Cuál es tu película favorita?', respuesta: 'Mi película favorita es Inception.' },
    { pregunta: '¿Cuál es tu lugar de vacaciones soñado?', respuesta: 'Me encantaría visitar Japón.' },
    { pregunta: '¿Prefieres el café o el té?', respuesta: 'Prefiero el té.' },
    { pregunta: '¿Tienes algún hobby?', respuesta: 'Sí, me gusta pintar en mi tiempo libre.' },
    { pregunta: '¿Cuál es tu libro favorito?', respuesta: 'Mi libro favorito es El señor de los anillos.' },
    { pregunta: '¿Cuál es tu libro favorito?', respuesta: 'Mi libro favorito es El señor de los anillos.' },
    { pregunta: '¿Pellao?', respuesta: 'si.' },
  ]);

  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

  const handlePreguntaPress = (index) => {
    setPreguntaSeleccionada(index === preguntaSeleccionada ? null : index);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.preguntasContainer}>
        {preguntasRespuestas.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.preguntaContainer}
            onPress={() => handlePreguntaPress(index)}
          >
            <Text style={styles.pregunta}>{item.pregunta}</Text>
            {preguntaSeleccionada === index && (
              <Text style={styles.respuesta}>{item.respuesta}</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcbca4',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  
  preguntasContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  preguntaContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    width: '100%',
  },
  pregunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  respuesta: {
    fontSize: 16,
  },
});

export default PregFrecScreen;
