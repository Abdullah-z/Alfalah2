import {View, StyleSheet} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useTheme} from '../hooks';
import {ScrollView} from 'react-native';
import {Block, Button, Text} from '../components';
import {useState} from 'react';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function OTP() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [timerCount, setTimer] = useState(120);

  const navigation = useNavigation();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        if (lastTimerCount == 0) {
          //your redirection to Quit screen
        } else {
          lastTimerCount <= 1 && clearInterval(interval);
          return lastTimerCount - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={{margin: sizes.sm}}>
      <Block card>
        <Text center bold h4>
          Verify OTP
        </Text>
        <Text center>
          Please verify the OTP sent to your mobile number and email address
        </Text>
        <Block justify="center">
          <OTPInputView
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </Block>
        <Block align="center">
          <Button
            onPress={() => navigation.navigate('KYC')}
            width={'50%'}
            marginTop={sizes.sm}
            primary>
            <Text white>Submit</Text>
          </Button>

          {timerCount === 0 ? (
            <Text>Resend</Text>
          ) : (
            <Text>Resend Code in {timerCount} seconds</Text>
          )}
        </Block>
      </Block>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#000',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#000',
    color: '#000',
  },

  underlineStyleHighLighted: {
    borderColor: '#000',
  },
});
