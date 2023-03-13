import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Switch} from '../components';
import {useData, useTheme} from '../hooks';

export default function Settings() {
  let BIO_KEY = 'biokey';
  const {isBioAct, setIsBioAct} = useData();
  const [isSupported, setIsSupported] = useState(false);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  console.log('supported' + isSupported);
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsSupported(compatible);
    })();
  });

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

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(BIO_KEY, isBioAct);

      console.log('Data successfully saved');
    } catch (e) {
      console.log('Failed to save the data to the storage');
    }
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
      promptMessage: 'SetupBiometrics',
      cancelLabel: 'Cancel',
      disableDeviceFallback: true,
    });

    const TwoButtonAlert = () => (
      Alert.alert('Success', 'BiometricActivated', [
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
        },
      ]),
      setIsBioAct('true')
    );

    console.log('BA ' + JSON.stringify(biometricAuth));

    if (biometricAuth.success) {
      TwoButtonAlert();
    } else {
      fallBacktoDefaultAuth();
    }
    console.log({isBiometricAvailable});
    console.log({supportedBiometrics});
    console.log({savedBiometrics});
    console.log({biometricAuth});
  };

  useEffect(() => {
    saveData();
  }, [isBioAct]);

  return (
    <View>
      <Switch
        marginHorizontal={20}
        marginBottom={sizes.sm}
        checked={isBioAct === 'true' ? true : false}
        onPress={() =>
          isBioAct === 'false' ? handleBiometricAuth() : setIsBioAct('false')
        }
      />
    </View>
  );
}
