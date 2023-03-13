import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks';

export default function KYC2() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <View>
      <Text>KYC2</Text>
    </View>
  );
}
