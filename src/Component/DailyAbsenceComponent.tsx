import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faCalendarCheck} from '@fortawesome/free-regular-svg-icons';
import TextComponent from '../Component/TextComponent';

interface CardComponentProps {
  text: string;
  subTextOne: string;
  subTextTwo?: string;
}

const DailyAbsenceComponent: React.FC<CardComponentProps> = ({
  text,
  subTextOne,
  subTextTwo,
}) => {
  return (
    <TouchableOpacity style={styles.contentContainer}>
      <FontAwesomeIcon icon={faCalendarCheck} size={18} color="#0077b6" />
      <View style={styles.descText}>
        <TextComponent
          text={text}
          fontSize={15}
          fontWeight={600}
          marginBottom={5}
        />
        <TextComponent text={subTextOne} fontSize={10} fontWeight={400} />
        {subTextTwo && (
          <TextComponent text={subTextTwo} fontSize={10} fontWeight={400} />
        )}
      </View>
      <View style={styles.rightComponent}>
        <FontAwesomeIcon icon={faChevronRight} size={15} color="#0077b6" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 13,
  },
  descText: {
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: 15,
  },
  rightComponent: {
    justifyContent: 'center',
  },
});

export default DailyAbsenceComponent;
