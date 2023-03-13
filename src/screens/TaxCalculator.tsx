import {View, ScrollView} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks';
import {FormControl, Input, Radio} from 'native-base';
import {Block, Button, Text} from '../components';

export default function TaxCalculator() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <ScrollView style={{margin: sizes.sm}}>
      <Block>
        <FormControl>
          <FormControl.Label>Annual Income</FormControl.Label>
          <Input placeholder="Enter Annual Income" />
          <FormControl.Label>Investment Amount</FormControl.Label>
          <Input placeholder="Enter Investment Amount" />
        </FormControl>

        <Radio.Group
          defaultValue="1"
          name="myRadioGroup"
          accessibilityLabel="Pick your favorite number">
          <Block row>
            <Radio value="1" my={2} colorScheme={'red'}>
              Salaried
            </Radio>
            <Radio value="2" my={2} colorScheme={'red'} ml={sizes.xs}>
              Non Salaried
            </Radio>
          </Block>
        </Radio.Group>
      </Block>
      <Block align="center">
        <Button width={'80%'} primary marginTop={sizes.md}>
          <Text h5 white>
            Submit
          </Text>
        </Button>
      </Block>
      <Block primary marginTop={sizes.sm}>
        <Text paddingVertical={sizes.sm} paddingHorizontal={sizes.sm} white>
          Annual Tax Liability is: PKR 6,197.00
        </Text>
        <Text paddingBottom={sizes.sm} paddingHorizontal={sizes.sm} white>
          Max Rebate entitled to you is : PKR 694.36
        </Text>
      </Block>
      <Block>
        <Text paddingVertical={sizes.sm} paddingHorizontal={sizes.sm}>
          For more information please contact to Alfalah Investment at
          111-090-090
        </Text>
      </Block>
    </ScrollView>
  );
}
