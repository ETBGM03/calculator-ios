import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Calculadora from './src/screens/Calculadora';
import {stylesGlobal} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={stylesGlobal.fondo}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Calculadora />
    </SafeAreaView>
  );
};

export default App;
