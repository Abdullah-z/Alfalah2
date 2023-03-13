import {useNavigation} from '@react-navigation/native';
import {Divider, FormControl, Icon, Input} from 'native-base';
import React, {useCallback, useState} from 'react';
import {Image, SafeAreaView, View, ScrollView} from 'react-native';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {Ionicons} from '@expo/vector-icons';
import BiometricAuth from '../components/BiometricAuth';

export default function Signin() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (
    <Block safe marginTop={sizes.md}>
      <ScrollView>
        <Block align="center" marginBottom={sizes.sm}>
          <Image
            resizeMode="contain"
            style={{height: 250, width: 250}}
            source={require('../../assets/alfLogo.png')}
          />
        </Block>
        <Block margin={sizes.sm}>
          <FormControl w="100%">
            <FormControl.Label>User Name</FormControl.Label>
            <Input variant="outline" placeholder="User Name" />
            <FormControl.Label>Password</FormControl.Label>
            <Input
              variant="outline"
              type={show ? 'text' : 'password'}
              w="100%"
              py="0"
              InputRightElement={
                <Button w="1/6" h="full" onPress={handleClick}>
                  <Icon
                    mb="1"
                    as={
                      <Ionicons
                        name={show ? 'eye-outline' : 'eye-off-outline'}
                      />
                    }
                    color={colors.primary}
                    size="md"
                  />
                </Button>
              }
              placeholder="Password"
            />
          </FormControl>
          <Block align="flex-end">
            <Text marginVertical={sizes.sm} primary>
              Forget Credentials?
            </Text>
          </Block>
          <BiometricAuth />
          <Block>
            <Button
              radius={30}
              color={colors.primary}
              flex={1}
              onPress={() => navigation.navigate('Home')}
              marginBottom={sizes.base}>
              <Text h5 white bold>
                Login
              </Text>
            </Button>
            <Block row align="center" justify="center">
              <Divider
                mx={2}
                width={'150'}
                bg="gray.300"
                thickness="1"
                orientation="horizontal"
              />
              <Text h5 center marginVertical={sizes.sm}>
                Or
              </Text>
              <Divider
                mx={2}
                width={'150'}
                bg="gray.300"
                thickness="1"
                orientation="horizontal"
              />
            </Block>

            <Button
              radius={30}
              color={'#000'}
              flex={1}
              onPress={() => navigation.navigate('Register')}
              marginBottom={sizes.base}>
              <Text h5 white bold>
                Register Now
              </Text>
            </Button>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
