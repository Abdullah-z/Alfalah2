import {View, Text, Alert} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import {Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import {useData, useTheme} from '../hooks';
import {useNavigation} from '@react-navigation/native';
export default function BiometricAuth() {
  const [isSupported, setIsSupported] = useState(false);
  const {isBioAct, setIsBioAct} = useData();
  const [BIOOTP, setBIOOTP] = useState(false);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  let BIO_KEY = 'biokey';
  useEffect(() => {
    async function getData() {
      let BIO = await AsyncStorage.getItem(BIO_KEY);

      setIsBioAct(BIO);
    }
    getData();
  }, []);

  const fallBacktoDefaultAuth = () => {
    console.log('fall to password authentication');
  };

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    if (!isBiometricAvailable)
      return alertComponent(
        'Enter Password',
        'Biometric Not Supported',
        'Ok',
        () => fallBacktoDefaultAuth(),
      );

    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        'Biometric not recorded',
        'Login with password',
        'ok',
        () => fallBacktoDefaultAuth(),
      );

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'LoginBiometrics',
      cancelLabel: 'Cancel',
      disableDeviceFallback: true,
    });

    // console.log('BA ' + JSON.stringify(biometricAuth));

    if (biometricAuth.success) {
      setBIOOTP(true);
      navigation.navigate('Home');
    } else {
      fallBacktoDefaultAuth();
    }
    // console.log({isBiometricAvailable});
    // console.log({supportedBiometrics});
    // console.log({savedBiometrics});
    // console.log({biometricAuth});
  };

  useEffect(() => {
    isBioAct === 'true' ? handleBiometricAuth() : console.log('NAN');
  }, [isSupported]);
  return (
    <View>
      {isBioAct === 'true' ? (
        <View
          style={{
            alignItems: 'center',
            marginBottom: sizes.sm,
          }}>
          <Icon
            as={<Ionicons name={'finger-print-outline'} />}
            color={colors.text}
            size="xl"
            onPress={() => handleBiometricAuth()}
          />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}
