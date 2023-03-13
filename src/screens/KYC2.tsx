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
  VStack,
  Input,
  Select,
  Radio,
} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Value} from 'react-native-reanimated';

export default function KYC2({navigation}) {
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);

  const [isLifetimeExpiry, setIsLifetimeExpiry] = useState(false);
  const [zakat, setZakat] = useState(false);

  const [isOtherNationalities, setIsOtherNationalities] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // for Pep Declaration Screen
  const [pepDeclaration, setPepDeclaration] = useState('');

  //FATCA Details
  const [fatca_Residence, setFatca_Residence] = useState('');

  //Tax Residence
  const [taxResidence, setTaxResidence] = useState('');
  const [taxResidence2, setTaxResidence2] = useState('');
  const [taxResidence3, setTaxResidence3] = useState('');

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
              Professional Details
            </Text>

            <FormControl marginTop={sizes.xs}>
              <FormControl.Label isRequired>EDUCATION</FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number">
                <HStack>
                  <Radio value="one" my={1}>
                    UnderGraduate
                  </Radio>
                  <Radio style={{marginLeft: sizes.sm}} value="two" my={1}>
                    Graduate
                  </Radio>
                </HStack>
                <HStack>
                  <Radio value="one" my={1}>
                    PostGraduate
                  </Radio>
                  <Radio style={{marginLeft: sizes.sm}} value="two" my={1}>
                    Professional
                  </Radio>
                </HStack>
              </Radio.Group>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                INDUSTRY
              </FormControl.Label>
              <Select
                backgroundColor={'white'}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select Industry"
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
                OCCUPATION
              </FormControl.Label>
              <Select
                backgroundColor={'white'}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select Occupation:"
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
                SOURCE OF FUNDS:
              </FormControl.Label>
              <Select
                backgroundColor={'white'}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select Source of Funds:"
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
                NATURE OF EMPLOYER / BUSINESS
              </FormControl.Label>
              <Input placeholder="Enter Nature of Employer / Business" />

              <FormControl.Label marginTop={sizes.xs} isRequired>
                GEOGRAPHIES INVOLVED (DOMESTIC):
              </FormControl.Label>
              <Checkbox>Sindh</Checkbox>
              <Checkbox>Punjab</Checkbox>
              <Checkbox>KPK</Checkbox>
              <Checkbox>Balochistan</Checkbox>
              <Checkbox>Azad Kashmir</Checkbox>
              <Checkbox>Gilgit Baltistan</Checkbox>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                TYPE OF COUNTER PARTIES (DOMESTIC):
              </FormControl.Label>
              <Checkbox>Sindh</Checkbox>
              <Checkbox>Punjab</Checkbox>
              <Checkbox>KPK</Checkbox>
              <Checkbox>Balochistan</Checkbox>
              <Checkbox>Azad Kashmir</Checkbox>
              <Checkbox>Gilgit Baltistan</Checkbox>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                PURPOSE AND INTENDED NATURE OF BUSINESS RELATIONSHIP:
              </FormControl.Label>
              <Checkbox>Investment & Savings</Checkbox>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                POSSIBLE MODES OF TRANSCATIONS / DELIVERY CHANNELS:
              </FormControl.Label>
              <Checkbox>Physical</Checkbox>
              <Checkbox>Online</Checkbox>
            </FormControl>
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
        ) : step === 2 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Transaction Details
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label isRequired>
                EXPECTED NO. OF TRANSACTIONS (MONTHLY)
              </FormControl.Label>
              <Select
                backgroundColor={'white'}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select Expected No.of Transactions (Monthly):"
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
                ANNUAL INCOME OF CLIENT
              </FormControl.Label>
              <Select
                backgroundColor={'white'}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select Annual Income of Client:"
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
                EXPECTED TURNOVER IN ACCOUNT (MONTHLY) PKR
              </FormControl.Label>
              <Select
                backgroundColor={'white'}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Select Expected Turnover in account(Monthly)PKR:"
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
            </FormControl>

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
              Declaration by Customer
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              HAS ANY FINANCIAL INSTITUTION EVER REFUSED TO OPEN YOUR ACCOUNT?
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
              ARE YOU OPENING THIS ACCOUNT ON BEHALF OF ANY OTHER PERSON?
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
              ARE YOU HOLDING A POSITION IN ANY GOVERNMENT/PUBLIC OFFICE?
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
              ARE YOU HOLDING A POSITION IN ANY POLITICAL PARTY?
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
              PEP Declaration
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU CURRENTLY HOLD ANY PUBLIC POSITION?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              // value={pepDeclaration}
              onChange={(nextValue) => {
                setPepDeclaration(nextValue),
                  console.log('Radio: ' + pepDeclaration);
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DID YOU HOLD ANY PUBLIC POSITION IN THE LAST 12 MONTHS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              // value={pepDeclaration}
              onChange={(nextValue) => {
                setPepDeclaration(nextValue),
                  console.log('Radio: ' + pepDeclaration);
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              HAVE YOU EVER HELD ANY PUBLIC POSITION?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              // value={pepDeclaration}
              onChange={(nextValue) => {
                setPepDeclaration(nextValue),
                  console.log('Radio: ' + pepDeclaration);
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              DID YOU HAVE OR HAVE YOU EVER HAD ANY DIPLOMATIC IMMUNITY?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              // value={pepDeclaration}
              onChange={(nextValue) => {
                setPepDeclaration(nextValue),
                  console.log('Radio: ' + pepDeclaration);
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE A RELATIVE WHO HAS HELD ANY PUBLIC POSITION IN THE
              LAST 12 MONTHS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              // value={pepDeclaration}
              onChange={(nextValue) => {
                setPepDeclaration(nextValue),
                  console.log('Radio: ' + pepDeclaration);
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE A CLOSE ASSOCIATE WHO HAS HELD ANY PUBLIC POSITION IN
              THE LAST 12 MONTHS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              // value={pepDeclaration}
              onChange={(nextValue) => {
                setPepDeclaration(nextValue),
                  console.log('Radio: ' + pepDeclaration);
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              HAS THERE BEEN A CONVICTION AGAINST YOU BY A COURT OF LAW?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              // value={pepDeclaration}
              onChange={(nextValue) => {
                setPepDeclaration(nextValue),
                  console.log('Radio: ' + pepDeclaration);
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF YOU HAVE ANSWERED "YES" TO ANY OF THE QUESTIONS ABOVE, PLEASE
              PROVIDE DETAILS:
            </FormControl.Label>
            <Input
              placeholder="Enter Details"
              isDisabled={pepDeclaration == 'true' ? false : true}
            />
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
              Ultimate Beneficiary (if applicable)
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              NAME OF ULTIMATE BENEFICIARY
            </FormControl.Label>
            <Input placeholder="Enter Name of Ultimate Beneficiary" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              RELATIONSHIP WITH THE CUSTOMER
            </FormControl.Label>
            <Input placeholder="Enter Relationship with the Customer" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CNIC/NICOP/PASSPORT NO.
            </FormControl.Label>
            <Input placeholder="Enter CNIC/NICOP/Passport No." />

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
              FATCA Details (if applicable)
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TITLE OF ACCOUNT
            </FormControl.Label>
            <Input placeholder="Enter Title of Account" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CNIC NO.
            </FormControl.Label>
            <Input placeholder="Enter CNIC NO." />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE COUNTRY OF TAX RESIDENCE OTHER THAN PAKISTAN?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={fatca_Residence}
              onChange={(value) => setFatca_Residence(value)}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              COUNTRY OF TAX RESIDENCE OTHER THAN PAKISTAN
            </FormControl.Label>
            <Select
              isDisabled={fatca_Residence == 'true' ? false : true}
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country"
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
              BRANCH CODE
            </FormControl.Label>
            <Input placeholder="Enter Branch Code" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              PLACE OF BIRTH
            </FormControl.Label>
            <Input placeholder="Enter Place of Birth" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ARE YOU A US CITIZEN?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
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
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

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
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              STANDING INSTRUCTIONS TO TRANSFER FUNDS TO AN ACCOUNT MAINTAINED
              IN USA.
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE ANY POWER OF ATTORNEY/AUTHORISED SIGNATORY/MANDATE
              HOLDER HAVING US ADDRESS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE US RESIDENCE/MAILING/SOLE HOLD MAIL ADDRESS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE US TELEPHONE NUMBER?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              US TAXPAYER IDENTIFICATION NUMBER
            </FormControl.Label>
            <Input placeholder="Enter US Taxpayer Identification Number" />

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
              CRS Form for Tax Residency Self Certification
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              COUNTRY OF TAX RESIDENCE
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value="false"
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value="true"
              />
              <Select.Item label="No TIN required" value="false" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TIN OR EQUIVALENT
            </FormControl.Label>
            <Input placeholder="Enter TIN Or Equivalent" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              REASON
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence"
              value={taxResidence}
              onValueChange={(value) => setTaxResidence(value)}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value="false"
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value="true"
              />
              <Select.Item label="No TIN required" value="false" />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence == 'true' ? false : true}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              COUNTRY OF TAX RESIDENCE #2
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence #2"
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
              TIN OR EQUIVALENT
            </FormControl.Label>
            <Input placeholder="Enter TIN Or Equivalent" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              REASON
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence"
              value={taxResidence2}
              onValueChange={(value) => setTaxResidence2(value)}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value="false"
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value="true"
              />
              <Select.Item label="No TIN required" value="false" />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence2 == 'true' ? false : true}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              COUNTRY OF TAX RESIDENCE #3
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence #2"
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
              TIN OR EQUIVALENT
            </FormControl.Label>
            <Input placeholder="Enter TIN Or Equivalent" />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              REASON
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence"
              value={taxResidence3}
              onValueChange={(value) => setTaxResidence3(value)}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value="false"
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value="true"
              />
              <Select.Item label="No TIN required" value="false" />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence3 == 'true' ? false : true}
            />

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
                onPress={() => navigation.navigate('KYC2')}
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
