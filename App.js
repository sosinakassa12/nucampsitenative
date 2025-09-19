import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
    <NavigationContainer>
        <Main />
    </NavigationContainer>
);
}

