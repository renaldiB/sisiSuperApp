// import React from 'react';
// import { View } from 'react-native';
// import TextComponent from '../Component/TextComponent';

// const Statistic = () => {
//   return(
//     <View>
//         <TextComponent text='Statistic' fontSize={20} fontWeight={'bold'}/>
//     </View>
//   );
// };

// export default Statistic;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import StatistikAbsensi from './StatistikAbsensi';
import AbsensiHarian from './AbsensiHarian';

const Statistic: React.FC = () => {
  const [activeTab, setActiveTab] = useState('statistikAbsensi');

  const renderContent = () => {
    if (activeTab === 'statistikAbsensi') {
      return <StatistikAbsensi />;
    } else if (activeTab === 'absensiHarian') {
      return <AbsensiHarian />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'statistikAbsensi' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('statistikAbsensi')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'statistikAbsensi' && styles.activeTabText,
            ]}>
            Statistik Absensi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'absensiHarian' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('absensiHarian')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'absensiHarian' && styles.activeTabText,
            ]}>
            Absensi Harian
          </Text>
        </TouchableOpacity>
      </View>

      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0077b6',
  },
  tabText: {
    color: 'grey',
  },
  activeTabText: {
    color: '#0077b6',
  },
});

export default Statistic;
