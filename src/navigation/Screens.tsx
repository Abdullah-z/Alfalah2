import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import Signin from '../screens/Signin';
import FundWatch from '../screens/FundWatch';
import SubRed from '../screens/SubRed';
import DetailsPage from '../screens/DetailsPage';
import BottomNav from './BottomNav';
import ReturnCalculator from '../screens/ReturnCalculator';
import TaxCalculator from '../screens/TaxCalculator';
import FundPerformanceList from '../screens/FundPerformanceList';
import AboutUs from '../screens/AboutUs';
import InvestNow from '../screens/InvestNow';
import ReferFriend from '../screens/ReferFriend';
import OTP from '../screens/OTP';
import KYC from '../screens/KYC';
import SideMenu from '../screens/SideMenu';
import KYC2 from '../screens/KYC2';
import FAQ from '../screens/FAQ';
import AccountOpening from '../screens/AccountOpening';
import LoginNav from './LoginNav';
import RiskProfile from '../screens/RiskProfile';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={BottomNav}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        // options={{title: t('navigation.articles')}}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FundWatch"
        component={FundWatch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SubRed"
        component={SubRed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsPage"
        component={DetailsPage}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Return Calculator"
        component={ReturnCalculator}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Tax Calculator"
        component={TaxCalculator}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Fund Performance List"
        component={FundPerformanceList}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="About Us"
        component={AboutUs}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Invest Now"
        component={InvestNow}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Refer a Friend"
        component={ReferFriend}
        options={{headerShown: true}}
      />
      <Stack.Screen name="KYC" component={KYC} options={{headerShown: false}} />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: true}} />
      <Stack.Screen
        name="Side Menu"
        component={SideMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KYC2"
        component={KYC2}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FAQ" component={FAQ} options={{headerShown: true}} />
      <Stack.Screen
        name="Account Opening"
        component={AccountOpening}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginNav"
        component={LoginNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Risk Profile"
        component={RiskProfile}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
