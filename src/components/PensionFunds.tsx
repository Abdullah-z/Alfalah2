import {View} from 'react-native';
import React from 'react';
import Block from './Block';
import {Icon, Image} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../hooks';
import Text from './Text';

export default function PensionFunds() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block>
      <Block card row marginBottom={sizes.sm}>
        <Block row align="center">
          <Image
            marginRight={sizes.xs}
            width={10}
            height={10}
            source={require('../../assets/standard.png')}
          />
          <Text semibold>Alfalah GHP Pension Fund</Text>
        </Block>
        <Block align="flex-end" justify="center">
          <Icon
            mb="1"
            as={<Ionicons name={'chevron-forward-outline'} />}
            size="lg"
            color={colors.primary}
          />
        </Block>
      </Block>
      <Block card row marginBottom={sizes.sm}>
        <Block row align="center">
          <Image
            marginRight={sizes.xs}
            width={10}
            height={10}
            source={require('../../assets/islamic.png')}
          />
          <Text semibold>Alfalah GHP Islamic Pension Fund</Text>
        </Block>
        <Block align="flex-end" justify="center">
          <Icon
            mb="1"
            as={<Ionicons name={'chevron-forward-outline'} />}
            size="lg"
            color={colors.primary}
          />
        </Block>
      </Block>
    </Block>
  );
}
