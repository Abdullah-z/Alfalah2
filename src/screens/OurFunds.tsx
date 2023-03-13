import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {Block, Button, Image, Text} from '../components';
import ConventionalFunds from '../components/ConventionalFunds';
import IslamicFunds from '../components/IslamicFunds';
import PensionFunds from '../components/PensionFunds';
import SubRedModal from '../components/SubRedModal';
import {useData, useTheme, useTranslation} from '../hooks';

export default function OurFunds() {
  const {t} = useTranslation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );
  return (
    <ScrollView>
      <Block
        row
        flex={0}
        align="center"
        justify="center"
        color={colors.card}
        paddingBottom={sizes.sm}>
        <Button onPress={() => handleProducts(0)}>
          <Block row align="center">
            <Text
              font={fonts?.[tab === 0 ? 'medium' : 'normal']}
              color={tab === 0 ? colors.primary : colors.text}>
              Conventional Funds
            </Text>
          </Block>
        </Button>
        <Block
          gray
          flex={0}
          width={1}
          marginHorizontal={sizes.sm}
          height={sizes.socialIconSize}
        />
        <Button onPress={() => handleProducts(1)}>
          <Block row align="center">
            <Text
              font={fonts?.[tab === 1 ? 'medium' : 'normal']}
              color={tab === 1 ? colors.primary : colors.text}>
              Islamic Funds
            </Text>
          </Block>
        </Button>
        <Block
          gray
          flex={0}
          width={1}
          marginHorizontal={sizes.sm}
          height={sizes.socialIconSize}
        />
        <Button onPress={() => handleProducts(2)}>
          <Block row align="center">
            <Text
              font={fonts?.[tab === 2 ? 'medium' : 'normal']}
              color={tab === 2 ? colors.primary : colors.text}>
              Pension Funds
            </Text>
          </Block>
        </Button>
      </Block>
      <Block marginHorizontal={sizes.sm} marginTop={sizes.sm}>
        {tab === 0 ? (
          <ConventionalFunds />
        ) : tab === 1 ? (
          <IslamicFunds />
        ) : tab === 2 ? (
          <PensionFunds />
        ) : (
          <></>
        )}
      </Block>
    </ScrollView>
  );
}
