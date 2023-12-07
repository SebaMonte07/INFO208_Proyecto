import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, TouchableHighlight, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';

const backgroundImage = require('../assets/fondoP.png');

const ForoScreen = ({ navigation, route }) => {
  const { username } = route.params;

  const [preguntasRespuestas, setPreguntasRespuestas] = useState([
    { pregunta: '¿Cuál es tu color favorito?', respuestas: ['Mi color favorito es el azul.'], topico: 'general' },
    { pregunta: '¿Cuál es tu película favorita?', respuestas: [], topico: 'becas' },
    { pregunta: '¿Qué tipo de música te gusta?', respuestas: [], topico: 'calendario' },
    { pregunta: '¿Cuál es tu deporte favorito?', respuestas: [], topico: 'pagos' },
    { pregunta: '¿Tienes alguna mascota?', respuestas: [], topico: 'general' },
    { pregunta: '¿Cuál es tu comida favorita?', respuestas: [], topico: 'becas' },
    { pregunta: '¿Prefieres café o té?', respuestas: [], topico: 'general' },
    { pregunta: '¿Cuál es tu lugar de vacaciones ideal?', respuestas: [], topico: 'calendario' },
  ]);

  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);
  const [responderModalVisible, setResponderModalVisible] = useState(false);
  const [nuevaRespuesta, setNuevaRespuesta] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState(username);
  const [agregarModalVisible, setAgregarModalVisible] = useState(false);
  const [nuevaPregunta, setNuevaPregunta] = useState('');
  const [topico, setTopico] = useState('general');
  const [respuestaExcedeLimite, setRespuestaExcedeLimite] = useState(false);
  const [respuestaVacia, setRespuestaVacia] = useState(false);

  const handlePreguntaPress = (index) => {
    setPreguntaSeleccionada(index === preguntaSeleccionada ? null : index);
  };

  const mostrarResponderModal = (index) => {
    setPreguntaSeleccionada(index);
    setResponderModalVisible(true);
  };

  const agregarRespuesta = () => {
    if (nuevaRespuesta.trim() === '') {
      setRespuestaVacia(true);
      setRespuestaExcedeLimite(false);
      return;
    }

    if (nuevaRespuesta.length > 500) {
      setRespuestaExcedeLimite(true);
      setRespuestaVacia(false);
      return;
    }

    const nuevasPreguntas = [...preguntasRespuestas];
    const pregunta = nuevasPreguntas[preguntaSeleccionada];
    const respuestaConNombre = `${nombreUsuario}: ${nuevaRespuesta}`;
    pregunta.respuestas = [...pregunta.respuestas, respuestaConNombre];
    setPreguntasRespuestas(nuevasPreguntas);
    setResponderModalVisible(false);
    setPreguntaSeleccionada(null);
    setNuevaRespuesta('');
    setRespuestaExcedeLimite(false);
    setRespuestaVacia(false);
  };

  const agregarPregunta = () => {
    const nuevaPreguntaObj = { pregunta: nuevaPregunta, respuestas: [], topico };
    setPreguntasRespuestas([...preguntasRespuestas, nuevaPreguntaObj]);
    setNuevaPregunta('');
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
              onLongPress={() => mostrarResponderModal(index)}
            >
              <Text style={styles.pregunta}>{item.pregunta}</Text>
              <Text style={styles.topico}>Tópico: {item.topico}</Text>
              {preguntaSeleccionada === index && (
                <View>
                  {item.respuestas.map((respuesta, idx) => (
                    <Text key={idx} style={styles.respuesta}>{respuesta}</Text>
                  ))}
                </View>
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
            <Text style={styles.label}>Selecciona un tópico:</Text>
            <RNPickerSelect
              onValueChange={(value) => setTopico(value)}
              items={[
                { label: 'Matrícula', value: 'matricula' },
                { label: 'Becas', value: 'becas' },
                { label: 'Pagos', value: 'pagos' },
                { label: 'Calendario', value: 'calendario' },
                { label: 'General', value: 'general' },
              ]}
              value={topico}
              style={pickerSelectStyles}
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

        {/* Modal para agregar respuesta */}
        <Modal
          animationType="slide"
          isVisible={responderModalVisible}
          onRequestClose={() => setResponderModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Responder Pregunta</Text>
            <TextInput
              style={styles.input}
              placeholder="Nueva Respuesta"
              value={nuevaRespuesta}
              onChangeText={(text) => setNuevaRespuesta(text)}
            />
            {respuestaVacia && <Text style={styles.errorText}>La respuesta no puede estar vacía.</Text>}
            {respuestaExcedeLimite && <Text style={styles.errorText}>La respuesta no puede superar los 500 caracteres.</Text>}
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={[styles.dialogButton, styles.dialogButtonYes]}
                onPress={() => agregarRespuesta()}
              >
                <Text style={styles.dialogButtonText}>Responder</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.dialogButton, styles.dialogButtonNo]}
                onPress={() => setResponderModalVisible(false)}
              >
                <Text style={styles.dialogButtonText}>Cancelar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});


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
    marginBottom: 60,
  },
  pregunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  respuesta: {
    fontSize: 14,
    marginLeft: 10,
  },
  agregarButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agregarButtonText: {
    fontSize: 30,
    color: 'white',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  dialogButton: {
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  dialogButtonYes: {
    backgroundColor: '#4CAF50',
  },
  dialogButtonNo: {
    backgroundColor: '#D32F2F',
  },
  dialogButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  topico: {
    fontSize: 14,
    color: '#777777',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ForoScreen;