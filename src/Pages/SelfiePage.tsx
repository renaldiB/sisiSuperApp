import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import TextComponent from '../Component/TextComponent';
import { useNavigation } from '@react-navigation/native';

const SelfiePage: React.FC = () => {
  const [cameraPermission, setCameraPermission] = useState<string | null>(null);
  const [devices, setDevices] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const cameraRef = useRef<Camera>(null);
  const frontCamera = devices?.find(device => device.position === 'front');
  const navigation = useNavigation();

  const navigateHomepage = () => {
    navigation.navigate('Homepage');
    setModalVisible(false);
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const permission = await Camera.requestCameraPermission();
      setCameraPermission(permission);

      if (permission === 'granted') {
        const availableDevices = await Camera.getAvailableCameraDevices();
        setDevices(availableDevices);
      }
    };
    requestPermissions();
  }, []);

  const showModal = async () => {
    setModalVisible(true);
  };

  if (cameraPermission !== 'granted') {
    return (
      <View style={styles.container}>
        <Text>Requesting permissions... {cameraPermission}</Text>
        <Button
          title="Retry"
          onPress={() =>
            Camera.requestCameraPermission().then(setCameraPermission)
          }
        />
      </View>
    );
  }

  if (!frontCamera) {
    return (
      <View style={styles.container}>
        <Text>Loading camera...</Text>
        <Button
          title="Retry"
          onPress={() => {
            setDevices(null);
            setCameraPermission(null);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={frontCamera}
        isActive={true}
        photo={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.cameraBtn} onPress={showModal}>
          <FontAwesomeIcon icon={faCamera} size={30} color="#0077b6" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
         <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FontAwesomeIcon
              icon={faCalendarCheck}
              size={120}
              color="#0077b6"
            />
            <TextComponent
              text="Yeay, absensi berhasil!"
              fontSize={30}
              fontWeight={500}
              textAlign="center"
            />
            <View style={styles.modalBtn}>
              <TouchableOpacity
                style={styles.homepageBtn}
                onPress={navigateHomepage}>
                <Text style={styles.homepageBtnText}>Homepage</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.downloadBtn}>
                <Text style={styles.downloadBtnText}>Download</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  cameraBtn: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 20,
  },
  cameraBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 30,
    padding: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10,
  },
  modalBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  downloadBtn: {
    backgroundColor: '#0077b6',
    padding: 15,
    borderRadius: 15,
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
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homepageBtnText: {
    color: '#0077b6',
    fontWeight: 'bold',
  },
});

export default SelfiePage;
