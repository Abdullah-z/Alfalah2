import {View, ScrollView} from 'react-native';
import React from 'react';
import {Block, Text} from '../components';
import {useTheme} from '../hooks';
import {Icon, Pressable} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Animated, {SlideInLeft, SlideInRight} from 'react-native-reanimated';

export default function InvestmentTools() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView style={{margin: sizes.sm}}>
      <Pressable onPress={() => navigation.navigate('Return Calculator')}>
        <Animated.View entering={SlideInRight.duration(500)}>
          <Block card row marginBottom={sizes.sm}>
            <Block row align="center">
              <Icon
                mb="1"
                as={<Ionicons name={'calculator-outline'} />}
                size="2xl"
                color={colors.primary}
              />
              <Text marginLeft={sizes.sm} semibold>
                Return Calculator
              </Text>
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
        </Animated.View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Tax Calculator')}>
        <Animated.View entering={SlideInRight.duration(550)}>
          <Block card row marginBottom={sizes.sm}>
            <Block row align="center">
              <Icon
                mb="1"
                as={<Ionicons name={'calculator-outline'} />}
                size="2xl"
                color={colors.primary}
              />
              <Text marginLeft={sizes.sm} semibold>
                Tax Calculator
              </Text>
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
        </Animated.View>
      </Pressable>
      <Animated.View entering={SlideInRight.duration(600)}>
        <Block card row marginBottom={sizes.sm}>
          <Block row align="center">
            <Icon
              mb="1"
              as={<Ionicons name={'document-text-outline'} />}
              size="2xl"
              color={colors.primary}
            />
            <Text marginLeft={sizes.sm} semibold>
              Risk Profile
            </Text>
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
      </Animated.View>
      <Pressable onPress={() => navigation.navigate('FAQ')}>
        <Animated.View entering={SlideInRight.duration(650)}>
          <Block card row marginBottom={sizes.sm}>
            <Block row align="center">
              <Icon
                mb="1"
                as={<Ionicons name={'help-circle-outline'} />}
                size="2xl"
                color={colors.primary}
              />
              <Text marginLeft={sizes.sm} semibold>
                FAQ
              </Text>
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
        </Animated.View>
      </Pressable>
    </ScrollView>
  );
}
