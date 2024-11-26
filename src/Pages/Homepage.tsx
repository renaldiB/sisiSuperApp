import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import TextComponent from '../Component/TextComponent';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCamera,
  faBusinessTime,
  faHouseLaptop,
  faFileSignature,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import CardBoxComponent from '../Component/CardBoxComponent';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Homepage: React.FC = () => {
  const navigation = useNavigation();

  const navigateToIzinKerja = () => {
    navigation.navigate('Perizinan Kerja');
  };

  const navigateSelfiPage = () => {
    navigation.navigate('Selfie Page');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <TextComponent
          text="Intan Dhamayanti"
          fontSize={25}
          fontWeight={'bold'}
        />
        <TextComponent text="UI/UX Designer" fontSize={15} fontWeight={'400'} />
      </View>

      <View style={styles.checkInContainer}>
        <View>
          <Image
            style={styles.checkInImage}
            source={require('../img/checkInImage.png')}
          />
        </View>

        <View style={styles.checkInInfo}>
          <View style={{justifyContent: 'space-between'}}>
            <TextComponent text="Check In" fontSize={15} fontWeight={'bold'} />
            <TextComponent
              text="Dijadwalkan 07.30 WIB"
              fontSize={10}
              fontWeight={'400'}
            />
          </View>
          <TouchableOpacity
            style={styles.checkInButton}
            onPress={navigateSelfiPage}>
            <FontAwesomeIcon
              icon={faCamera}
              size={13}
              color="#0077b6"
              style={{marginRight: 5}}
            />
            <TextComponent
              text="Check In"
              fontSize={13}
              fontWeight={'bold'}
              color={'#0077b6'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CardBoxComponent title="Overtime (Lembur)" icon={faBusinessTime} />
          <CardBoxComponent
            title="Pengajuan Izin Kerja"
            icon={faFileSignature}
            onPress={navigateToIzinKerja}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <CardBoxComponent
            title="Pengajuan Work From Home"
            icon={faHouseLaptop}
            textAlign="center"
          />
          <CardBoxComponent title="Pengajuan SPPD" icon={faSuitcase} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  profileContainer: {
    flexDirection: 'column',
    margin: 5,
  },
  checkInContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  checkInImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  checkInInfo: {
    flexDirection: 'row',
    width: '99%',
    justifyContent: 'space-between',
    padding: 15,
  },
  checkInButton: {
    flexDirection: 'row',
    backgroundColor: '#d8f9ff',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
});

export default Homepage;
