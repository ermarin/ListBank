import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const btnLeft = (navigation: { goBack: () => void; }):React.JSX.Element => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.btnBack}>{'<'}</Text>
    </TouchableOpacity>
  );
};

function StackNavigation() {

  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator
        screenOptions={({navigation, route}):any => {
          if (['List'].includes(route.name)) {
            return({
              headerShown: true,
              headerLeft: () => btnLeft(navigation),
              headerTitle: 'Listado',
              gestureEnabled: false,
            });
          } else {
            return({headerShown: false});
          }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnBack: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0092FF',
    marginLeft: 10,
  }
})

export default StackNavigation;
