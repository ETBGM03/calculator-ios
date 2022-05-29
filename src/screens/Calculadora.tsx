import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {stylesGlobal} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';
import BottonCalc from '../components/BottonCalc';

const Calculadora = () => {
  const {
    valueCalc,
    valueCalcPrev,
    clearValue,
    buildNumber,
    positiveOrNegative,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calculator,
  } = useCalculator();

  return (
    <View style={stylesGlobal.calculatorScreen}>
      {valueCalcPrev !== '0' && (
        <Text style={styles.resultTextSmall}>{valueCalcPrev}</Text>
      )}
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {valueCalc}
      </Text>

      <View style={styles.row}>
        <BottonCalc text="C" color="#9b9b9b" action={clearValue} />
        <BottonCalc text="+/-" color="#9b9b9b" action={positiveOrNegative} />
        <BottonCalc text="del" color="#9b9b9b" action={btnDelete} />
        <BottonCalc text="/" color="#ff9427" action={btnDividir} />
      </View>
      <View style={styles.row}>
        <BottonCalc text="7" action={buildNumber} />
        <BottonCalc text="8" action={buildNumber} />
        <BottonCalc text="9" action={buildNumber} />
        <BottonCalc text="x" color="#ff9427" action={btnMultiplicar} />
      </View>
      <View style={styles.row}>
        <BottonCalc text="4" action={buildNumber} />
        <BottonCalc text="5" action={buildNumber} />
        <BottonCalc text="6" action={buildNumber} />
        <BottonCalc text="-" color="#ff9427" action={btnRestar} />
      </View>
      <View style={styles.row}>
        <BottonCalc text="1" action={buildNumber} />
        <BottonCalc text="2" action={buildNumber} />
        <BottonCalc text="3" action={buildNumber} />
        <BottonCalc text="+" color="#ff9427" action={btnSumar} />
      </View>

      <View style={styles.row}>
        <BottonCalc text="0" large action={buildNumber} />
        <BottonCalc text="." action={buildNumber} />
        <BottonCalc text="=" color="#ff9427" action={calculator} />
      </View>
    </View>
  );
};

export default Calculadora;

const styles = StyleSheet.create({
  resultTextSmall: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 30,
    textAlign: 'right',
  },
  resultText: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
