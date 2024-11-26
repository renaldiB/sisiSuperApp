import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import TextComponent from '../Component/TextComponent';
import {StyleSheet, View} from 'react-native';

const Notifikasi = () => {
  return (
    <ScrollView style={styles.container}>
      <TextComponent
        text="Hari ini"
        fontSize={20}
        fontWeight={'bold'}
        color={'#0077b6'}
      />
      <View style={styles.notificationHistory}>
        <TextComponent text='Perizinanmu telah disetujui, silahkan cek kembali untuk detail perizinan.' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
      </View>
      <TextComponent
        text="Kemarin"
        fontSize={20}
        fontWeight={'bold'}
        color={'#0077b6'}
      />
      <View style={styles.notificationHistory}>
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
        <TextComponent text='Hai, jangan lupa absensi tepat waktu untuk hari ini ya!' fontSize={13} fontWeight={500} isBottomLine />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
  notificationHistory: {
    marginTop: 15,
  },
});

export default Notifikasi;
