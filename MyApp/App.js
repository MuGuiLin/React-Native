/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home';
import Rund from './src/screens/Rund';
import Find from './src/screens/Find';
import Mine from './src/screens/Mine';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case '首页':
              iconName = focused ? 'ios-list-box' : 'ios-information-circle-outline';
              break;

            case '附近':
              iconName = focused ? 'ios-list-box' : 'ios-information-circle-outline';
              break;

            case '发现':
              iconName = focused ? 'ios-list-box' : 'ios-list';
              break;

            case '我的':
              iconName = focused ? 'ios-list-box' : 'ios-information-circle-outline';
              break;

            default:
              iconName = 'ios-list-box'
              break;
          };

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: '#0070F2',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="首页" component={Home} />
        <Tab.Screen name="附近" component={Rund} />
        <Tab.Screen name="发现" component={Find} />
        <Tab.Screen name="我的" component={Mine} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;