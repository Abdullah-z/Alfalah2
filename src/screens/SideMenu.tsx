import {Linking, Platform, View} from 'react-native';
import React from 'react';
import {Divider, Icon, Image, Pressable} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../hooks';
import {Block, Text} from '../components';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function SideMenu() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView style={{margin: sizes.sm}}>
      <Block safe marginTop={sizes.md}>
        <Pressable onPress={() => navigation.navigate('Signin')}>
          <Block row align="center">
            <Icon
              mr={2}
              mb="1"
              as={<Ionicons name={'person-circle-outline'} />}
              size="5xl"
              color={colors.primary}
            />
            <Text bold h5>
              Login or Register
            </Text>
          </Block>
        </Pressable>
        <Block align="center">
          <Divider bg={'#D3D3D3'} mx={'10'} orientation="horizontal" />
        </Block>

        <Block marginVertical={sizes.sm}>
          <Pressable onPress={() => navigation.navigate('About Us')}>
            <Block row marginVertical={sizes.xs}>
              <Icon
                mr={2}
                mb="1"
                as={<Ionicons name={'information-circle-outline'} />}
                size="xl"
                color={colors.primary}
              />
              <Text semibold>About Us</Text>
            </Block>
          </Pressable>
          <Block row marginVertical={sizes.xs}>
            <Icon
              mr={2}
              mb="1"
              as={<Ionicons name={'reader-outline'} />}
              size="xl"
              color={colors.primary}
            />
            <Text semibold>FMR</Text>
          </Block>
        </Block>
        <Block align="center">
          <Divider bg={'#D3D3D3'} mx={'10'} orientation="horizontal" />
        </Block>
        <Block marginVertical={sizes.sm}>
          <Text h5 bold>
            Call Us
          </Text>
          <Pressable
            onPress={() => {
              let number = '';
              if (Platform.OS === 'ios') {
                number = 'telprompt:${021-111-090-090}';
              } else {
                number = 'tel:${021-111-090-090}';
              }
              Linking.openURL(number);
            }}>
            <Block row marginVertical={sizes.xs}>
              <Icon
                mr={2}
                mb="1"
                as={<Ionicons name={'call-outline'} />}
                size="xl"
                color={colors.primary}
              />
              <Text semibold>021-111-090-090</Text>
            </Block>
          </Pressable>
          <Block align="center">
            <Image
              alt="logo"
              resizeMode="contain"
              style={{height: 200, width: 200}}
              source={require('../../assets/alfLogo.png')}
            />
            <Text>© 2023 Alfalah GHP Investment Management Limited.</Text>
            <Text
              bold
              marginTop={sizes.sm}
              style={{
                textDecorationStyle: 'solid',
                textDecorationLine: 'underline',
              }}>
              Terms and Conditions
            </Text>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
