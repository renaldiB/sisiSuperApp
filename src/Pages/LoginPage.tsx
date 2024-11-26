import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const LoginPage: React.FC = () => {
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Homepage');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/sisiLogo.png')} />

      <View style={styles.inputContainer}>
        <FontAwesomeIcon
          icon={faEnvelope}
          size={20}
          color="gray"
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Masukkan Email" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon
          icon={faLock}
          size={20}
          color="gray"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Kata Sandi"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordHelperContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            disabled={false}
            value={rememberPassword}
            onValueChange={newValue => setRememberPassword(newValue)}
          />
          <Text style={styles.label}>Simpan Kata Sandi?</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Lupa Kata Sandi?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={navigateToHome}>
        <Text style={styles.loginButtonText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  logo: {
    height: 100,
    width: 200,
    marginBottom: 40,
  },
  showPassword: {
    marginLeft: 10,
    color: 'blue',
  },
  passwordHelperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '100%',
  },
  label: {
    marginLeft: 8,
  },
  forgotPassword: {
    color: '#0077b6',
  },
  loginButton: {
    backgroundColor: '#0077b6',
    padding: 15,
    borderRadius: 10,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginPage;
