import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Text, Card, Block, Button} from '../components';
import {useTheme} from '../hooks';
import {useState} from 'react';
import {
  Checkbox,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  Select,
  Radio,
} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function KYC() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);

  const [isLifetimeExpiry, setIsLifetimeExpiry] = useState(false);
  const [zakat, setZakat] = useState(false);
  const [isOtherNationalities, setIsOtherNationalities] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  console.log('Life :  ' + isLifetimeExpiry);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <ScrollView>
      <View style={{margin: sizes.sm}}>
        <Text h5 bold>
          Online Account Opening Application
        </Text>
        {step === 1 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Upload Identity Documents
            </Text>
            <FormControl marginTop={sizes.xs}>
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
                DOCUMENT SCAN COPY
              </FormControl.Label>
              <Button onPress={pickImage}>
                <Text primary>Upload Image</Text>
              </Button>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                ID DOCUMENT BACK SCAN COPY
              </FormControl.Label>
              <Button onPress={pickImage} marginBottom={sizes.xs}>
                <Text primary>Upload Image</Text>
              </Button>
            </FormControl>
            <Button
              marginTop={sizes.sm}
              primary
              onPress={() => setStep(2)}
              marginBottom={sizes.xs}>
              <Text white>Continue</Text>
            </Button>
          </Block>
        ) : step === 2 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Basic Details
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label isRequired>FULL NAME</FormControl.Label>
              <Input />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                FATHER'S/HUSBAND'S NAME
              </FormControl.Label>
              <Input />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                MOTHER'S NAME
              </FormControl.Label>
              <Input />
            </FormControl>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              ID DOCUMENT TYPE
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
            <FormControl.Label marginTop={sizes.xs} isRequired>
              ID DOCUMENT NUMBER
            </FormControl.Label>
            <Input />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ISSUANCE DATE
            </FormControl.Label>
            <View>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={showDatePicker}>
                <Text primary>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <FormControl.Label marginTop={sizes.xs}>
              LIFETIME EXPIRY
            </FormControl.Label>
            <Checkbox onChange={setIsLifetimeExpiry}>Yes</Checkbox>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              EXPIRY DATE
            </FormControl.Label>
            <View>
              <Button
                isDisabled={isLifetimeExpiry}
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={showDatePicker}>
                <Text primary>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DATE OF BIRTH
            </FormControl.Label>
            <View>
              <Button
                isDisabled={isLifetimeExpiry}
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={showDatePicker}>
                <Text primary>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              PLACE OF BIRTH
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Place of Birth"
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
              GENDER
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Gender"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="ux" />
              <Select.Item label="Female" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              RELIGION
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Religion"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Muslim" value="ux" />
              <Select.Item label="Non-Muslim" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ZAKAT DEDUCTION
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="one" onChange={setZakat} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: 25}} value="two" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 3 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Residential Details
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              RESIDENTIAL STATUS:
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Residential Status"
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
              PERMANENT RESIDENT IN PAKISTAN:
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="one" onChange={setZakat} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: 25}} value="two" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              NATIONALITY
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Nationality"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="ux" />
              <Select.Item label="Female" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              COUNTRY OF RESIDENCE
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Nationality"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="ux" />
              <Select.Item label="Female" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE OTHER RESIDENCE?
            </FormControl.Label>
            <Radio.Group
              onChange={(value) => {
                setIsOtherNationalities(value);
              }}
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              isDefault="false">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: 25}} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              SPECIFY OTHER NATIONALITIES (IF APPLICABLE)?
            </FormControl.Label>
            <Input
              placeholder="Enter Nationalities"
              isDisabled={isOtherNationalities == 'false' ? true : false}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HOLD US PERMANENT RESIDENT CARD (GREEN CARD)?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: 25}} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ARE YOU A US RESIDENT?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: 25}} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ARE YOU TAX RESIDENT OF PAKISTAN AND/OR USA?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: 25}} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 4 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Contact Details
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ADDRESS
            </FormControl.Label>
            <Input placeholder="Enter Address" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CORRESPONDENCE ADDRESS
            </FormControl.Label>
            <Input placeholder="Enter Correspondence Address" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CITY
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select City"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="ux" />
              <Select.Item label="Female" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              STATE
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Select State"
              placeholder="Select State"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="ux" />
              <Select.Item label="Female" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ZIP CODE / POSTAL CODE
            </FormControl.Label>
            <Input placeholder="Enter Zip Code/ Postal Code" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TEL NO. (RES)
            </FormControl.Label>
            <Input placeholder="Enter Tel No.(Res)" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TEL NO. (OFF)
            </FormControl.Label>
            <Input placeholder="Enter Tel No.(OFF)" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              FAX
            </FormControl.Label>
            <Input placeholder="Enter Fax" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              PHONE NUMBER
            </FormControl.Label>
            <HStack>
              <Select
                height={sizes.x}
                backgroundColor={'white'}
                minWidth="120"
                accessibilityLabel="Select State"
                placeholder="Select State"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size={5} />,
                }}
                mt="1">
                <Select.Item label="Male" value="ux" />
                <Select.Item label="Female" value="web" />
              </Select>
              <Input
                marginTop={sizes.xs}
                height={sizes.x}
                minWidth="120"
                placeholder="Enter Phone Number"
              />
            </HStack>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              WHATSAPP NO.
            </FormControl.Label>
            <Input placeholder="Enter Whatsapp No" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              EMAIL
            </FormControl.Label>
            <Input placeholder="Enter Email Address" />

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 5 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Tax Details
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              TAX STATUS:
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Filer
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="false" my={1}>
                  Non-Filer
                </Radio>
              </HStack>
            </Radio.Group>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              NATIONAL TAX NO. (NTN)
            </FormControl.Label>
            <Input placeholder="Enter NTN" />
            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 6 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Bank Details
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              IBAN
            </FormControl.Label>
            <Input placeholder="Enter Account Number/IBAN" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BANK ACCOUNT TITLE
            </FormControl.Label>
            <Input placeholder="Enter Account Number Title" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BANK NAME
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="120"
              accessibilityLabel="Select State"
              placeholder="Select Bank Name"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="ux" />
              <Select.Item label="Female" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BRANCH
            </FormControl.Label>
            <Input placeholder="Enter Branch" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BRANCH CODE
            </FormControl.Label>
            <Input placeholder="Enter Branch Code" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ADDRESS
            </FormControl.Label>
            <Input placeholder="Enter Address" />

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 7 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Nominee Details (Optional)
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              NAME (MR./MS./MRS.)
            </FormControl.Label>
            <Input placeholder="Enter Name(MR./MS./MRS.)" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              RELATIONSHIP WITH INVESTOR
            </FormControl.Label>
            <Input placeholder="Enter Relationship With Investor" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CNIC/NICOP NO.
            </FormControl.Label>
            <Input placeholder="Enter CNIC/NICOP NO" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ISSUANCE DATE
            </FormControl.Label>
            <View>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={showDatePicker}>
                <Text primary>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              EXPIRY DATE
            </FormControl.Label>
            <View>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={showDatePicker}>
                <Text primary>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ALLOCATION %
            </FormControl.Label>
            <Input value="100" isDisabled />

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 8 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Account Management Instructions
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              INSTRUCTION TO OPERATE ACCOUNT
            </FormControl.Label>
            <Select
              isDisabled
              backgroundColor={'white'}
              minWidth="120"
              accessibilityLabel="Select State"
              placeholder="Only the Principle Acount Holder"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="ux" />
              <Select.Item label="Female" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CASH DIVIDEND:
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="one" onChange={setZakat} my={1}>
                  Re-Invest
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="two" my={1}>
                  Provide Cash
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              STOCK DIVIDEND:
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <Radio value="one" onChange={setZakat} my={1}>
                Issue Bonus Units
              </Radio>
              <Radio value="two" my={1}>
                Encash Bonus Units
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU WISH TO RECEIVE STATEMENT OF ACCOUNTS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="one" onChange={setZakat} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="two" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              (IF YES, PLEASE SELECT THE NATURE OF MAIL)
            </FormControl.Label>
            <HStack>
              <Checkbox onChange={setIsLifetimeExpiry}>Post</Checkbox>
              <Checkbox marginLeft={sizes.sm} onChange={setIsLifetimeExpiry}>
                Email
              </Checkbox>
            </HStack>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              FOR ALL OTHER CORRESPONDENCE:
            </FormControl.Label>
            <HStack>
              <Checkbox onChange={setIsLifetimeExpiry}>SMS</Checkbox>
              <Checkbox marginLeft={sizes.sm} onChange={setIsLifetimeExpiry}>
                Email
              </Checkbox>
            </HStack>

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
