import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {Text, Card, Block, Button} from '../components';
import {useTheme} from '../hooks';
import {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
  Checkbox,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  Select,
  Radio,
  Icon,
  Modal,
  VStack,
} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Timeline from 'react-native-timeline-flatlist';

interface Information {
  Name: string;
  Father_Name: string;
  Mother_Name: string;
  Gender: string;
  DOB: string;
  //Residental
  Permanent_Resident_Pakistan: string;
  Nationality: string;
  Country_Residence: string;
  Any_Other_Nationality: string; // Nationality
  US_Green_Card: string;
  US_Resident: string;
  Tax_Resident_Pakistan_US: string;
  //Contact
  Address: string;
  Business_Address: string;
  City: string;
  State: string;
  Postal_Code: number;
  Country_Code: number;
  Phone_Number: number;
  Tel_No_Res: number;
  Tel_No_Off: number;
  Fax: number;
  Whatsapp_No: number;
  Email: string;
  //Tax
  Tax_Status: string;
  NTN: number;
  Religion: string; // remaining
  Tax_Deduction: string; // remaining
  // Bank
  Bank_Name: string;
  Bank_Branch: string;
  Bank_Account_Title: string;
  Bank_Branch_Code: string;
  Bank_IBAN_Account_No: string;
  Bank_Branch_Address: string;
  // Nominee Info
  Nominee_Name: string;
  Nominee_Relationship_Investor: string;
  Nominee_CNIC: number;
  Nominee_CNIC_Issuance_Date: string;
  Nominee_CNIC_Expiry_Date: string;
  Nominee_Allocation: string;
  // Account Managment
  Account_Operate_Account: string;
  Account_Others: string;
  Account_Cash_Dividend: string;
  Account_Stock_Divident: string;
  Account_Statement_Wish: string;
  Account_Statement_Yes_Mail: string;
  Account_All_Other_Correspondence: string;
}

