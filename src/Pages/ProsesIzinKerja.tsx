import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StepProgressComponent from '../Component/StepProgressComponent';
import TextComponent from '../Component/TextComponent';
import { useNavigation } from '@react-navigation/native';

const ProsesIzinKerja: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  const navigateNextPage = () => {
    navigation.navigate('Acc Perizinan Kerja');
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepStyles}>
        <StepProgressComponent
          stepNumber={1}
          label="Pengajuan"
          isCompleted
          isNewLine
        />
        <StepProgressComponent
          stepNumber={2}
          label="Proses"
          isNewLine
          isCompleted
        />
        <StepProgressComponent stepNumber={3} label="Disetujui" />
      </View>

      <View style={styles.content}>
        <Image
          source={require('../img/smiley.jpg')}
          style={styles.image}
        />
        <TextComponent
          text="Pengajuanmu berhasil dikirim!"
          fontSize={20}
          fontWeight={600}
          color={'#A9A9A9'}
        />
        <TextComponent
          text="Tetap pantau terus!"
          fontSize={20}
          fontWeight={600}
          color={'#A9A9A9'}
        />
      </View>

      <TouchableOpacity
        style={[styles.submitBtn, isDisabled && styles.submitBtnDisabled]}
        disabled={isDisabled}
        onPress={navigateNextPage}
      >
        <Text style={styles.submitBtnText}>Selanjutnya</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  stepStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15,
  },
  submitBtn: {
    backgroundColor: '#0077b6',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnDisabled: {
    backgroundColor: '#EEEEEE',
  },
  submitBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProsesIzinKerja;
