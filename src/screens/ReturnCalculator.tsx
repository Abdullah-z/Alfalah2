import {View} from 'react-native';
import React from 'react';
import {Block, Button, Text} from '../components';
import {
  CheckIcon,
  FormControl,
  Input,
  Select,
  WarningOutlineIcon,
} from 'native-base';
import {useTheme} from '../hooks';
import {ScrollView} from 'react-native-gesture-handler';

export default function ReturnCalculator() {
  const {assets, colors, gradients, sizes} = useTheme();
  return (
    <ScrollView>
      <Block margin={sizes.sm}>
        <FormControl>
          <FormControl.Label>Fund Name</FormControl.Label>
          <Select
            minWidth="200"
            accessibilityLabel="Select a Fund"
            placeholder="Select a Fund"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1">
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <FormControl.Label>Amount</FormControl.Label>
          <Input placeholder="Enter Amount" w="100%" />
          <Block row>
            <Block marginRight={sizes.xs}>
              <FormControl.Label>From</FormControl.Label>
              <Input w={'100%'} placeholder="DD-MM-YYYY" />
            </Block>
            <Block marginLeft={sizes.xs}>
              <FormControl.Label>To</FormControl.Label>
              <Input w={'100%'} placeholder="DD-MM-YYYY" />
            </Block>
          </Block>
        </FormControl>
        <Block align="center">
          <Button width={'80%'} primary marginTop={sizes.md}>
            <Text h5 white>
              Submit
            </Text>
          </Button>
        </Block>

        {/* <Block row marginTop={sizes.sm} style={{borderWidth: 0.5}}>
          <Block>
            <Block>
              <Text
                white
                paddingLeft={sizes.xs}
                style={{backgroundColor: colors.primary, borderWidth: 0.5}}>
                Fund Name
              </Text>
              <Text
                white
                paddingLeft={sizes.xs}
                style={{backgroundColor: colors.primary, borderWidth: 0.5}}>
                Amount of Ivestment
              </Text>
              <Text
                white
                paddingLeft={sizes.xs}
                style={{backgroundColor: colors.primary, borderWidth: 0.5}}>
                Value of Investment
              </Text>
              <Text
                white
                paddingLeft={sizes.xs}
                style={{backgroundColor: colors.primary, borderWidth: 0.5}}>
                Return %
              </Text>
            </Block>
          </Block>
          <Block>
            <Block>
              <Text bold paddingLeft={sizes.xs} style={{borderWidth: 0.5}}>
                Alfalah GHP Islamic Stock Fund
              </Text>
              <Text paddingLeft={sizes.xs} style={{borderWidth: 0.5}}>
                Amount of Ivestment
              </Text>
              <Text paddingLeft={sizes.xs} style={{borderWidth: 0.5}}>
                Value of Investment
              </Text>
              <Text paddingLeft={sizes.xs} style={{borderWidth: 0.5}}>
                Return %
              </Text>
            </Block>
          </Block>
        </Block> */}

        <Block
          marginTop={sizes.sm}
          style={{borderWidth: 0.5, borderColor: '#000'}}>
          <Block row style={{borderBottomWidth: 1, borderBottomColor: '#000'}}>
            <Block primary justify="center">
              <Text paddingVertical={sizes.xs} paddingLeft={sizes.xs} white>
                Fund Name
              </Text>
            </Block>
            <Block>
              <Text
                semibold
                center
                paddingVertical={sizes.xs}
                paddingLeft={sizes.xs}>
                Alfalah GHP Islamic Stock Fund
              </Text>
            </Block>
          </Block>

          <Block row style={{borderBottomWidth: 1, borderBottomColor: '#000'}}>
            <Block primary justify="center">
              <Text paddingVertical={sizes.xs} paddingLeft={sizes.xs} white>
                Amount of Investment
              </Text>
            </Block>
            <Block>
              <Text
                semibold
                center
                paddingVertical={sizes.xs}
                paddingLeft={sizes.xs}>
                12,844.00
              </Text>
            </Block>
          </Block>
          <Block row style={{borderBottomWidth: 1, borderBottomColor: '#000'}}>
            <Block primary justify="center">
              <Text paddingVertical={sizes.xs} paddingLeft={sizes.xs} white>
                Value of Investment
              </Text>
            </Block>
            <Block>
              <Text
                semibold
                center
                paddingVertical={sizes.xs}
                paddingLeft={sizes.xs}>
                11,935.00
              </Text>
            </Block>
          </Block>
          <Block row>
            <Block primary justify="center">
              <Text paddingVertical={sizes.xs} paddingLeft={sizes.xs} white>
                Return %
              </Text>
            </Block>
            <Block>
              <Text
                color={colors.danger}
                semibold
                center
                paddingVertical={sizes.xs}
                paddingLeft={sizes.xs}>
                -9.35%
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
