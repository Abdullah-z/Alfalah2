import {View, ScrollView} from 'react-native';
import React from 'react';
import {Block, Text} from '../components';
import {Divider, Icon, Input} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../hooks';
import Animated, {SlideInLeft, SlideInRight} from 'react-native-reanimated';

export default function Nav() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <ScrollView>
      <Block margin={sizes.sm}>
        <Input
          InputRightElement={
            <Icon
              as={<Ionicons name={'search'} />}
              size={5}
              mr="2"
              color="muted.400"
            />
          }
          placeholder="Search"
        />
        <Block row align="center">
          <Icon
            my={sizes.xs}
            as={<Ionicons name={'time-outline'} />}
            size={5}
            color={colors.primary}
          />
          <Text semibold marginLeft={sizes.xs}>
            Start Date: 26 Feb 2022
          </Text>
        </Block>
        <Block>
          <Animated.View entering={SlideInRight.delay(50)}>
            <Block card marginVertical={sizes.xs}>
              <Block row>
                <Block>
                  <Text semibold>Alfalah GHP Alpha Fund</Text>
                </Block>
                <Block align="flex-end">
                  <Text size={12} color={'#5A5A5A'}>
                    26 Feb 2022
                  </Text>
                </Block>
              </Block>
              <Block row marginTop={sizes.sm}>
                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Nav Per Unit
                  </Text>
                  <Text center bold>
                    52.67
                  </Text>
                </Block>

                <Divider
                  bg={colors.primary}
                  mx="2"
                  thickness="2"
                  orientation="vertical"
                />

                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Offer Price
                  </Text>
                  <Text center bold>
                    47.96
                  </Text>
                </Block>

                <Divider
                  bg={colors.primary}
                  thickness="2"
                  mx="2"
                  orientation="vertical"
                />

                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Redemption Price
                  </Text>
                  <Text center bold>
                    49.96
                  </Text>
                </Block>
              </Block>
            </Block>
          </Animated.View>
          <Animated.View entering={SlideInRight.delay(100)}>
            <Block card marginVertical={sizes.xs}>
              <Block row>
                <Block>
                  <Text semibold>Alfalah GHP Value Fund</Text>
                </Block>
                <Block align="flex-end">
                  <Text size={12} color={'#5A5A5A'}>
                    26 Feb 2022
                  </Text>
                </Block>
              </Block>
              <Block row marginTop={sizes.sm}>
                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Nav Per Unit
                  </Text>
                  <Text center bold>
                    52.67
                  </Text>
                </Block>

                <Divider
                  bg={colors.primary}
                  mx="2"
                  thickness="2"
                  orientation="vertical"
                />

                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Offer Price
                  </Text>
                  <Text center bold>
                    47.96
                  </Text>
                </Block>

                <Divider
                  bg={colors.primary}
                  thickness="2"
                  mx="2"
                  orientation="vertical"
                />

                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Redemption Price
                  </Text>
                  <Text center bold>
                    49.96
                  </Text>
                </Block>
              </Block>
            </Block>
          </Animated.View>
          <Animated.View entering={SlideInRight.delay(150)}>
            <Block card marginVertical={sizes.xs}>
              <Block row>
                <Block>
                  <Text semibold>Alfalah GHP Islamic Stock Fund</Text>
                </Block>
                <Block align="flex-end">
                  <Text size={12} color={'#5A5A5A'}>
                    26 Feb 2022
                  </Text>
                </Block>
              </Block>
              <Block row marginTop={sizes.sm}>
                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Nav Per Unit
                  </Text>
                  <Text center bold>
                    52.67
                  </Text>
                </Block>

                <Divider
                  bg={colors.primary}
                  mx="2"
                  thickness="2"
                  orientation="vertical"
                />

                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Offer Price
                  </Text>
                  <Text center bold>
                    47.96
                  </Text>
                </Block>

                <Divider
                  bg={colors.primary}
                  thickness="2"
                  mx="2"
                  orientation="vertical"
                />

                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Redemption Price
                  </Text>
                  <Text center bold>
                    49.96
                  </Text>
                </Block>
              </Block>
            </Block>
          </Animated.View>
          <Animated.View entering={SlideInRight.delay(200)}>
            <Block card marginVertical={sizes.xs}>
              <Block row>
                <Block>
                  <Text semibold>Alfalah GHP Income Multiplier Fund</Text>
                </Block>
                <Block align="flex-end">
                  <Text size={12} color={'#5A5A5A'}>
                    26 Feb 2022
                  </Text>
                </Block>
              </Block>
              <Block row marginTop={sizes.sm}>
                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Nav Per Unit
                  </Text>
                  <Text center bold>
                    52.67
                  </Text>
                </Block>

                <Divider
                  bg={colors.primary}
                  mx="2"
                  thickness="2"
                  orientation="vertical"
                />

                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Offer Price
                  </Text>
                  <Text center bold>
                    47.96
                  </Text>
                </Block>

                <Divider
                  bg={colors.primary}
                  thickness="2"
                  mx="2"
                  orientation="vertical"
                />

                <Block>
                  <Text center size={12} color={'#5A5A5A'}>
                    Redemption Price
                  </Text>
                  <Text center bold>
                    49.96
                  </Text>
                </Block>
              </Block>
            </Block>
          </Animated.View>
        </Block>
      </Block>
    </ScrollView>
  );
}
