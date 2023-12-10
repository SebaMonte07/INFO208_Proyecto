import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarioScreen = ({ navigation }) => {
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
      backgroundColor: '#E0FFFF',
      //backgroundColor: '#fcd381',
      justifyContent: 'center',
      alignItems: 'center',
    },
});  

export default CalendarioScreen;
