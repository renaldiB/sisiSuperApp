import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

interface DatePickerComponentProps {
  onSelectDate: (date: Date) => void;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  onSelectDate,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const generateDates = () => {
    const dates = [];
    const startDate = new Date();
    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates();

  const formatDate = (date: Date) => {
    return date.toDateString();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.inputField}>
        <Text style={styles.dateText}>
          {selectedDate ? formatDate(selectedDate) : 'Pilih Tanggal'}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={dates}
              keyExtractor={item => item.toDateString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.dateItem}
                  onPress={() => {
                    setSelectedDate(item);
                    setModalVisible(false);
                    onSelectDate(item);
                  }}>
                  <Text style={styles.dateText}>{formatDate(item)}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderColor: 'grey',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#EEEEEE',
  },
  dateText: {
    color: '#686D76',
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
    height: '60%',
    borderRadius: 10,
    padding: 20,
  },
  dateItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#0077b6',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DatePickerComponent;
