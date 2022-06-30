import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Bands from '../screens/Bands';
import BandDetails from '../screens/BandDetails';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="bands">
      <Stack.Screen name="Bandas" component={Bands} />
      <Stack.Screen name="Detalhes" component={BandDetails} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
