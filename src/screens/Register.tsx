import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/native';
import {CheckIcon, FormControl, Input, Select} from 'native-base';

export default function Register() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{marginHorizontal: sizes.sm}}>
        <Block
          paddingTop={Platform.OS === 'android' ? StatusBar.currentHeight : 0}>
          <Block align="center">
            <Image
              resizeMode="contain"
              style={{height: 250, width: 250}}
              source={require('../../assets/alfLogo.png')}
            />
          </Block>
          <Block>
            <Text h5 bold>
              Register Your Account!
            </Text>
            <Text color={'#5A5A5A'}>
              For the purpose of industry regulation, your details are required.
            </Text>
            <FormControl>
              <FormControl.Label isRequired>ID DOCUMENT TYPE</FormControl.Label>
              <Select
                backgroundColor={'white'}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select ID Document Type"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1">
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                CNIC/NICOP
              </FormControl.Label>
              <Input backgroundColor={'white'} placeholder="Enter CNIC/NICOP" />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                FULL NAME (AS PER IDENTITY DOCUMENT)
              </FormControl.Label>
              <Input backgroundColor={'white'} placeholder="Enter Full Name" />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                EMAIL ADDRESS
              </FormControl.Label>
              <Input
                backgroundColor={'white'}
                placeholder="Enter Email Address"
              />
            </FormControl>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              PHONE NUMBER
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select ID Document Type"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>

            <Input
              marginTop={sizes.xs}
              backgroundColor={'white'}
              placeholder="Enter Phone Number"
            />
            <FormControl.Label marginTop={sizes.xs}>
              REFERAL CODE (IF ANY)
            </FormControl.Label>
            <Input
              backgroundColor={'white'}
              placeholder="Enter Email Address"
            />
            <Block align="center">
              <Button
                width={'50%'}
                onPress={() => navigation.navigate('OTP')}
                marginVertical={sizes.sm}
                primary>
                <Text white>CONTINUE</Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </View>
    </ScrollView>
  );
}

// const handleSearch = () => {
//   return coins.filter(
//     (coin) =>
//       coin.name.toLowerCase().includes(search) ||
//       coin.symbol.toLowerCase().includes(search)
//   );
// };

// {handleSearch().map((row) => {
//   return(

//   )
//   )}
