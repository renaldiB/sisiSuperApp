import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StepProgressComponent from '../Component/StepProgressComponent';
import TextComponent from '../Component/TextComponent';
import {useNavigation} from '@react-navigation/native';

const AccIzinKerja: React.FC = () => {
  const navigation = useNavigation();

  const navigateHomepage = () => {
    navigation.navigate('Homepage');
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
        <StepProgressComponent stepNumber={3} label="Disetujui" isCompleted />
      </View>

      <View style={styles.content}>
        <Image source={require('../img/smiley.jpg')} style={styles.image} />
        <TextComponent
          text="Pengajuanmu telah disetujui!"
          fontSize={20}
          fontWeight={600}
          color={'#A9A9A9'}
        />
        <TextComponent
          text="Download untuk bukti!"
          fontSize={20}
          fontWeight={600}
          color={'#A9A9A9'}
        />
      </View>

      <View style={{justifyContent: 'space-between', flex: 0.4}}>
        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadBtnText}>Download Persetujuan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homepageBtn} onPress={navigateHomepage}>
          <Text style={styles.homepageBtnText}>Kembali ke Home</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'center',
    marginTop: 20,
    flex: 2,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15,
  },
  downloadBtn: {
    backgroundColor: '#0077b6',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  homepageBtn: {
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 1,
    borderColor: '#0077b6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homepageBtnText: {
    color: '#0077b6',
    fontWeight: 'bold',
  },
});

export default AccIzinKerja;
