import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  Box,
  Center,
  Checkbox,
  CheckIcon,
  Divider,
  FormControl,
  Icon,
  Input,
  Modal,
  Select,
} from 'native-base';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {Ionicons} from '@expo/vector-icons';
import {ScrollView, Touchable, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  Layout,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from 'react-native-reanimated';

export default function SubRed() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();

  const dummyData = [
    {
      ID: 1421,
      NAME: 'DEMO MSCI SAUDI ARABIA SELECT MIN VOL FUND',
      CODE: '156004',
      LAST_NAV: 133.58934723,
      FU01_START_DATE: '16/07/2017',
      TYPE: 'Open-Ended',
      PF06_CURRENCY: 'SAR',
      CURRENCY_SEC: 'الريال السعودي',
      PF132_RISK: 'High Risk',
      LAST_NAV_DATE: '07/01/2021',
    },
    {
      ID: 1424,
      NAME: 'DEMO AL NOOR PROJECT FUND',
      SEC_NAME: 'DEMO AL NOOR PROJECT FUND',
      CODE: '0542-2-06-009',
      LAST_NAV: 91990.07120632,
      FU01_START_DATE: '14/05/2014',
      TYPE: 'Open-Ended',
      PF06_CURRENCY: 'SAR',
      CURRENCY_SEC: 'الريال السعودي',
      PF132_RISK: 'Medium Risk',
      LAST_NAV_DATE: '07/09/2022',
    },
    {
      ID: 1949,
      NAME: 'UAT FUND 6',
      CODE: 'UTF6',
      FU01_START_DATE: '17/09/2020',
      TYPE: 'Open-Ended',
      PF06_CURRENCY: 'SAR',
      CURRENCY_SEC: 'الريال السعودي',
      PF132_RISK: 'High Risk',
    },
    {
      ID: 2077,
      NAME: 'NEW FUND 123',
      CODE: 'n123',
      FU01_START_DATE: '26/05/2021',
      TYPE: 'Open-Ended',
      PF06_CURRENCY: 'SAR',
      CURRENCY_SEC: 'الريال السعودي',
      PF132_RISK: 'N/A',
    },
    {
      ID: 2217,
      NAME: 'COULD BE ANY',
      CODE: '12345',
      FU01_START_DATE: '18/01/2022',
      TYPE: 'Open-Ended',
      PF06_CURRENCY: 'SAR',
      CURRENCY_SEC: 'الريال السعودي',
      PF132_RISK: 'Low Risk',
    },
    {
      ID: 2279,
      NAME: 'QA_funds',
      SEC_NAME: 'QA_funds',
      CODE: '1236',
      FU01_START_DATE: '15/09/2022',
      TYPE: 'Close-Ended',
      PF06_CURRENCY: 'SAR',
      CURRENCY_SEC: 'الريال السعودي',
      PF132_RISK: 'High Risk',
    },
    {
      ID: 2297,
      NAME: 'QA_blom_testing_client',
      SEC_NAME: 'QA_bloom_funds',
      CODE: '11221122',
      LAST_NAV: 10,
      FU01_START_DATE: '01/09/2022',
      TYPE: 'Open-Ended',
      PF06_CURRENCY: 'SAR',
      CURRENCY_SEC: 'الريال السعودي',
      PF132_RISK: 'Low Risk',
      LAST_NAV_DATE: '29/09/2022',
    },
    {
      ID: 2307,
      NAME: 'FUND FOR REAL ESTATE ',
      SEC_NAME: 'RE_FUND',
      CODE: '5559',
      FU01_START_DATE: '01/09/2022',
      TYPE: 'Open-Ended',
      PF06_CURRENCY: 'SAR',
      CURRENCY_SEC: 'الريال السعودي',
      PF132_RISK: 'Low Risk',
    },
    {
      ID: 1420,
      NAME: 'DEMO ARAB MARKETS BALANCED FUND',
      CODE: '156002',
      FU01_START_DATE: '19/06/2013',
      TYPE: 'Open-Ended',
      PF06_CURRENCY: 'USD',
      CURRENCY_SEC: 'الدولار الأمريكي',
      PF132_RISK: 'N/A',
    },
  ];

  return (
    <ScrollView>
      <Block marginHorizontal={sizes.sm}>
        <Text marginVertical={sizes.sm} h5>
          Subscription Request
        </Text>

        {dummyData.map((index, loop) => {
          console.log(loop);
          return (
            <Animated.View
              entering={SlideInLeft}
              exiting={SlideOutRight}
              layout={Layout.springify()}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('DetailsPage')}>
                <Block row card gray marginVertical={sizes.xs}>
                  <Text>{index.NAME}</Text>
                  <Block align="flex-end">
                    <Icon
                      mb="1"
                      as={<Ionicons name={'chevron-forward-outline'} />}
                      size="md"
                    />
                  </Block>
                </Block>
              </TouchableWithoutFeedback>
            </Animated.View>
          );
        })}
        <FormControl>
          <Select
            // selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            // onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
          <Block row>
            <Block>
              <FormControl.Label>Holding Amount</FormControl.Label>
              <Input width={'95%'}></Input>
            </Block>

            <Block>
              <FormControl.Label>Holding Units</FormControl.Label>
              <Input width={'95%'}></Input>
            </Block>
          </Block>

          <Block row>
            <Block>
              <FormControl.Label>Previous NAV</FormControl.Label>
              <Input width={'95%'}></Input>
            </Block>

            <Block>
              <FormControl.Label>Next NAV Date</FormControl.Label>
              <Input width={'95%'}></Input>
            </Block>
          </Block>

          <Block>
            <FormControl.Label>Minimum Initial Subscription</FormControl.Label>
            <Input width={'100%'}></Input>
            <FormControl.Label>
              Minimum Additional Subscription
            </FormControl.Label>
            <Input width={'100%'}></Input>
            <FormControl.Label>Investment Account Number</FormControl.Label>
            <Select></Select>
          </Block>
          <Block row marginVertical={sizes.sm}>
            <Block card marginHorizontal={sizes.xs}>
              <Text center>Currency</Text>
              <Text center bold>
                SAR
              </Text>
            </Block>
            <Block card marginHorizontal={sizes.xs}>
              <Text center>Cash Balance</Text>
              <Text center bold>
                263,525.00
              </Text>
            </Block>
            <Block card marginHorizontal={sizes.xs}>
              <Text center>Buying Power</Text>
              <Text center bold>
                SAR
              </Text>
            </Block>
          </Block>
          <Block>
            <FormControl.Label>Subscription Amount</FormControl.Label>
            <Input width={'100%'}></Input>
          </Block>
          <Block row>
            <Block>
              <FormControl.Label>Subscription Fee</FormControl.Label>
              <Input width={'95%'}></Input>
            </Block>

            <Block>
              <FormControl.Label>VAT</FormControl.Label>
              <Input width={'95%'}></Input>
            </Block>
            <Block>
              <FormControl.Label>Total Amount</FormControl.Label>
              <Input width={'95%'}></Input>
            </Block>
          </Block>
          <Block row marginVertical={sizes.xs}>
            <Text bold size={12}>
              Click Here
            </Text>
            <Text size={12}> to read the Fund's Terms & Conditions</Text>
          </Block>
          <Block row>
            <Checkbox />
            <Text size={12} marginLeft={sizes.xs}>
              I have read and accepted the Fund's Terms & Conditions
            </Text>
          </Block>
          <Block
            marginTop={sizes.sm}
            marginBottom={sizes.md}
            justify="flex-end"
            row>
            <Button
              marginHorizontal={sizes.xs}
              width={'25%'}
              color={colors.primary}>
              <Text white>Subscribe</Text>
            </Button>
            <Button
              marginHorizontal={sizes.xs}
              width={'25%'}
              color={colors.gray}>
              <Text>Reset</Text>
            </Button>
          </Block>
        </FormControl>
      </Block>
    </ScrollView>
  );
}
