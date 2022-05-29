import {useRef, useState} from 'react';
enum Operators {
  suma,
  resta,
  multiplicar,
  dividir,
}

export const useCalculator = () => {
  const [valueCalcPrev, setValueCalcPrev] = useState('0');
  const [valueCalc, setValueCalc] = useState('0');
  const latestOpera = useRef<Operators>();

  const clearValue = () => {
    setValueCalc('0');
    setValueCalcPrev('0');
  };

  const buildNumber = (numText: string) => {
    //No aceptar doble punto
    if (valueCalc.includes('.') && numText === '.') return;

    if (valueCalc.startsWith('0') || valueCalc.startsWith('-0')) {
      //punto decimal
      if (numText === '.') {
        setValueCalc(valueCalc + numText);
        //evaluar si es otro 0 y hay un punto
      } else if (numText === '0' && valueCalc.includes('.')) {
        setValueCalc(valueCalc + numText);

        //evaluar si !== 0 y no tiene punto
      } else if (numText !== '0' && !valueCalc.includes('.')) {
        setValueCalc(numText);

        //evitar 00.0
      } else if (numText === '0' && !valueCalc.includes('.')) {
        setValueCalc(valueCalc);
      } else {
        setValueCalc(valueCalc + numText);
      }
    } else {
      setValueCalc(valueCalc + numText);
    }
  };

  const positiveOrNegative = () => {
    if (valueCalc.includes('-')) {
      setValueCalc(valueCalc.replace('-', ''));
    } else {
      setValueCalc('-' + valueCalc);
    }
  };

  const btnDelete = () => {
    if (!valueCalc || valueCalc === '0') return;

    let negative = '';
    let numberTemp = valueCalc;

    if (valueCalc.includes('-')) {
      negative = '-';
      numberTemp = valueCalc.substring(1);
    }
    if (numberTemp.length > 1) {
      setValueCalc(negative + numberTemp.slice(0, -1));
    } else {
      setValueCalc('0');
    }
  };

  const changeNumberByPrev = () => {
    if (valueCalc.endsWith('.')) {
      setValueCalcPrev(valueCalc.slice(0, -1));
    } else {
      setValueCalcPrev(valueCalc);
    }
    setValueCalc('0');
  };

  const btnDividir = () => {
    changeNumberByPrev();
    latestOpera.current = Operators.dividir;
  };

  const btnMultiplicar = () => {
    changeNumberByPrev();
    latestOpera.current = Operators.multiplicar;
  };
  const btnRestar = () => {
    changeNumberByPrev();
    latestOpera.current = Operators.resta;
  };
  const btnSumar = () => {
    changeNumberByPrev();
    latestOpera.current = Operators.suma;
  };

  const calculator = () => {
    let result = 0;
    let numberTemp = Number(valueCalcPrev);
    let numberTemp2 = Number(valueCalc);

    switch (latestOpera.current) {
      case Operators.suma:
        result = numberTemp + numberTemp2;
        setValueCalc(result.toString());
        setValueCalcPrev('0');
        break;

      case Operators.resta:
        result = numberTemp - numberTemp2;
        setValueCalc(result.toString());
        setValueCalcPrev('0');
        break;

      case Operators.multiplicar:
        result = numberTemp * numberTemp2;
        setValueCalc(result.toString());
        setValueCalcPrev('0');
        break;

      case Operators.dividir:
        result = numberTemp / numberTemp2;
        setValueCalc(result.toString());
        setValueCalcPrev('0');
        break;
    }
  };

  return {
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
  };
};
