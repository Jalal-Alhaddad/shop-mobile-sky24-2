import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ShopNavigator from './ShopNavigator';
import HelpScreen from '../screens/HelpScreen';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Shop'
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='shopping-cart' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Help'
        component={HelpScreen}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='help' color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

});