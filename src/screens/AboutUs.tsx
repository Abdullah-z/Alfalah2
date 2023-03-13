import {View, ScrollView, Platform, Linking} from 'react-native';
import React from 'react';
import {Block, Button, Text} from '../components';
import {Divider, Icon, Pressable} from 'native-base';
import {useTheme} from '../hooks';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export default function AboutUs() {
  const navigation = useNavigation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <ScrollView style={{margin: sizes.sm}}>
      <Block row marginVertical={sizes.xs}>
        <Icon
          mr={2}
          mb="1"
          as={<Ionicons name={'business-outline'} />}
          size="xl"
          color={colors.primary}
        />
        <Text semibold>Our Company</Text>
      </Block>
      <Text>
        Alfalah GHP Investment Management Limited (AGIML), was incorporated on
        October 18, 2004 as an unlisted public limited company and is licensed
        by the Securities and Exchange Commission of Pakistan to manage
        open-ended mutual funds and offer investment advisory services. Alfalah
        GHP is also the member of MUFAP.
      </Text>
      <Block marginVertical={sizes.sm} align="center">
        <Divider bg={'#D3D3D3'} mx={'10'} orientation="horizontal" />
      </Block>
      <Block>
        <Text bold h5>
          Contact Us
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
        <Block row marginVertical={sizes.xs}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'location-outline'} />}
            size="xl"
            color={colors.primary}
          />
          <Text semibold>
            Islamic Chamber of Commerce, Industry & Agriculture Building, 2nd
            floor, ST-2/A, Block-9,KDA Scheme 5, Clifton Karachi
          </Text>
        </Block>
        <Block row marginVertical={sizes.xs}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'print-outline'} />}
            size="xl"
            color={colors.primary}
          />
          <Text semibold>(9221) 35306741-44</Text>
        </Block>
        <Block row marginVertical={sizes.xs}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'mail-outline'} />}
            size="xl"
            color={colors.primary}
          />
          <Text semibold>investor.services@alfalahghp.com</Text>
        </Block>

        <Block row marginVertical={sizes.xs}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'logo-facebook'} />}
            size="xl"
            color={colors.primary}
          />
          <Text semibold>Alfalah Investments</Text>
        </Block>
        <Block row marginVertical={sizes.xs}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'logo-instagram'} />}
            size="xl"
            color={colors.primary}
          />
          <Text semibold>Alfalah Investments</Text>
        </Block>
        <Block row marginVertical={sizes.xs}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'logo-linkedin'} />}
            size="xl"
            color={colors.primary}
          />
          <Text semibold>Alfalah Investments</Text>
        </Block>
        <Block row marginVertical={sizes.xs}>
          <Icon
            mr={2}
            mb="1"
            as={<Ionicons name={'logo-twitter'} />}
            size="xl"
            color={colors.primary}
          />
          <Text semibold>Alfalah Investments</Text>
        </Block>
        <Block row center marginBottom={sizes.sm}>
          <Button
            onPress={() => navigation.navigate('Invest Now')}
            marginHorizontal={sizes.sm}
            width={'40%'}
            color={colors.primary}>
            <Text white>Invest Now</Text>
          </Button>
          <Button
            onPress={() => navigation.navigate('Refer a Friend')}
            marginHorizontal={sizes.sm}
            width={'40%'}
            color={colors.white}>
            <Text>Refer a Friend</Text>
          </Button>
        </Block>
      </Block>
    </ScrollView>
  );
}
