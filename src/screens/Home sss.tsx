import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';
import {ScrollView, View} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import {Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import BottomNav from '../navigation/BottomNav';

const Home = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  return (
    <>
      <ScrollView>
        <Block
          card
          marginHorizontal={sizes.sm}
          marginTop={sizes.sm}
          color={colors.white}>
          <Text center h5 primary>
            Portfolio Investment
          </Text>
          <Block row marginVertical={sizes.sm}>
            <Block card color={colors.gray} marginHorizontal={sizes.xs}>
              <Text center p>
                Cost
              </Text>
              <Text center h5 bold>
                Rs. 84,568
              </Text>
              <Text center p marginTop={sizes.sm}>
                P/L
              </Text>
              <Block justify="center" row align="flex-start">
                <Icon
                  mb="1"
                  as={<Ionicons name={'caret-up'} />}
                  color={'green.700'}
                  size="md"
                />
                <Text p bold color={'#006400'}>
                  3,751.36
                </Text>
              </Block>
            </Block>
            <Block card color={colors.gray} marginHorizontal={sizes.xs}>
              <Text center p>
                Current Value
              </Text>

              <Text center p bold>
                Rs. 94,156
              </Text>
              <Text center p marginTop={sizes.sm}>
                P/L%
              </Text>
              <Block justify="center" row align="flex-start">
                <Icon
                  mb="1"
                  as={<Ionicons name={'caret-up'} />}
                  color={'green.700'}
                  size="md"
                />
                <Text p bold color={'#006400'}>
                  0.78
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          card
          marginHorizontal={sizes.sm}
          marginTop={sizes.sm}
          color={colors.white}>
          <Text center h5 primary>
            Cash and Buying Power Position
          </Text>
          <Block row marginVertical={sizes.sm}>
            <Block card color={colors.gray} marginHorizontal={sizes.xs}>
              <Text center p>
                Cash Balance
              </Text>
              <Text center p bold>
                Rs. 814,568
              </Text>
            </Block>
            <Block card color={colors.gray} marginHorizontal={sizes.xs}>
              <Text center p>
                Buying Power
              </Text>
              <Text center p bold>
                Rs. 943,156
              </Text>
            </Block>
          </Block>
        </Block>
        <Block
          card
          color={colors.white}
          marginTop={sizes.sm}
          marginHorizontal={sizes.sm}>
          <Text marginBottom={sizes.sm} center h5 primary>
            My Portfolio
          </Text>
          <Block gray card marginBottom={sizes.sm}>
            <Text p bold>
              BLOM SAUDI ARABIA FUND
            </Text>
            <Block row marginTop={sizes.sm} marginBottom={sizes.sm}>
              <Text p>Amount Invested:</Text>
              <Text p bold>
                Rs.75,058.00
              </Text>
            </Block>

            <Block row>
              <Block row>
                <Text p>Assets:</Text>
                <Text p bold>
                  36.21%
                </Text>
              </Block>
              <Block row justify="flex-end">
                <Text>Type:</Text>
                <Text bold>Equity</Text>
              </Block>
            </Block>
          </Block>
          <Block gray card marginBottom={sizes.sm}>
            <Text p bold>
              BLOM MSCI Saudi Arabia
            </Text>
            <Block row marginTop={sizes.sm} marginBottom={sizes.sm}>
              <Text p>Amount Invested:</Text>
              <Text p bold>
                Rs.35,584.00
              </Text>
            </Block>

            <Block row>
              <Block row>
                <Text p>Assets:</Text>
                <Text p bold>
                  13.71%
                </Text>
              </Block>
              <Block row justify="flex-end">
                <Text>Type:</Text>
                <Text bold>Equity</Text>
              </Block>
            </Block>
          </Block>
          <Block row marginTop={sizes.xs} marginHorizontal={sizes.xs}>
            <Text p bold>
              Total:
            </Text>
            <Text p bold>
              987,156.36
            </Text>
          </Block>
        </Block>
        <Block
          card
          marginBottom={sizes.sm}
          color={colors.white}
          marginHorizontal={sizes.sm}
          marginTop={sizes.sm}>
          <Text center h5 primary marginBottom={sizes.sm}>
            Last 10 Transactions
          </Text>
          <Block card gray>
            <Text p>BLOM SAUDI ARABIA FUND</Text>
            <Block row marginTop={sizes.xs}>
              <Block col>
                <Block row>
                  <Text h5>Rs.48,203.00</Text>
                </Block>
              </Block>

              <Block row></Block>
            </Block>
            <Block row marginTop={sizes.xs}>
              <Text>Allocated</Text>
              <Block align="flex-end">
                <Text>21-Feb-2022</Text>
              </Block>
            </Block>
          </Block>
          <Block card gray marginVertical={sizes.sm}>
            <Text p>BLOM SAUDI ARABIA FUND</Text>
            <Block row marginTop={sizes.xs}>
              <Block col>
                <Block row>
                  <Text h5>Rs.48,203.00</Text>
                </Block>
              </Block>

              <Block row></Block>
            </Block>
            <Block row marginTop={sizes.xs}>
              <Text>Allocated</Text>
              <Block align="flex-end">
                <Text>21-Feb-2022</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      {/* <View style={{marginTop: 50}}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}>
          <BottomNavigation tab={1} />
        </View>
      </View> */}
    </>
  );
};

export default Home;
