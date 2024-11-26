import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import TextComponent from '../Component/TextComponent';
import StepProgressComponent from '../Component/StepProgressComponent';
import DatePickerComponent from '../Component/DatePickerComponent';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCloudArrowUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const IzinKerja: React.FC = () => {
  const handleDateSelect = (date: Date) => {};
  const navigation = useNavigation();

  const navigateNextPage = () => {
    navigation.navigate('Proses Perizinan Kerja');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.stepStyles}>
        <StepProgressComponent
          stepNumber={1}
          label="Pengajuan"
          isCompleted
          isNewLine
        />
        <StepProgressComponent stepNumber={2} label="Proses" isNewLine />
        <StepProgressComponent stepNumber={3} label="Disetujui" />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputComponent}>
          <TextComponent
            text="Pilih Tanggal Izin"
            fontSize={15}
            fontWeight={400}
            color={'#0077b6'}
          />
          <DatePickerComponent onSelectDate={handleDateSelect} />
        </View>

        <View style={styles.inputComponent}>
          <TextComponent
            text="Keperluan Perizinan"
            fontSize={15}
            fontWeight={400}
            color={'#0077b6'}
          />
          <TextInput
            placeholder="Masukkan Keperluan Perizinan"
            style={[styles.inputField, {height: 100, textAlignVertical: 'top'}]}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputComponent}>
          <TextComponent
            text="Dokumen (Opsional)"
            fontSize={15}
            fontWeight={400}
            color={'#0077b6'}
          />
          <TouchableOpacity style={styles.inputField}>
            <TextComponent
              text="Upload Dokumen"
              fontSize={13}
              fontWeight={400}
              color={'#A9A9A9'}
            />
            <FontAwesomeIcon
              icon={faCloudArrowUp}
              size={20}
              color={'#0077b6'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputComponent}>
          <TextComponent
            text="Divisi"
            fontSize={15}
            fontWeight={400}
            color={'#0077b6'}
          />
          <TouchableOpacity style={styles.inputField}>
            <TextComponent
              text="UI/UX Designer"
              fontSize={13}
              fontWeight={400}
              color={'#A9A9A9'}
            />
            <FontAwesomeIcon icon={faChevronDown} size={20} color={'#0077b6'} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputComponent}>
          <TextComponent
            text="Atasan"
            fontSize={15}
            fontWeight={400}
            color={'#0077b6'}
          />
          <TouchableOpacity style={styles.inputField}>
            <TextComponent
              text="Bp. Nidzom"
              fontSize={13}
              fontWeight={400}
              color={'#A9A9A9'}
            />
            <FontAwesomeIcon icon={faChevronDown} size={20} color={'#0077b6'} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={navigateNextPage}>
          <Text style={styles.submitBtnText}>Kirim Pengajuan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  stepStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 30,
  },
  inputComponent: {
    marginBottom: 20,
  },
  inputField: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#EEEEEE',
    flex: 1,
    justifyContent: 'space-between',
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  submitBtn: {
    backgroundColor: '#0077b6',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  submitBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default IzinKerja;
