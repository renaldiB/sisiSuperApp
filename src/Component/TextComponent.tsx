import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';

interface CustomTextProps {
  text: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  color?: TextStyle['color'];
  textAlign?: TextStyle['textAlign'];
  isBottomLine?: boolean;
  marginTop?: TextStyle['marginTop'];
  marginBottom?: TextStyle['marginBottom'];
  marginVertical?: TextStyle['marginVertical'];
  marginHorizontal?: TextStyle['marginHorizontal'];
}

const TextComponent: React.FC<CustomTextProps> = ({
  text,
  fontSize,
  fontWeight,
  color,
  textAlign,
  isBottomLine,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize,
          fontWeight,
          color,
          textAlign,
          marginTop,
          marginBottom,
          marginVertical,
          marginHorizontal,
        }}>
        {text}
      </Text>
      <View style={isBottomLine ? styles.line : null}/>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 2,
    marginVertical: 15,
    backgroundColor: '#A9A9A9',
  },
});

export default TextComponent;
