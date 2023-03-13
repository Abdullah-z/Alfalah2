import {View, ScrollView} from 'react-native';
import React from 'react';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {
  CheckIcon,
  FormControl,
  Input,
  Select,
  WarningOutlineIcon,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default function FundPerformance() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Block margin={sizes.sm}>
        <Block>
          <FormControl>
            <FormControl.Label>Category</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
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

            <FormControl.Label>Period</FormControl.Label>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
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
          </FormControl>
        </Block>
        <Block align="center">
          <Button
            onPress={() => navigation.navigate('Fund Performance List')}
            width={'80%'}
            primary
            marginTop={sizes.md}>
            <Text h5 white>
              Submit
            </Text>
          </Button>
        </Block>
      </Block>
    </ScrollView>
  );
}
