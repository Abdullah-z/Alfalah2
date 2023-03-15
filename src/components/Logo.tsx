import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks';
import {Image} from 'native-base';
import Block from './Block';
// import Image from './Image';

export default function Logo() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block align="flex-start">
      <Image
        alt="logo"
        resizeMode="contain"
        source={require('../../assets/alfLogo.png')}
        style={{width: 200, height: 100}}
      />
    </Block>
  );
}
