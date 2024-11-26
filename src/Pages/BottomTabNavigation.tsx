import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Homepage';
import Statistic from './Statistic';
import Profile from './Profile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faChartSimple,
  faBell,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Notifikasi from './Notifikasi';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHome} size={size} color={color} />
          ),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            justifyContent: 'center',
            flex: 1,
          },
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faChartSimple} size={size} color={color} />
          ),
          headerStyle: {backgroundColor: '#0077b6', height: 80},
          headerTitle:'Data Absensi',
          headerTitleStyle: {color: 'white'},
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIconStyle: {
            justifyContent: 'center',
            flex: 1,
          },
        }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faBell} size={size} color={color} />
          ),
          headerStyle: {backgroundColor: '#0077b6', height: 80},
          headerTitleStyle: {color: 'white'},
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIconStyle: {
            justifyContent: 'center',
            flex: 1,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
          headerStyle: {backgroundColor: '#0077b6', height: 80},
          headerTitleStyle: {color: 'white'},
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIconStyle: {
            justifyContent: 'center',
            flex: 1,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
