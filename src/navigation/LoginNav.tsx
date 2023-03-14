import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '../hooks';
import React from 'react';
import Portfolio from '../screens/Portfolio';
import AccountStatement from '../screens/AccountStatement';
import HomeLogin from '../screens/HomeLogin';
import More from '../screens/More';
import Logout from '../screens/Logout';

const Tab = createBottomTabNavigator();

export default function LoginNav() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: colors.white,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Account Statement" component={AccountStatement} />
      <Tab.Screen name="Home" component={HomeLogin} />
      <Tab.Screen name="More" component={More} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}
