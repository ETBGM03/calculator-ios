import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
interface Iprops {
  text: string;
  color?: string;
  large?: boolean;
  action: (numText: string) => void;
}

const BottonCalc = ({
  text,
  color = '#2d2d2d',
  large = false,
  action,
}: Iprops) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => action(text)}>
      <View
        style={{
          ...styles.botton,
          backgroundColor: color,
          width: large ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.bottonText,
            color: color === '#9b9b9b' ? '#000' : '#fff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottonCalc;

const styles = StyleSheet.create({
  botton: {
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  bottonText: {
    fontSize: 30,
    fontWeight: '500',
  },
});
