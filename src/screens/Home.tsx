import {View, ScrollView, Image, Touchable} from 'react-native';
import React from 'react';
import {FormControl, Icon, Input, Pressable} from 'native-base';
import {useTheme} from '../hooks';
import {Block, Button, Text} from '../components';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      <Block safe style={{marginHorizontal: sizes.sm, marginTop: sizes.md}}>
        <Pressable onPress={() => navigation.navigate('Side Menu')}>
          <Block align="flex-end">
            <Icon
              mb="1"
              as={<Ionicons name={'menu-outline'} />}
              size="2xl"
              color={colors.black}
            />
          </Block>
        </Pressable>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            source={require('../../assets/alfLogo.png')}
            style={{height: 150}}
            marginVertical={sizes.sm}
          />
        </View>

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
            <Button primary marginTop={sizes.sm}>
              <Text white>Login</Text>
            </Button>
          </FormControl>
          <Text marginTop={sizes.xs}>Haven't registered yet?</Text>
          <Block row marginVertical={sizes.sm} center>
            <Button
              marginHorizontal={sizes.xs}
              white
              width={'45%'}
              style={{borderWidth: 2, borderColor: colors.primary}}>
              <Text primary bold>
                Register Now
              </Text>
            </Button>
            <Button
              white
              width={'45%'}
              marginHorizontal={sizes.xs}
              style={{borderWidth: 2, borderColor: colors.primary}}>
              <Text primary bold>
                Account Opening
              </Text>
            </Button>
          </Block>
          <Block row>
            <Block marginHorizontal={sizes.s}>
              <Block justify="center" align="center" card primary>
                <Icon
                  onPress={() => navigation.navigate('Side Menu')}
                  mb="1"
                  as={<Ionicons name={'calculator-outline'} />}
                  size="3xl"
                  color={colors.white}
                />
              </Block>
            </Block>
            <Block marginHorizontal={sizes.s}>
              <Block justify="center" align="center" card primary>
                <Icon
                  onPress={() => navigation.navigate('Side Menu')}
                  mb="1"
                  as={<Ionicons name={'calculator-outline'} />}
                  size="3xl"
                  color={colors.white}
                />
              </Block>
            </Block>
            <Block marginHorizontal={sizes.s}>
              <Block justify="center" align="center" card primary>
                <Icon
                  onPress={() => navigation.navigate('Side Menu')}
                  mb="1"
                  as={<Ionicons name={'document-text-outline'} />}
                  size="3xl"
                  color={colors.white}
                />
              </Block>
            </Block>
            <Block marginHorizontal={sizes.s}>
              <Block justify="center" align="center" card primary>
                <Icon
                  onPress={() => navigation.navigate('Side Menu')}
                  mb="1"
                  as={<Ionicons name={'help-circle-outline'} />}
                  size="3xl"
                  color={colors.white}
                />
              </Block>
            </Block>
          </Block>
          <Block row>
            <Block marginHorizontal={sizes.xs}>
              <Text size={12} center>
                Return Calculator
              </Text>
            </Block>
            <Block marginHorizontal={sizes.xs}>
              <Text size={12} center>
                Tax Calculator
              </Text>
            </Block>

            <Block marginHorizontal={sizes.xs}>
              <Text size={12} center>
                Risk Profile
              </Text>
            </Block>
            <Block marginHorizontal={sizes.xs}>
              <Text size={12} center>
                FAQ
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