export default function KYC({navigation}) {
  const [registration, setRegistration] = useState<Information>({
    Name: '',
    Father_Name: '',
    Mother_Name: '',
    Gender: '',
    DOB: '',
    //Residental
    Permanent_Resident_Pakistan: '',
    Nationality: '',
    Country_Residence: '',
    Any_Other_Nationality: '',
    US_Green_Card: '',
    US_Resident: '',
    Tax_Resident_Pakistan_US: '',
    //Contact
    Address: '',
    Business_Address: '',
    City: '',
    State: '',
    Postal_Code: null,
    Country_Code: null,
    Phone_Number: null,
    Tel_No_Res: null,
    Tel_No_Off: null,
    Fax: null,
    Whatsapp_No: null,
    Email: '',
    // Tax
    Tax_Status: '',
    NTN: null,
    Religion: '', // remaining
    Tax_Deduction: '', // remaining
    // Bank
    Bank_Name: '',
    Bank_Branch: '',
    Bank_Account_Title: '',
    Bank_Branch_Code: '',
    Bank_IBAN_Account_No: '',
    Bank_Branch_Address: '',
    // Nominee Info
    Nominee_Name: '',
    Nominee_Relationship_Investor: '',
    Nominee_CNIC: null,
    Nominee_CNIC_Issuance_Date: '',
    Nominee_CNIC_Expiry_Date: '',
    Nominee_Allocation: '',
    // Account Managment
    Account_Operate_Account: '',
    Account_Others: '',
    Account_Cash_Dividend: '',
    Account_Stock_Divident: '',
    Account_Statement_Wish: '',
    Account_Statement_Yes_Mail: '',
    Account_All_Other_Correspondence: '',
  });
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);

  console.log('Registration : ' + JSON.stringify(registration));

  const [isLifetimeExpiry, setIsLifetimeExpiry] = useState(false);
  const [zakat, setZakat] = useState(false);
  const [isOtherNationalities, setIsOtherNationalities] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [dob, setDob] = useState('');
  console.log('Date: ' + dob);
  const [showModal, setShowModal] = useState(false);

  const tdata = (data = [
    {time: '✓', title: 'Identity Document', description: ''},
    {time: '✓', title: 'Setup Profile', description: ''},
    {time: '', title: 'Account Info', description: ''},
    {time: '', title: 'KYC', description: ''},
    {time: '', title: 'RPQ', description: ''},
    {time: '', title: 'Risk Profile', description: ''},
    {time: '', title: 'Upload Documents', description: ''},
    {time: '', title: 'Review', description: ''},
    {time: '', title: 'Finish', description: ''},
  ]);

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({...state, ...value}));
    },
    [setRegistration],
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const var_date = JSON.stringify(date).substring(0, 11);
    const final_date = var_date.split('-').reverse().join('-');
    console.warn('A date has been picked: ', final_date);
    hideDatePicker();
  };

  const handleConfirm_Dob = (date) => {
    const var_date = JSON.stringify(date).substring(0, 11);
    const final_date = var_date.split('-').reverse().join('-');
    console.warn('---- A date has been picked: ', final_date);
    handleChange({DOB: final_date});
    hideDatePicker();
  };

  console.log('Life :  ' + dob);

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
      <Modal
        minHeight={'full'}
        minWidth={'full'}
        size={'full'}
        isOpen={showModal}
        onClose={() => setShowModal(false)}>
        <Modal.Content minHeight={'full'}>
          <Modal.CloseButton />
          <Modal.Header>Account Opening Steps</Modal.Header>
          <Modal.Body>
            {/* <Timeline
                lineColor={colors.primary}
                data={data}
                innerCircle={'dot'}
                dotColor={colors.primary}
                circleColor={colors.primary}
                columnFormat="single-column-left"
                timeStyle={{
                  textAlign: 'center',

                  color: colors.primary,
                  padding: 5,
                  borderRadius: 13,
                }}
              /> */}

            {tdata.map((index) => {
              return (
                <Block row align="center" marginVertical={sizes.xs}>
                  <Icon
                    onPress={() => setShowModal(true)}
                    mb="1"
                    as={<Ionicons name={'ellipse-outline'} />}
                    size="xl"
                    color={colors.black}
                  />
                  <Text h5>{index.title}</Text>
                </Block>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            {/* <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  Save
                </Button>
              </Button.Group> */}
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Block marginHorizontal={sizes.sm} marginTop={sizes.md}>
        <Block align="flex-end">
          <Icon
            onPress={() => setShowModal(true)}
            mb="1"
            as={<Ionicons name={'menu-outline'} />}
            size="4xl"
            color={colors.black}
          />
        </Block>

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
              <Input
                placeholder="Enter Full Name"
                onChangeText={(value) => handleChange({Name: value})}
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                FATHER'S/HUSBAND'S NAME
              </FormControl.Label>
              <Input
                placeholder="Enter Father's/Husband's Name"
                onChangeText={(value) => handleChange({Father_Name: value})}
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                MOTHER'S NAME
              </FormControl.Label>
              <Input
                placeholder="Enter Mother's Name"
                onChangeText={(value) => handleChange({Mother_Name: value})}
              />
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
            <Input placeholder="Enter ID Document Number" />

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
                onConfirm={handleConfirm_Dob}
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
                onConfirm={handleConfirm_Dob}
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
              mt="1"
              onValueChange={(value) => handleChange({Gender: value})}>
              <Select.Item label="Male" value="Male" />
              <Select.Item label="Female" value="Female" />
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
                <Radio style={{marginLeft: sizes.sm}} value="two" my={1}>
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
              accessibilityLabel="favorite number"
              onChange={(value) => {
                handleChange({Permanent_Resident_Pakistan: value});
              }}>
              <HStack>
                <Radio value="Yes" onChange={setZakat} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="No" my={1}>
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
              onValueChange={(v) => handleChange({Nationality: v})}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="Male" />
              <Select.Item label="Female" value="Female" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              COUNTRY OF RESIDENCE
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Nationality"
              onValueChange={(v) => handleChange({Country_Residence: v})}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value="Male" />
              <Select.Item label="Female" value="Female" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE OTHER NATIONALITIES?
            </FormControl.Label>
            <Radio.Group
              onChange={(value) => {
                {
                  setIsOtherNationalities(value);
                  handleChange({Any_Other_Nationality: value});
                }
              }}
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="Yes" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="No" my={1}>
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
              onChange={(value) => {
                {
                  handleChange({US_Green_Card: value});
                }
              }}
              name="myRadioGroup"
              accessibilityLabel="favorite number">
              <HStack>
                <Radio value="Yes" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="No" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ARE YOU A US RESIDENT?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) => {
                {
                  handleChange({US_Resident: value});
                }
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="false" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ARE YOU TAX RESIDENT OF PAKISTAN AND/OR USA?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) => {
                {
                  handleChange({Tax_Resident_Pakistan_US: value});
                }
              }}>
              <HStack>
                <Radio value="true" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="false" my={1}>
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
            <Input
              placeholder="Enter Address"
              onChangeText={(value) => handleChange({Address: value})}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CORRESPONDENCE ADDRESS
            </FormControl.Label>
            <Input
              placeholder="Enter Correspondence Address"
              onChangeText={(value) => handleChange({Business_Address: value})}
            />

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
              mt="1"
              onValueChange={(value) =>
                handleChange({Business_Address: value})
              }>
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
              mt="1"
              onValueChange={(value) => handleChange({City: value})}>
              <Select.Item label="Male" value="ux" />
              <Select.Item label="Female" value="web" />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ZIP CODE / POSTAL CODE
            </FormControl.Label>
            <Input
              placeholder="Enter Zip Code/ Postal Code"
              onChangeText={(value) =>
                handleChange({Postal_Code: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TEL NO. (RES)
            </FormControl.Label>
            <Input
              placeholder="Enter Tel No.(Res)"
              onChangeText={(value) =>
                handleChange({Tel_No_Res: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TEL NO. (OFF)
            </FormControl.Label>
            <Input
              placeholder="Enter Tel No.(OFF)"
              onChangeText={(value) =>
                handleChange({Tel_No_Off: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              FAX
            </FormControl.Label>
            <Input
              placeholder="Enter Fax"
              onChangeText={(value) => handleChange({Fax: parseInt(value)})}
            />

            <FormControl.Label isRequired>PHONE NUMBER</FormControl.Label>
            <Block row justify="center" align="center">
              <View style={{width: '40%'}}>
                <Select
                  backgroundColor={'white'}
                  accessibilityLabel="Select State"
                  placeholder="Select State"
                  _selectedItem={{
                    bg: 'teal.600',
                    endIcon: <CheckIcon size={5} />,
                  }}
                  onValueChange={(value) =>
                    handleChange({Country_Code: value})
                  }>
                  <Select.Item label="Pakistan" value="+92" />
                  <Select.Item label="England" value="45" />
                </Select>
              </View>
              <Block width={'70%'}>
                <Input
                  minW={'70%'}
                  placeholder="Enter Phone Number"
                  onChangeText={(value) =>
                    handleChange({Phone_Number: parseInt(value)})
                  }
                />
              </Block>
            </Block>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              WHATSAPP NO.
            </FormControl.Label>
            <Input
              placeholder="Enter Whatsapp No"
              onChangeText={(value) =>
                handleChange({Whatsapp_No: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              EMAIL
            </FormControl.Label>
            <Input
              placeholder="Enter Email Address"
              onChangeText={(value) => handleChange({Email: value})}
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
              Tax Details
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              TAX STATUS:
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) => handleChange({Tax_Status: value})}>
              <HStack>
                <Radio value="Filer" my={1}>
                  Filer
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="Non-Filer" my={1}>
                  Non-Filer
                </Radio>
              </HStack>
            </Radio.Group>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              NATIONAL TAX NO. (NTN)
            </FormControl.Label>
            <Input
              placeholder="Enter NTN"
              onChangeText={(value) => handleChange({NTN: parseInt(value)})}
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
              <Checkbox onChange={setIsLifetimeExpiry} value={'Post'}>
                Post
              </Checkbox>
              <Checkbox
                marginLeft={sizes.sm}
                value={'Email'}
                onChange={setIsLifetimeExpiry}>
                Email
              </Checkbox>
            </HStack>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              FOR ALL OTHER CORRESPONDENCE:
            </FormControl.Label>
            <HStack>
              <Checkbox value={'SMS'} onChange={setIsLifetimeExpiry}>
                SMS
              </Checkbox>
              <Checkbox
                value={'Email'}
                marginLeft={sizes.sm}
                onChange={setIsLifetimeExpiry}>
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
        ) : step === 9 ? (
          <>
            <Text
              bold
              size={19}
              style={{
                borderBottomWidth: sizes.xs,
                borderBottomColor: colors.primary,
              }}>
              Preview Profile
            </Text>
            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Basic Information
              </Text>

              <VStack>
                <Text>Name :</Text>
                <Text>{registration.Name}</Text>
              </VStack>
              <VStack>
                <Text>Father Name :</Text>
                <Text>{registration.Father_Name}</Text>
              </VStack>
              <VStack>
                <Text>Mother Name :</Text>
                <Text>{registration.Mother_Name}</Text>
              </VStack>
              <VStack>
                <Text>Gender :</Text>
                <Text>{registration.Gender}</Text>
              </VStack>
              <VStack>
                <Text>Date of Birth :</Text>
                <Text>{registration.DOB}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Residential Information
              </Text>
              <VStack>
                <Text>Permanent Resident in Pakistan :</Text>
                <Text>{registration.Permanent_Resident_Pakistan}</Text>
              </VStack>
              <VStack>
                <Text>Nationality :</Text>
                <Text>{registration.Nationality}</Text>
              </VStack>
              <VStack>
                <Text>Country of Residence :</Text>
                <Text>{registration.Country_Residence}</Text>
              </VStack>
              <VStack>
                <Text>Do You have any other Nationalities :</Text>
                <Text>{registration.Any_Other_Nationality}</Text>
              </VStack>
              <VStack>
                <Text>Do you hold any US Green Card ?</Text>
                <Text>{registration.US_Green_Card}</Text>
              </VStack>
              <VStack>
                <Text>Do you a US Resident ?</Text>
                <Text>{registration.US_Resident}</Text>
              </VStack>
              <VStack>
                <Text>Are you tax resident of Pakistan and/or USA?</Text>
                <Text>{registration.Tax_Resident_Pakistan_US}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Contact Information
              </Text>
              <VStack>
                <Text>Address:</Text>
                <Text>{registration.Address}</Text>
              </VStack>
              <VStack>
                <Text>
                  Business / Registered Address (In case of sole proprietor) :
                </Text>
                <Text>{registration.Business_Address}</Text>
              </VStack>
              <VStack>
                <Text>City:</Text>
                <Text>{registration.City}</Text>
              </VStack>
              <VStack>
                <Text>State:</Text>
                <Text>{registration.State}</Text>
              </VStack>
              <VStack>
                <Text>Postal Code: ?</Text>
                <Text>{registration.Postal_Code}</Text>
              </VStack>
              <VStack>
                <Text>Phone Number: ?</Text>
                <Text>{registration.Phone_Number}</Text>
              </VStack>
              <VStack>
                <Text>Tel No. (Res):</Text>
                <Text>{registration.Tel_No_Res}</Text>
              </VStack>
              <VStack>
                <Text>Tel No. (Off):</Text>
                <Text>{registration.Tel_No_Off}</Text>
              </VStack>
              <VStack>
                <Text>Fax:</Text>
                <Text>{registration.Fax}</Text>
              </VStack>
              <VStack>
                <Text>WhatsApp No :</Text>
                <Text>{registration.Whatsapp_No}</Text>
              </VStack>
              <VStack marginBottom={sizes.s}>
                <Text>Email Address:</Text>
                <Text>{registration.Email}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Tax Information
              </Text>
              <VStack>
                <Text>National Tax No.(NTN):</Text>
                <Text>{registration.NTN}</Text>
              </VStack>
              <VStack marginTop={sizes.xs} marginBottom={sizes.s}>
                <Text>Tax Status:</Text>
                <Text>{registration.Tax_Status}</Text>
              </VStack>
            </Block>

            <Text bold size={19} marginTop={sizes.sm}>
              Account Info
            </Text>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Bank Information
              </Text>
              <VStack>
                <Text>Bank Name: </Text>
                <Text>{registration.Bank_Name}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Branch :</Text>
                <Text>{registration.Bank_Branch}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Bank Account Title:</Text>
                <Text>{registration.Bank_Account_Title}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Branch Code:</Text>
                <Text>{registration.Bank_Branch_Code}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Bank Address: ?</Text>
                <Text>{registration.Bank_Branch_Address}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>IBAN/Account No: ?</Text>
                <Text>{registration.Bank_IBAN_Account_No}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Nominee Information
              </Text>
              <VStack>
                <Text>Name (Mr./Ms./Mrs.): </Text>
                <Text>{registration.Nominee_Name}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Relationship with Investor:</Text>
                <Text>{registration.Nominee_Relationship_Investor}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>CNIC/NICOP No.:</Text>
                <Text>{registration.Nominee_CNIC}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Issuance Date:</Text>
                <Text>{registration.Nominee_CNIC_Issuance_Date}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Expiry Date:</Text>
                <Text>{registration.Nominee_CNIC_Expiry_Date}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>Allocation %:</Text>
                <Text>{registration.Nominee_Allocation}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Nominee Information
              </Text>
              <VStack>
                <Text>Name (Mr./Ms./Mrs.): </Text>
                <Text>{registration.Nominee_Name}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Relationship with Investor:</Text>
                <Text>{registration.Nominee_Relationship_Investor}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>CNIC/NICOP No.:</Text>
                <Text>{registration.Nominee_CNIC}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Issuance Date:</Text>
                <Text>{registration.Nominee_CNIC_Issuance_Date}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Expiry Date:</Text>
                <Text>{registration.Nominee_CNIC_Expiry_Date}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>Allocation %:</Text>
                <Text>{registration.Nominee_Allocation}</Text>
              </VStack>
            </Block>

            <Button
              width={'45%'}
              marginHorizontal={sizes.xs}
              marginTop={sizes.sm}
              primary
              onPress={() => setStep(step - 1)}
              marginBottom={sizes.xs}>
              <Text white>Back</Text>
            </Button>
          </>
        ) : (
          <></>
        )}
      </Block>
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
