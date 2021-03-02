import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import store from './store/Store';
import { Provider } from 'react-redux';

import RecipeScreen from './screens/RecipeScreen';
import PantryScreen from './screens/PantryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
            activeTintColor: "white",
            inactiveTintColor: "gray",
            activeBackgroundColor: "tomato",
          }}>
          <Tab.Screen name="Recipes" component={RecipeScreen} options={{
            tabBarIcon: (props) => <Ionicons name="ios-clipboard-outline" size={props.size} color={props.color}/>
          }}/>
          <Tab.Screen name="Pantry" component={PantryScreen} options={{
            tabBarIcon: (props) => <Ionicons name="ios-nutrition-outline" size={props.size} color={props.color}/>
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
