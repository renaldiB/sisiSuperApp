import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Profile = () => {
  const navigation = useNavigation();

  const logOut = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logOutBtn} onPress={logOut}>
        <Text style={styles.logOutBtnText}>Log Out</Text>
      </TouchableOpacity>{' '}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logOutBtn: {
    width: '80%',
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 1,
    borderColor: '#0077b6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutBtnText: {
    color: '#0077b6',
    fontWeight: 'bold',
  },
});

export default Profile;
