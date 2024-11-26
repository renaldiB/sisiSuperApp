import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import TextComponent from './TextComponent';

interface CardComponentProps {
  icon?: IconDefinition;
  title?: string;
  textAlign?: 'center' | 'left' | 'right' | '';
  onPress: () => void;
}

const CardBoxComponent: React.FC<CardComponentProps> = ({
  icon,
  title,
  textAlign,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.cardBox} onPress={onPress}>
      <FontAwesomeIcon
        icon={icon}
        size={60}
        color={'#0077b6'}
        style={{marginBottom: 30}}
      />
      <TextComponent
        text={title}
        fontSize={12}
        fontWeight={600}
        textAlign={textAlign}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 15,
    alignItems: 'center',
    flex: 0.5,
  },
});

export default CardBoxComponent;
