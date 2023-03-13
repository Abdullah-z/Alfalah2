import {Platform, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
  Text,
} from 'native-base';
import {useTheme, useTranslation} from '../hooks';
import {useNavigation} from '@react-navigation/core';

const BottomNavigation = (props) => {
  const [selected, setSelected] = React.useState(props.tab);
  const {colors, sizes} = useTheme();
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <NativeBaseProvider>
      <Box
        backgroundColor={colors.primary}
        width="100%"
        alignSelf="center"
        borderTopWidth={0}
        borderTopColor={colors.gray}>
        <HStack
          alignItems="center"
          marginBottom={Platform.OS === 'android' ? 0 : sizes.xs}>
          <Pressable
            py="3"
            flex={1}
            // onPress={() => {
            //   // setSelected(1);
            //   navigation.navigate('Home');
            // }}
            opacity={selected === 1 ? 1 : 0.5}>
            <Center>
              <Icon
                mb="1"
                as={
                  <Ionicons name={selected === 1 ? 'home' : 'home-outline'} />
                }
                color={colors.white}
                size="sm"
              />
              <Text bold color={colors.white} fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            py="2"
            flex={1}
            // onPress={() => {
            //   // setSelected(2);
            //   navigation.navigate('Transaction History');
            // }}
            opacity={selected === 2 ? 1 : 0.5}>
            <Center>
              <Icon
                mb="1"
                as={<Ionicons name="cash" />}
                color={colors.white}
                size="sm"
              />
              <Text bold color={colors.white} fontSize="12">
                Transaction History
              </Text>
            </Center>
          </Pressable>
          <Pressable
            py="2"
            flex={1}
            // onPress={() => {
            //   // setSelected(3);
            //   navigation.navigate('My Investments');
            // }}
            opacity={selected === 3 ? 1 : 0.6}>
            <Center>
              <Icon
                mb="1"
                as={<Ionicons name={'trending-up'} />}
                color={colors.white}
                size="sm"
              />
              <Text bold color={colors.white} fontSize="12">
                My Investments
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default BottomNavigation;
