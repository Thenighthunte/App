import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NewHomeScreen from './NewHome';
const HomeScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <ImageBackground source={require('./images.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.description}>
          Explore endless possibilities with My innovative solutions.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewHome')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 30,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;