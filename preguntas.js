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