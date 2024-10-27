import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Search from './screens/Search';
import Details from './screens/Details';
import RecipeByCategory from './screens/RecipeByCategory';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="RecipeByCategory" component={RecipeByCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
