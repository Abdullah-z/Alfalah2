import {
  View,
  ScrollView,
  Image,
  Touchable,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {FormControl, Icon, Input, Pressable} from 'native-base';
import {useTheme} from '../hooks';
import {Block, Button, Text} from '../components';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import Logo from '../components/Logo';

export default function Home() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      <Block style={{marginHorizontal: sizes.sm, marginTop: sizes.md}}>
        <Pressable onPress={() => navigation.navigate('Side Menu')}>
          <Block align="flex-end">
            <Icon
              mb="1"
              as={<Ionicons name={'menu-outline'} />}
              size="4xl"
              color={colors.black}
            />
          </Block>
        </Pressable>
        <Logo />

        <Block>
          <FormControl>
            <FormControl.Label>Login ID</FormControl.Label>
            <Input />
            <Text bold align="right">
              Forget Username?
            </Text>
            <FormControl.Label>Password</FormControl.Label>
            <Input />
            <Text bold align="right">
              Forget Password?
            </Text>
            <Button
              primary
              marginTop={sizes.sm}
              onPress={() => navigation.navigate('LoginNav')}>
              <Text white>Login</Text>
            </Button>
          </FormControl>
          <Text marginTop={sizes.xs}>Haven't registered yet?</Text>
          <Block row marginVertical={sizes.sm} center>
            <Button
              onPress={() => navigation.navigate('Register')}
              marginHorizontal={sizes.xs}
              white
              width={'50%'}
              style={{borderWidth: 1, borderColor: colors.primary}}>
              <Text primary bold>
                Register Now
              </Text>
            </Button>
            <Button
              onPress={() => navigation.navigate('Account Opening')}
              white
              width={'50%'}
              marginHorizontal={sizes.xs}
              style={{borderWidth: 1, borderColor: colors.primary}}>
              <Text primary bold>
                Account Opening
              </Text>
            </Button>
          </Block>
          <Block row>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Return Calculator')}>
              <Block marginHorizontal={sizes.sm}>
                <Block justify="center" align="center" card primary>
                  <Icon
                    mb="1"
                    as={<Ionicons name={'calculator-outline'} />}
                    size="3xl"
                    color={colors.white}
                  />
                </Block>
              </Block>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Tax Calculator')}>
              <Block marginHorizontal={sizes.sm}>
                <Block justify="center" align="center" card primary>
                  <Icon
                    mb="1"
                    as={<Ionicons name={'calculator-outline'} />}
                    size="3xl"
                    color={colors.white}
                  />
                </Block>
              </Block>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Risk Profile')}>
              <Block marginHorizontal={sizes.sm}>
                <Block justify="center" align="center" card primary>
                  <Icon
                    mb="1"
                    as={<Ionicons name={'document-text-outline'} />}
                    size="3xl"
                    color={colors.white}
                  />
                </Block>
              </Block>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('FAQ')}>
              <Block marginHorizontal={sizes.sm}>
                <Block justify="center" align="center" card primary>
                  <Icon
                    mb="1"
                    as={<Ionicons name={'help-circle-outline'} />}
                    size="3xl"
                    color={colors.white}
                  />
                </Block>
              </Block>
            </TouchableWithoutFeedback>
          </Block>
          <Block row>
            <Block marginHorizontal={sizes.xs}>
              <Text size={10} center>
                Return Calculator
              </Text>
            </Block>
            <Block marginHorizontal={sizes.xs}>
              <Text size={10} center>
                Tax Calculator
              </Text>
            </Block>

            <Block marginHorizontal={sizes.xs}>
              <Text size={10} center>
                Risk Profile
              </Text>
            </Block>
            <Block marginHorizontal={sizes.xs}>
              <Text size={10} center>
                FAQ
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
