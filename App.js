import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image, Alert, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';


// npm install react-native-calendars

const Stack = createStackNavigator();
const colorIcon = "#fcfc79"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Opciones" component={OpcionesScreen} />
        <Stack.Screen name="ForoConsultas" component={ForoScreen} />
        <Stack.Screen name="PreguntasFrecuentes" component={PregFrecScreen} />
        <Stack.Screen name="Calendario" component={CalendarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <Image source={require('./assets/logoinformatica.jpg')} style={{width: 200, height: 117}} marginTop={-100} />
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

function OpcionesScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Opciones </Text>
        <View style={styles.buttonContainer}>

          <View style={styles.separacion}>
            <TouchableOpacity onPress={() => navigation.navigate('ForoConsultas')} style={{flexDirection:'row'}}>
              <Icon name="circle" size={25} color={colorIcon}/>
              <Text style={styles.botonOpciones}>
                Foro Consultas
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separacion}>
            <TouchableOpacity onPress={() => navigation.navigate('PreguntasFrecuentes')} style={{flexDirection:'row'}}>
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

function ForoScreen ({ navigation }) {
 
  return(
    <View style={styles.container}>
      <View style={styles.container2} height={300}>
        <Text>este es el foro</Text>
      </View>
    </View>

  );
}

function PregFrecScreen ({ navigation }) {
 

  return(
    <View style={styles.container}>
      <View style={styles.container2} height={300}>
        <Text>Preguntas frecuentes</Text>
      </View>
    </View>

  );
}

function CalendarioScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('');

  const diaPresionado = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <View>
        <Calendar
          style={{
            borderRadius: 20,
            height: 380,
            width: 300,
          }}
          onDayPress={diaPresionado}
          markedDates={{ [selectedDate]: { selected: true, selectedColor: '#fcfc79' } }}
          theme={{
            calendarBackground: '#262626',
            textSectionTitleColor: 'white',
            selectedDayTextColor: 'black',
            todayTextColor: 'skyblue',
            dayTextColor: 'white',
            textDisabledColor: '#555555',
            selectedDotColor: 'white',
            arrowColor: '#fcfc79',
            monthTextColor: 'white',
          }}
        />
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

  containerMod: {
    flex: 1,
    backgroundColor: '#fff',
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

  minicontainer: {
    backgroundColor: '#6ac0eb',
    height: 120,
    width: 200,
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 15
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

  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});
