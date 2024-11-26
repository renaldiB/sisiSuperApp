import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface StepProgressComponentProps {
  stepNumber: number;
  label: string;
  isCompleted: boolean;
  isNewLine: boolean;
}

const StepProgressComponent: React.FC<StepProgressComponentProps> = ({
  stepNumber,
  label,
  isCompleted,
  isNewLine,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          isCompleted ? styles.completedCircle : styles.pendingCircle,
        ]}>
        <Text style={styles.stepNumber}>{stepNumber}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
      <View style={isNewLine ? styles.line : null}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedCircle: {
    backgroundColor: 'green',
  },
  pendingCircle: {
    backgroundColor: '#0077b6',
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  line: {
    width: 20,
    height: 2,
    marginHorizontal: 10,
    backgroundColor: '#0077b6',
  },
});

export default StepProgressComponent;
