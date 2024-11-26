import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {G} from 'react-native-svg';
import TextComponent from '../Component/TextComponent';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const StatistikAbsensi: React.FC = () => {
  const data = [
    {key: 1, amount: 9, svg: {fill: '#2CD3E1'}, label: 'Kerja Normal: 9 Hari'},
    {key: 2, amount: 5, svg: {fill: '#A6FF96'}, label: 'WFH: 5 Hari'},
    {key: 3, amount: 1, svg: {fill: '#FF004D'}, label: 'Cuti: 1 Hari'},
    {key: 4, amount: 3, svg: {fill: '#F8DE22'}, label: 'Overtime: 3 Hari'},
    {key: 5, amount: 2, svg: {fill: '#F94C10'}, label: 'SPPD: 2 Hari'},
    {key: 6, amount: 2, svg: {fill: '#6528F7'}, label: 'Terlambat: 2 Hari'},
  ];

  const Labels = ({slices}: any) => {
    return slices.map((slice: any, index: number) => {
      return <G key={index} />;
    });
  };

  const renderDesc = (item: {
    key: number;
    label: string;
    svg: {fill: string};
  }) => {
    const [leftText, rightText] = item.label.split(': ');

    return (
      <View key={item.key} style={styles.descStyle}>
        <View style={[styles.descColor, {backgroundColor: item.svg.fill}]} />
        <View style={styles.descContainer}>
          <Text style={styles.absenDesc}>{leftText}:</Text>
          <Text style={styles.absenDays}>
            <Text style={{fontWeight: 'bold'}}>{rightText}</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputComponent}>
        <TouchableOpacity style={styles.inputField}>
          <TextComponent
            text="Statistik Bulan Juli"
            fontSize={13}
            fontWeight={'bold'}
            color={'#0077b6'}
          />
          <FontAwesomeIcon icon={faChevronDown} size={17} color={'#0077b6'} />
        </TouchableOpacity>
      </View>
      <PieChart
        style={styles.chart}
        valueAccessor={({item}) => item.amount}
        data={data}>
        <Labels />
      </PieChart>
      <View style={styles.desc}>{data.map(item => renderDesc(item))}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  chart: {
    height: 200,
    marginTop: 30,
    marginBottom: 20,
  },
  desc: {
    marginTop: 50,
  },
  descStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  descColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  descContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  absenDesc: {
    flex: 1,
    textAlign: 'left',
  },
  absenDays: {
    flex: 1,
    textAlign: 'right',
  },
  inputComponent: {
    marginBottom: 20,
  },
  inputField: {
    width: '50%',
    flexDirection: 'row',
    borderColor: '#0077b6',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});

export default StatistikAbsensi;
