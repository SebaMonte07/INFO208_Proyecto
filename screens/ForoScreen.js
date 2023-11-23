import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ForoScreen = ({ navigation }) => {
 
    return(
      <View style={styles.container}>
        <View style={styles.container2} height={300}>
          <Text>este es el foro</Text>
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
});  

export default ForoScreen;