import {View, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../components/Logo';
import {Block, Text} from '../components';
import {useTheme} from '../hooks';

export default function AccountOpening() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <ScrollView>
      <Block safe marginTop={sizes.md} marginHorizontal={sizes.sm}>
        <Logo />
        <Block marginTop={sizes.sm}>
          <Block card marginVertical={sizes.xs}>
            <Text primary h5>
              Sahulat Sarmayakari Account
            </Text>
            <Text>
              Open a basic investment account digitally with access to all
              funds. Single investment transaction amount cannot exceed
              Rs.400,000/- and maximum Annual investment Limit is Rs.800,000/-.
              The cumulative investment amount limit at any point in time is
              Rs.1,000,000/-.
            </Text>
          </Block>
          <Block card marginVertical={sizes.xs}>
            <Text primary h5>
              Digital Account Opening
            </Text>
            <Text>
              Open a full fledge investment account digitally with access to all
              funds, and no limit on investment amount at any point. Documents
              would be required to upload during the process.
            </Text>
          </Block>
          <Block card marginVertical={sizes.xs}>
            <Text primary h5>
              Roshan Digital Account
            </Text>
            <Text>
              Online account opening facility exclusively for overseas
              Pakistanis & for resident Pakistanis with declared assets abroad.
            </Text>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
