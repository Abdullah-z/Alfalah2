import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks';
import {Image} from 'native-base';
import Block from './Block';

export default function Logo() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block align="">
      <Image
        alt="logo"
        resizeMode="contain"
        source={require('../../assets/alfLogo.png')}
        style={{height: 150}}
      />
    </Block>
  );
}
