import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, TouchableHighlight, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';

const backgroundImage = require('../assets/fondoP.png'); 

const PregFrecScreen = ({ navigation , route }) => {
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
  const [eliminarModalVisible, setEliminarModalVisible] = useState(false);
  const [nuevaPregunta, setNuevaPregunta] = useState('');
  const [nuevaRespuesta, setNuevaRespuesta] = useState('');
  const [agregarModalVisible, setAgregarModalVisible] = useState(false);

  const handlePreguntaPress = (index) => {
    setPreguntaSeleccionada(index === preguntaSeleccionada ? null : index);
  };

  const mostrarEliminarModal = (index) => {
    setPreguntaSeleccionada(index);
    setEliminarModalVisible(true);
  };

  const eliminarPregunta = () => {
    const nuevasPreguntas = [...preguntasRespuestas];
    nuevasPreguntas.splice(preguntaSeleccionada, 1);
    setPreguntasRespuestas(nuevasPreguntas);
    setEliminarModalVisible(false);
    setPreguntaSeleccionada(null);
  };

  const agregarPregunta = () => {
    const nuevaPreguntaObj = { pregunta: nuevaPregunta, respuesta: nuevaRespuesta };
    setPreguntasRespuestas([...preguntasRespuestas, nuevaPreguntaObj]);
    setNuevaPregunta('');
    setNuevaRespuesta('');
    setAgregarModalVisible(false);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.preguntasContainer}>
          {preguntasRespuestas.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.preguntaContainer,
                index === preguntasRespuestas.length - 1 ? styles.lastPreguntaContainer : null,
              ]}
              onPress={() => handlePreguntaPress(index)}
              onLongPress={() => mostrarEliminarModal(index)}
            >
              <Text style={styles.pregunta}>{item.pregunta}</Text>
              {preguntaSeleccionada === index && (
                <Text style={styles.respuesta}>{item.respuesta}</Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Botón para agregar pregunta */}
        <TouchableOpacity
          style={styles.agregarButton}
          onPress={() => setAgregarModalVisible(true)}
        >
          <Text style={styles.agregarButtonText}>+</Text>
        </TouchableOpacity>

        {/* Modal para ingresar nueva pregunta y respuesta */}
        <Modal
          animationType="slide"
          isVisible={agregarModalVisible}
          onRequestClose={() => setAgregarModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Agregar Nueva Pregunta</Text>
            <TextInput
              style={styles.input}
              placeholder="Nueva Pregunta"
              value={nuevaPregunta}
              onChangeText={(text) => setNuevaPregunta(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nueva Respuesta"
              value={nuevaRespuesta}
              onChangeText={(text) => setNuevaRespuesta(text)}
            />
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={[styles.dialogButton, styles.dialogButtonYes]}
                onPress={() => agregarPregunta()}
              >
                <Text style={styles.dialogButtonText}>Agregar</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.dialogButton, styles.dialogButtonNo]}
                onPress={() => setAgregarModalVisible(false)}
              >
                <Text style={styles.dialogButtonText}>Cancelar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal para confirmar eliminación */}
        <Modal isVisible={eliminarModalVisible}>
          <View style={styles.eliminarModalContainer}>
            <Text style={[styles.eliminarModalText, styles.boldText]}>
              ¿Seguro que quieres eliminar esta pregunta?
            </Text>
            <View style={styles.eliminarModalButtons}>
              <TouchableHighlight
                style={[styles.eliminarModalButton, styles.eliminarModalButtonYes]}
                onPress={eliminarPregunta}
              >
                <Text style={styles.eliminarModalButtonText}>Eliminar</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.eliminarModalButton, styles.eliminarModalButtonNo]}
                onPress={() => setEliminarModalVisible(false)}
              >
                <Text style={styles.eliminarModalButtonText}>Cancelar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
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
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 10,
    borderRadius: 15,
    width: '93%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderWidth: 4, 
    borderColor: 'rgba(0, 0, 0, 0.1)', 
  },
  
  lastPreguntaContainer: {
    marginBottom: 80, 
  },
  pregunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  respuesta: {
    fontSize: 16,
    color: '#555555',
  },
  agregarButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#3498db',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  agregarButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    color: '#333333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  dialogButton: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  dialogButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  dialogButtonNo: {
    backgroundColor: '#3498db',
  },
  dialogButtonYes: {
    backgroundColor: '#e74c3c',
  },
  eliminarModalContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  eliminarModalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  eliminarModalButtons: {
    flexDirection: 'row',
  },
  eliminarModalButton: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  eliminarModalButtonYes: {
    backgroundColor: '#e74c3c',
  },
  eliminarModalButtonNo: {
    backgroundColor: '#3498db',
  },
  eliminarModalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PregFrecScreen;
