import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import FundPerformance from '../screens/FundPerformance';
import InvestmentTools from '../screens/InvestmentTools';
import Nav from '../screens/Nav';
import OurFunds from '../screens/OurFunds';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../hooks';
import {Icon, View} from 'native-base';

import React from 'react';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Our Funds"
        component={OurFunds}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                borderWidth: focused ? 20 : 0,
                borderColor: 'white',
                borderRadius: 100,
                backgroundColor: focused ? 'white' : colors.primary,
                marginBottom: focused ? sizes.md : 0,
              }}>
              <Icon
                as={Ionicons}
                name={'cash-outline'}
                size="7"
                color={focused ? colors.primary : 'white'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Investment Tools"
        component={InvestmentTools}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                borderWidth: focused ? 20 : 0,
                borderColor: 'white',
                borderRadius: 100,
                backgroundColor: focused ? 'white' : colors.primary,
                marginBottom: focused ? sizes.md : 0,
              }}>
              <Icon
                as={Ionicons}
                name={'construct-outline'}
                size="7"
                color={focused ? colors.primary : 'white'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                borderWidth: focused ? 20 : 0,
                borderColor: 'white',
                borderRadius: 100,
                backgroundColor: focused ? 'white' : colors.primary,
                marginBottom: focused ? sizes.md : 0,
              }}>
              <Icon
                as={Ionicons}
                name={'home-outline'}
                size="7"
                color={focused ? colors.primary : 'white'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NAV"
        component={Nav}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                borderWidth: focused ? 20 : 0,
                borderColor: 'white',
                borderRadius: 100,
                backgroundColor: focused ? 'white' : colors.primary,
                marginBottom: focused ? sizes.md : 0,
              }}>
              <Icon
                as={Ionicons}
                name={'pie-chart-outline'}
                size="7"
                color={focused ? colors.primary : 'white'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Fund Performance"
        component={FundPerformance}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                borderWidth: focused ? 20 : 0,
                borderColor: 'white',
                borderRadius: 100,
                backgroundColor: focused ? 'white' : colors.primary,
                marginBottom: focused ? sizes.md : 0,
              }}>
              <Icon
                as={Ionicons}
                name={'bar-chart-outline'}
                size="7"
                color={focused ? colors.primary : 'white'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
