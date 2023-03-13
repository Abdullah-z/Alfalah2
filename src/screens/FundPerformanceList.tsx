import {View, ScrollView} from 'react-native';
import React from 'react';
import {Block, Text} from '../components';
import {useTheme} from '../hooks';
import {Divider} from 'native-base';

export default function FundPerformanceList() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <ScrollView>
      <Block margin={sizes.sm}>
        <Block>
          <Text bold>
            The list contains top performing fund of each category
          </Text>
        </Block>
        <Block
          marginTop={sizes.sm}
          style={{borderWidth: 1, borderColor: '#5A5A5A'}}>
          <Block row primary justify="center" paddingVertical={sizes.xs}>
            <Block>
              <Text center white>
                Fund Name
              </Text>
            </Block>

            <Divider
              bg={colors.white}
              mx="4"
              thickness="1"
              orientation="vertical"
            />
            <Block>
              <Text center white>
                Category Name
              </Text>
            </Block>

            <Divider
              bg={colors.white}
              mx="4"
              thickness="1"
              orientation="vertical"
            />
            <Block>
              <Text center white>
                Retuen %
              </Text>
            </Block>
          </Block>
          <Block row justify="center" paddingVertical={sizes.xs}>
            <Block justify="center">
              <Text bold primary center>
                Alfalah GHP Income Fund
              </Text>
            </Block>

            <Divider
              bg={colors.black}
              mx="4"
              thickness="1"
              orientation="vertical"
            />
            <Block justify="center">
              <Text center bold>
                Income
              </Text>
            </Block>

            <Divider
              bg={colors.black}
              mx="4"
              thickness="1"
              orientation="vertical"
            />
            <Block justify="center">
              <Text bold center success>
                12.33
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
