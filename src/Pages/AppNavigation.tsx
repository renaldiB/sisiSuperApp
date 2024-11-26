import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './LoginPage';
import BottomTabNavigation from './BottomTabNavigation';
import IzinKerja from './IzinKerja';
import ProsesIzinKerja from './ProsesIzinKerja';
import AccIzinKerja from './AccIzinKerja';
import SelfiePage from './SelfiePage';

const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homepage"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Perizinan Kerja"
          component={IzinKerja}
          options={{
            headerStyle: {backgroundColor: '#0077b6', height: 80},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Proses Perizinan Kerja"
          component={ProsesIzinKerja}
          options={{
            headerStyle: {backgroundColor: '#0077b6', height: 80},
            headerTintColor: 'white',
            headerTitle: 'Perizinan Kerja',
          }}
        />
        <Stack.Screen
          name="Acc Perizinan Kerja"
          component={AccIzinKerja}
          options={{
            headerStyle: {backgroundColor: '#0077b6', height: 80},
            headerTintColor: 'white',
            headerTitle: 'Perizinan Kerja',
          }}
        />
        <Stack.Screen
          name="Selfie Page"
          component={SelfiePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
