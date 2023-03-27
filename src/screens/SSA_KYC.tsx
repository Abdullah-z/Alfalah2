import {View, ScrollView, StyleSheet, Alert} from 'react-native';
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
  VStack,
  Modal,
} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Timeline from 'react-native-timeline-flatlist';

interface Information_KYC_3 {
  // Basic Details
  Basic_Account_Type: string;
  Basic_Name: string;
  Basic_Father_Name: string;
  Basic_Mother_Name: string;
  Basic_CNIC_NO: number;
  IssueDate: string;
  ExpiryDate: string;
  Basic_Place_Birth: string;
  DOB: string;
  Basic_Nationality: string;
  Basic_Gender: number;
  Basic_Religion: string;
  Basic_Zakat: number;
  Basic_Phone_No: number;
  Basic_Whatsapp: number;
  Basic_Phone_Residance: number;
  Basic_Phone_Office: number;
  Basic_Residential_Status: number;
  Basic_Corresponding_Address: string;
  Basic_Occupation: number;
  Basic_Source_Fund: string;

  //Guardian Details
  Guardian_Name: string;
  Guardian_Relationship: string;
  Guardian_CNIC: number;
  Guardian_Issue_Date: string;
  Guardian_Expiry_Date: string;

  Bank_Account_Title: string;
  Bank_Name: string;
  Bank_Branch_Code: string;
  Bank_Branch: string;
  Bank_Address: string;
  Bank_IBAN: string;
  Bank_Account_No: number;
  Bank_Wallet_No: string;

  Statement_Wish: number;
  Statement_Nature: string;
  Statement_Correspondence: string;

  Distribution_Cash: number;
  Distribution_Stock: number;

  Declaration_Public: number;
  Declaration_Associate: number;
  Declaration_Ultimate: string;
  Declaration_Relationship: string;
  Declaration_CNIC: number;
  Declaration_Issue: string;
  Declaration_Expiry: string;
}

export default function SSA_KYC() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [savedate, setSavedate] = useState(0);
  const [guardiandate, setGuardiandate] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [Nominee_Details, setNominee_Details] = useState([]);

  console.log('Details: ' + JSON.stringify(Nominee_Details));
  console.log('SaveDate Value : ' + savedate);

  const [registration_KYC_3, setRegistration_KYC_3] =
    useState<Information_KYC_3>({
      Basic_Account_Type: '',
      Basic_Name: '',
      Basic_Father_Name: '',
      Basic_Mother_Name: '',
      Basic_CNIC_NO: null,
      IssueDate: '',
      ExpiryDate: '',
      Basic_Place_Birth: '',
      DOB: '',
      Basic_Nationality: '',
      Basic_Gender: null,
      Basic_Religion: '',
      Basic_Zakat: null,
      Basic_Phone_No: null,
      Basic_Whatsapp: null,
      Basic_Phone_Residance: null,
      Basic_Phone_Office: null,
      Basic_Residential_Status: null,
      Basic_Corresponding_Address: '',
      Basic_Occupation: null,
      Basic_Source_Fund: '',

      Guardian_Name: '',
      Guardian_Relationship: '',
      Guardian_CNIC: null,
      Guardian_Issue_Date: '',
      Guardian_Expiry_Date: '',

      Bank_Account_Title: '',
      Bank_Name: '',
      Bank_Branch_Code: '',
      Bank_Branch: '',
      Bank_Address: '',
      Bank_IBAN: '',
      Bank_Account_No: '',
      Bank_Wallet_No: '',

      Statement_Wish: null,
      Statement_Nature: '',
      Statement_Correspondence: '',

      Distribution_Cash: null,
      Distribution_Stock: null,

      Declaration_Public: null,
      Declaration_Associate: null,
      Declaration_Ultimate: '',
      Declaration_Relationship: '',
      Declaration_CNIC: null,
      Declaration_Issue: '',
      Declaration_Expiry: '',
    });

  const handleChange = useCallback(
    (value: Information_KYC_3) => {
      setRegistration_KYC_3((state) => ({...state, ...value}));
    },
    [setRegistration_KYC_3],
  );

  const Nominee_Modal = () => {
    let array = {
      name: '',
      relationship: '',
      cnic: '',
      issuance: '',
      expiry: '',
      allocation: '',
    };
    let Model_name: '',
      Model_cnic: '',
      Model_relationship: '',
      Model_issuance: '',
      Model_expiry: '',
      Model_allocation: '';
    console.log('Model_Name: ' + Model_name);

    return (
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width={'95%'} style={{padding: sizes.xs}}>
          <Modal.Header height={sizes.sm}>
            <Modal.CloseButton size={sizes.x} />
          </Modal.Header>

          <Modal.Body>
            <FormControl>
              <FormControl.Label>NAME (MR./MS./MRS.)</FormControl.Label>
              <Input
                placeholder="Enter Full Name"
                onChangeText={(value) => (Model_name = value)}
              />
              <FormControl.Label>RELATIONSHIP WITH INVESTOR</FormControl.Label>
              <Input
                placeholder="Enter Relationship with Investor"
                onChangeText={(value) => (Model_relationship = value)}
              />
              <FormControl.Label>CNIC/NICOP NO.</FormControl.Label>
              <Input
                placeholder="Enter CNIC/NCIOP NO"
                onChangeText={(value) => (Model_cnic = value)}
              />
              <FormControl.Label>ISSUANCE DATE</FormControl.Label>
              <Input
                placeholder="Enter Issuance Date"
                onChangeText={(value) => (Model_issuance = value)}
              />
              <FormControl.Label>EXPIRY DATE</FormControl.Label>
              <Input
                placeholder="Enter Expiry Date"
                onChangeText={(value) => (Model_expiry = value)}
              />
              <FormControl.Label>ALLOCATION %</FormControl.Label>
              <Input
                placeholder="Enter Allocation %"
                onChangeText={(value) => (Model_allocation = value)}
              />
            </FormControl>
          </Modal.Body>

          <Modal.Footer
            alignItems={'left'}
            alignContent={'left'}
            justifyContent={'left'}>
            <Button
              primary
              width={sizes.sm}
              onPress={() => {
                array.name = Model_name;
                array.cnic = Model_cnic;
                array.relationship = Model_relationship;
                array.issuance = Model_issuance;
                array.expiry = Model_expiry;
                array.allocation = Model_allocation;
                setNominee_Details((Nominee_Details) => [
                  ...Nominee_Details,
                  array,
                ]);
                Nominee_Details.push(array);
                console.log(Nominee_Details);
                console.log('Array' + JSON.stringify(array));
                setShowModal(false);
              }}>
              <Text white>OK</Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
  };

  // Printing KYC Interface
  console.log('KYC-3 :-' + JSON.stringify(registration_KYC_3));

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

  const showDatePicker_Guardian = (v: React.SetStateAction<number>) => {
    setDatePickerVisibility(true);
    setGuardiandate(v);
  };

  const showDatePicker = (v: React.SetStateAction<number>) => {
    setDatePickerVisibility(true);
    setSavedate(v);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const var_date = JSON.stringify(date).substring(0, 11);
    const final_date = var_date.split('-').reverse().join('-');
    {
      savedate === 1
        ? handleChange({IssueDate: final_date})
        : savedate === 2
        ? handleChange({ExpiryDate: final_date})
        : savedate === 3
        ? handleChange({DOB: final_date})
        : savedate === 4
        ? handleChange({Declaration_Issue: final_date})
        : savedate === 5
        ? handleChange({Declaration_Expiry: final_date})
        : '';
    }
    console.warn('A date has been picked: ', final_date);
    hideDatePicker();
  };

  const handleConfirm_Guardian = (date: any) => {
    const var_date = JSON.stringify(date).substring(0, 11);
    const final_date = var_date.split('-').reverse().join('-');
    {
      guardiandate === 1
        ? handleChange({Guardian_Issue_Date: final_date})
        : guardiandate === 2
        ? handleChange({Guardian_Expiry_Date: final_date})
        : '';
    }
    console.warn('A date has been picked: ', final_date);
    hideDatePicker();
  };

  return (
    <ScrollView>
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
              Basic Details
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label isRequired>ACCOUNT TYPE</FormControl.Label>
              <Checkbox.Group
                onChange={(v) => handleChange({Basic_Account_Type: v})}>
                <Checkbox value={'SINGLE'}>SINGLE</Checkbox>
                <Checkbox value={'MINORED'}>MINORED</Checkbox>
              </Checkbox.Group>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                NAME (MR./MS./MRS.)
              </FormControl.Label>
              <Input
                placeholder="Enter Full Name"
                onChangeText={(value) => handleChange({Basic_Name: value})}
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                FATHER'S/HUSBAND'S NAME
              </FormControl.Label>
              <Input
                placeholder="Enter Father's/Husband's Name"
                onChangeText={(value) =>
                  handleChange({Basic_Father_Name: value})
                }
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                MOTHER'S NAME
              </FormControl.Label>
              <Input
                placeholder="Enter Mother's Name"
                onChangeText={(value) =>
                  handleChange({Basic_Mother_Name: value})
                }
              />

              <FormControl.Label marginTop={sizes.xs} isRequired>
                CNIC/NICOP/ARC/POC/PASSPORT NUMBER
              </FormControl.Label>
              <Input
                placeholder="Enter CNIC/NICOP/ARC/POC/Passport Number"
                keyboardType="numeric"
                onChangeText={(value) => handleChange({Basic_CNIC_NO: value})}
              />
            </FormControl>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ISSUANCE DATE
            </FormControl.Label>
            <View>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={() => showDatePicker(1)}
                primary>
                <Text white>Select Issuance Date</Text>
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
                onPress={() => showDatePicker(2)}
                primary>
                <Text white>Select Expiry Date</Text>
              </Button>
              <DateTimePickerModal
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              PLACE OF BIRTH
            </FormControl.Label>
            <Input
              placeholder="Enter Place of Birth"
              onChangeText={(value) => handleChange({Basic_Place_Birth: value})}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DATE OF BIRTH
            </FormControl.Label>
            <View>
              <Button
                primary
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={() => showDatePicker(3)}>
                <Text white>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>

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
              onValueChange={(value) => handleChange({Basic_Gender: value})}>
              <Select.Item label="Male" value={1} />
              <Select.Item label="Female" value={2} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              RELIGION
            </FormControl.Label>
            <Input
              placeholder="Enter Religion Name"
              onChangeText={(value) => handleChange({Basic_Religion: value})}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ZAKAT DEDUCTION
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) => {
                handleChange({Basic_Zakat: value});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              MOBILE NUMBER
            </FormControl.Label>
            <Input
              maxLength={10}
              keyboardType="numeric"
              placeholder="Enter Mobile Number"
              onChangeText={(value) => handleChange({Basic_Phone_No: value})}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              WHATSAPP NUMBER
            </FormControl.Label>
            <Input
              maxLength={10}
              keyboardType="numeric"
              placeholder="Enter Whatsapp Number"
              onChangeText={(value) => handleChange({Basic_Whatsapp: value})}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CONTACT NUMBER (RESIDENCE)
            </FormControl.Label>
            <Input
              maxLength={10}
              keyboardType="numeric"
              placeholder="Enter Residance Contact Number"
              onChangeText={(value) =>
                handleChange({Basic_Phone_Residance: value})
              }
            />
            <FormControl.Label marginTop={sizes.xs} isRequired>
              OFFICE CONTACT NUMBER
            </FormControl.Label>
            <Input
              maxLength={10}
              keyboardType="numeric"
              placeholder="Enter Office Contact Number"
              onChangeText={(value) =>
                handleChange({Basic_Phone_Office: value})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              OFFICE CONTACT NUMBER
            </FormControl.Label>
            <Input
              keyboardType="numeric"
              placeholder="Enter Office Contact Number"
              onChangeText={(value) =>
                handleChange({Basic_Phone_Office: value})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              RESIDENIAL STATUS
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) => {
                handleChange({Basic_Residential_Status: value});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Resident
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                  Non-Resident
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CORRESPONDENCE ADDRESS
            </FormControl.Label>
            <Input
              placeholder="Enter Correspondence Address"
              onChangeText={(value) =>
                handleChange({Basic_Corresponding_Address: value})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              OCCUPATION
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
              mt="1"
              onValueChange={(v) => handleChange({Basic_Occupation: v})}>
              <Select.Item label="UX Research" value={1} />
              <Select.Item label="Web Development" value={2} />
              <Select.Item label="Cross Platform Development" value={3} />
              <Select.Item label="UI Designing" value={4} />
              <Select.Item label="Backend Development" value={5} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              SOURCE OF FUND
            </FormControl.Label>
            <Input
              placeholder="Enter Source of Fund"
              onChangeText={(value) => handleChange({Basic_Source_Fund: value})}
            />

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
              Guardian Details (To be filled in case Principle Account Holder is
              Minor)
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                NAME (MR./MS./MRS.)
              </FormControl.Label>
              <Input
                placeholder="Enter Full Name"
                onChangeText={(value) => handleChange({Guardian_Name: value})}
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                RELATIONSHIP WITH A MINOR
              </FormControl.Label>
              <Input
                placeholder="Enter Relationship with a Minor"
                onChangeText={(value) =>
                  handleChange({Guardian_Relationship: value})
                }
              />

              <FormControl.Label marginTop={sizes.xs} isRequired>
                CNIC/NICOP/ARC/POC/PASSPORT NUMBER
              </FormControl.Label>
              <Input
                placeholder="Enter CNIC/NICOP/ARC/POC/Passport Number"
                keyboardType="numeric"
                onChangeText={(value) => handleChange({Guardian_CNIC: value})}
              />
            </FormControl>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ISSUANCE DATE
            </FormControl.Label>
            <View>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={() => showDatePicker_Guardian(1)}
                primary>
                <Text white>Select Issuance Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm_Guardian}
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
                onPress={() => showDatePicker_Guardian(2)}
                primary>
                <Text white>Select Expiry Date</Text>
              </Button>
              <DateTimePickerModal
                mode="date"
                onConfirm={handleConfirm_Guardian}
                onCancel={hideDatePicker}
              />
            </View>

            <Block row justify="center" marginTop={sizes.sm}>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
              Bank Details of Principle Account Holder
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                BANK ACCOUNT TITLE
              </FormControl.Label>
              <Input
                placeholder="Enter Bank Account Title"
                onChangeText={(value) =>
                  handleChange({Bank_Account_Title: value})
                }
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                BANK NAME
              </FormControl.Label>
              <Input
                placeholder="Enter Bank Name"
                onChangeText={(value) => handleChange({Bank_Name: value})}
              />

              <FormControl.Label marginTop={sizes.xs} isRequired>
                BRANCH CODE
              </FormControl.Label>
              <Input
                placeholder="Enter Branch Code"
                onChangeText={(value) =>
                  handleChange({Bank_Branch_Code: value})
                }
              />
            </FormControl>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BRANCH
            </FormControl.Label>
            <Input
              placeholder="Enter Branch Name"
              onChangeText={(value) => handleChange({Bank_Branch: value})}
            />
            <FormControl.Label marginTop={sizes.xs} isRequired>
              ADDRESS
            </FormControl.Label>
            <Input
              placeholder="Enter Address"
              onChangeText={(value) => handleChange({Bank_Address: value})}
            />
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IBAN
            </FormControl.Label>
            <Input
              placeholder="Enter IBAN"
              onChangeText={(value) => handleChange({Bank_IBAN: value})}
            />
            <FormControl.Label marginTop={sizes.xs} isRequired>
              ACCOUNT NO
            </FormControl.Label>
            <Input
              placeholder="Enter Account No"
              onChangeText={(value) => handleChange({Bank_Account_No: value})}
            />
            <FormControl.Label marginTop={sizes.xs} isRequired>
              WALLET NO
            </FormControl.Label>
            <Input
              placeholder="Enter Wallet No"
              onChangeText={(value) => handleChange({Bank_Wallet_No: value})}
            />
            <Block row justify="center" marginTop={sizes.sm}>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
              Statement of Account Delivery Instructions
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                DO YOU WISH TO RECEIVE STATEMENT OF ACCOUNTS?
              </FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                onChange={(value) => {
                  handleChange({Statement_Wish: value});
                }}>
                <HStack>
                  <Radio value={1} my={1}>
                    YES
                  </Radio>
                  <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                    NO
                  </Radio>
                </HStack>
              </Radio.Group>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                (IF YES', PLEASE SELECT THE NATURE OF MAIL)
              </FormControl.Label>
              <Checkbox.Group
                isDisabled={
                  registration_KYC_3.Statement_Wish === 1 ? false : true
                }
                onChange={(value) => {
                  handleChange({Statement_Nature: value});
                }}
                accessibilityLabel="choose numbers">
                <Checkbox value={'POST'} my={2}>
                  POST
                </Checkbox>
                <Checkbox value={'EMAIL'}>EMAIL</Checkbox>
              </Checkbox.Group>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                FOR ALL CORRESPONDENCE
              </FormControl.Label>
              <Checkbox.Group
                onChange={(value) => {
                  handleChange({Statement_Correspondence: value});
                }}
                accessibilityLabel="choose numbers">
                <Checkbox value={'SMS'} my={2}>
                  SMS
                </Checkbox>
                <Checkbox value={'EMAIL'}>EMAIL</Checkbox>
              </Checkbox.Group>
            </FormControl>
            <Block row justify="center" marginTop={sizes.sm}>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
              DISTRIBUTION PAYOUT INSTRUCTION
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                CASH DIVIDEND
              </FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                onChange={(value) => {
                  handleChange({Distribution_Cash: value});
                }}>
                <HStack>
                  <Radio value={1} my={1}>
                    Yes
                  </Radio>
                  <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                    No
                  </Radio>
                </HStack>
              </Radio.Group>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                STOCK DIVIDEND
              </FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                onChange={(value) => {
                  handleChange({Distribution_Stock: value});
                }}>
                <HStack>
                  <Radio value={1} my={1}>
                    Yes
                  </Radio>
                  <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                    No
                  </Radio>
                </HStack>
              </Radio.Group>
            </FormControl>
            <Block row justify="center" marginTop={sizes.sm}>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
              NOMINEE DETAILS (OPTIONAL)
            </Text>
            <Nominee_Modal />
            <FormControl marginTop={sizes.xs}>
              <Button
                primary
                onPress={() => {
                  setShowModal(true);
                }}>
                <Text white>ADD</Text>
              </Button>

              {Nominee_Details?.map((element) => {
                return (
                  <View>
                    <HStack
                      style={{
                        marginTop: sizes.sm,
                        borderWidth: 1,
                        borderColor: colors.gray,
                      }}>
                      <View
                        width={'45%'}
                        style={{
                          borderRightWidth: 2,
                          borderRightColor: colors.gray,
                        }}>
                        <Text
                          style={{
                            borderRightWidth: 3,
                          }}>
                          Name
                        </Text>
                      </View>
                      <Text>{element.name}</Text>
                    </HStack>
                    <HStack
                      style={{
                        borderWidth: 1,
                        borderColor: colors.gray,
                      }}>
                      <View
                        width={'45%'}
                        style={{
                          borderRightWidth: 2,
                          borderRightColor: colors.gray,
                        }}>
                        <Text>Relationship</Text>
                      </View>
                      <Text>{element.relationship}</Text>
                    </HStack>
                    <HStack
                      style={{
                        borderWidth: 1,
                        borderColor: colors.gray,
                      }}>
                      <View
                        width={'45%'}
                        style={{
                          borderRightWidth: 2,
                          borderRightColor: colors.gray,
                        }}>
                        <Text>CNIC</Text>
                      </View>
                      <Text>{element.cnic}</Text>
                    </HStack>
                    <HStack
                      style={{
                        borderWidth: 1,
                        borderColor: colors.gray,
                      }}>
                      <View
                        width={'45%'}
                        style={{
                          borderRightWidth: 2,
                          borderRightColor: colors.gray,
                        }}>
                        <Text>Issuance Date</Text>
                      </View>
                      <Text>{element.issuance}</Text>
                    </HStack>
                    <HStack
                      style={{
                        borderWidth: 1,
                        borderColor: colors.gray,
                      }}>
                      <View
                        width={'45%'}
                        style={{
                          borderRightWidth: 2,
                          borderRightColor: colors.gray,
                        }}>
                        <Text>Expiry Date</Text>
                      </View>
                      <Text>{element.expiry}</Text>
                    </HStack>
                    <HStack
                      style={{
                        borderWidth: 1,
                        borderColor: colors.gray,
                      }}>
                      <View
                        width={'45%'}
                        style={{
                          borderRightWidth: 2,
                          borderRightColor: colors.gray,
                        }}>
                        <Text>Allocation %</Text>
                      </View>
                      <Text>{element.allocation}</Text>
                    </HStack>
                  </View>
                );
              })}
            </FormControl>

            <Block row justify="center" marginTop={sizes.sm}>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
              DECLARATION
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                PUBLIC FIGURE/POLITICALLY EXPOSED PERSON
              </FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                onChange={(value) => {
                  handleChange({Declaration_Public: value});
                }}>
                <HStack>
                  <Radio value={1} my={1}>
                    Yes
                  </Radio>
                  <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                    No
                  </Radio>
                </HStack>
              </Radio.Group>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                ARE YOU/YOUR FAMILY MEMBERS OR CLOSE ASSOCIATE OF ANY PUBLIC
                FIGURE/POLITICALLY EXPOSED PERSON?
              </FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                onChange={(value) => {
                  handleChange({Declaration_Associate: value});
                }}>
                <HStack>
                  <Radio value={1} my={1}>
                    Yes
                  </Radio>
                  <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                    No
                  </Radio>
                </HStack>
              </Radio.Group>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                NAME OF ULTIMATE BENEFICIARY
              </FormControl.Label>
              <Input
                placeholder="Enter Name of Ultimate Beneficiary"
                onChangeText={(value) =>
                  handleChange({Declaration_Ultimate: value})
                }
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                RELATIONSHIP WITH THE CUSTOMER
              </FormControl.Label>
              <Input
                placeholder="Enter Relationship with Customer"
                onChangeText={(value) =>
                  handleChange({Declaration_Relationship: value})
                }
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                CNIC/NICOP/PASSPORT NUMBER
              </FormControl.Label>
              <Input
                placeholder="Enter CNIC/NICOP/Passport Number"
                keyboardType="numeric"
                onChangeText={(value) =>
                  handleChange({Declaration_CNIC: value})
                }
              />
              <FormControl.Label marginTop={sizes.xs} isRequired>
                ISSUANCE DATE
              </FormControl.Label>

              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={() => showDatePicker(4)}
                primary>
                <Text white>Select Issuance Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />

              <FormControl.Label marginTop={sizes.xs} isRequired>
                EXPIRY DATE
              </FormControl.Label>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={() => showDatePicker(5)}
                primary>
                <Text white>Select Issuance Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </FormControl>
            <Block row justify="center" marginTop={sizes.sm}>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
              Upload Documents
            </Text>
            <FormControl marginTop={sizes.xs}>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                SOURCE OF INCOME
              </FormControl.Label>

              <Button onPress={pickImage} primary>
                <Text white>Upload Image</Text>
              </Button>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                W-9 FORM
              </FormControl.Label>

              <Button onPress={pickImage} primary>
                <Text white>Upload Image</Text>
              </Button>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                EMPLOYMENT PROOF
              </FormControl.Label>

              <Button onPress={pickImage} primary>
                <Text white>Upload Image</Text>
              </Button>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                CNIC
              </FormControl.Label>

              <Button onPress={pickImage} primary>
                <Text white>Upload Image</Text>
              </Button>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                W-8 FORM
              </FormControl.Label>

              <Button onPress={pickImage} primary>
                <Text white>Upload Image</Text>
              </Button>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                DIGITAL SIGNATURE
              </FormControl.Label>

              <Button onPress={pickImage} primary>
                <Text white>Upload Image</Text>
              </Button>
            </FormControl>
            <Block row justify="center" marginTop={sizes.sm}>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
          <>
            <Block marginVertical={sizes.sm} card>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                <Text
                  bold
                  size={16}
                  width={'45%'}
                  marginBottom={sizes.sm}
                  marginTop={sizes.s}>
                  Basic Details
                </Text>
              </View>
              <FormControl marginTop={sizes.xs}>
                <FormControl.Label isRequired>ACCOUNT TYPE</FormControl.Label>
                <Text>{registration_KYC_3.Basic_Account_Type}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  NAME (MR./MS./MRS.)
                </FormControl.Label>
                <Text>{registration_KYC_3.Bank_Name}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  FATHER'S/HUSBAND'S NAME
                </FormControl.Label>
                <Text>{registration_KYC_3.Basic_Father_Name}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  MOTHER'S NAME
                </FormControl.Label>
                <Text>{registration_KYC_3.Basic_Mother_Name}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  CNIC/NICOP/ARC/POC/PASSPORT NUMBER
                </FormControl.Label>
                <Text>{registration_KYC_3.Basic_CNIC_NO}</Text>
              </FormControl>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                ISSUANCE DATE
              </FormControl.Label>
              <Text>{registration_KYC_3.IssueDate}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                EXPIRY DATE
              </FormControl.Label>
              <Text>{registration_KYC_3.ExpiryDate}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                PLACE OF BIRTH
              </FormControl.Label>
              <Text>{registration_KYC_3.Basic_Place_Birth}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                DATE OF BIRTH
              </FormControl.Label>
              <Text>{registration_KYC_3.DOB}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                GENDER
              </FormControl.Label>
              <Text>
                {registration_KYC_3.Basic_Gender === 1
                  ? 'MALE'
                  : registration_KYC_3.Basic_Gender === 2
                  ? 'FEMALE'
                  : ''}
              </Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                RELIGION
              </FormControl.Label>
              <Text>{registration_KYC_3.Basic_Religion}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                ZAKAT DEDUCTION
              </FormControl.Label>
              <Text>{registration_KYC_3.Basic_Zakat === 1 ? 'Yes' : 'No'}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                MOBILE NUMBER
              </FormControl.Label>
              <Text>{registration_KYC_3.Basic_Phone_No}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                WHATSAPP NUMBER
              </FormControl.Label>
              <Text>{registration_KYC_3.Basic_Whatsapp}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                CONTACT NUMBER (RESIDENCE)
              </FormControl.Label>
              <Text>{registration_KYC_3.Basic_Phone_Residance}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                OFFICE CONTACT NUMBER
              </FormControl.Label>
              <Text>{registration_KYC_3.Basic_Phone_Office}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                RESIDENIAL STATUS
              </FormControl.Label>
              <Text>
                {registration_KYC_3.Basic_Residential_Status === 1
                  ? 'Yes'
                  : 'No'}
              </Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                CORRESPONDENCE ADDRESS
              </FormControl.Label>
              <Text>{registration_KYC_3.Basic_Corresponding_Address}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                OCCUPATION
              </FormControl.Label>
              <Text>
                {registration_KYC_3.Basic_Occupation === 1 ? 'Yes' : 'No'}
              </Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                SOURCE OF FUND
              </FormControl.Label>
              <Text marginBottom={sizes.sm}>
                {registration_KYC_3.Basic_Source_Fund}
              </Text>
            </Block>

            <Block marginVertical={sizes.sm} card>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                <Text bold size={16} marginBottom={sizes.sm}>
                  Guardian Details (To be filled in case Principle Account
                  Holder is Minor)
                </Text>
              </View>
              <FormControl marginTop={sizes.xs}>
                <FormControl.Label marginTop={sizes.xs} isRequired>
                  NAME (MR./MS./MRS.)
                </FormControl.Label>
                <Text>{registration_KYC_3.Guardian_Name}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  RELATIONSHIP WITH A MINOR
                </FormControl.Label>
                <Text>{registration_KYC_3.Guardian_Relationship}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  CNIC/NICOP/ARC/POC/PASSPORT NUMBER
                </FormControl.Label>
                <Text>{registration_KYC_3.Guardian_CNIC}</Text>
              </FormControl>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                ISSUANCE DATE
              </FormControl.Label>
              <Text>{registration_KYC_3.Guardian_Issue_Date}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                EXPIRY DATE
              </FormControl.Label>
              <Text marginBottom={sizes.sm}>
                {registration_KYC_3.Guardian_Expiry_Date}
              </Text>
            </Block>

            <Block marginVertical={sizes.sm} card>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                <Text bold size={16} marginBottom={sizes.sm}>
                  Bank Details of Principle Account Holder
                </Text>
              </View>
              <FormControl marginTop={sizes.xs}>
                <FormControl.Label marginTop={sizes.xs} isRequired>
                  BANK ACCOUNT TITLE
                </FormControl.Label>
                <Text>{registration_KYC_3.Bank_Account_Title}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  BANK NAME
                </FormControl.Label>
                <Text>{registration_KYC_3.Bank_Name}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  BRANCH CODE
                </FormControl.Label>
                <Text>{registration_KYC_3.Bank_Branch_Code}</Text>
              </FormControl>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                BRANCH
              </FormControl.Label>
              <Text>{registration_KYC_3.Bank_Branch}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                ADDRESS
              </FormControl.Label>
              <Text>{registration_KYC_3.Bank_Address}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                IBAN
              </FormControl.Label>
              <Text>{registration_KYC_3.Bank_IBAN}</Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                ACCOUNT NO
              </FormControl.Label>
              <Text marginBottom={sizes.sm}>
                {registration_KYC_3.Bank_Account_No}
              </Text>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                WALLET NO
              </FormControl.Label>
              <Text marginBottom={sizes.sm}>
                {registration_KYC_3.Bank_Wallet_No}
              </Text>
            </Block>

            <Block marginVertical={sizes.sm} card>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                <Text bold size={16} marginBottom={sizes.sm}>
                  Statement of Account Delivery Instructions
                </Text>
              </View>

              <FormControl marginTop={sizes.xs}>
                <FormControl.Label marginTop={sizes.xs} isRequired>
                  DO YOU WISH TO RECEIVE STATEMENT OF ACCOUNTS?
                </FormControl.Label>
                <Text>
                  {registration_KYC_3.Statement_Wish === 1 ? 'Yes' : 'No'}
                </Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  (IF YES', PLEASE SELECT THE NATURE OF MAIL)
                </FormControl.Label>
                <Text>{registration_KYC_3.Statement_Nature}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  FOR ALL CORRESPONDENCE
                </FormControl.Label>
                <Text marginBottom={sizes.sm}>
                  {registration_KYC_3.Statement_Correspondence}
                </Text>
              </FormControl>
            </Block>

            <Block marginVertical={sizes.sm} card>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                <Text bold size={16} marginBottom={sizes.sm}>
                  DISTRIBUTION PAYOUT INSTRUCTION
                </Text>
              </View>

              <FormControl marginTop={sizes.xs}>
                <FormControl.Label marginTop={sizes.xs} isRequired>
                  CASH DIVIDEND
                </FormControl.Label>
                <Text>
                  {registration_KYC_3.Distribution_Cash === 1 ? 'Yes' : 'No'}
                </Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  STOCK DIVIDEND
                </FormControl.Label>
                <Text marginBottom={sizes.sm}>
                  {registration_KYC_3.Distribution_Stock === 1 ? 'Yes' : 'No'}
                </Text>
              </FormControl>
            </Block>

            <Block marginVertical={sizes.sm} card>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                <Text bold size={16} marginBottom={sizes.sm}>
                  NOMINEE DETAILS (OPTIONAL)
                </Text>
              </View>

              <FormControl marginTop={sizes.xs} marginBottom={sizes.s}>
                {Nominee_Details?.map((element) => {
                  return (
                    <View>
                      <HStack
                        style={{
                          marginTop: sizes.sm,
                          borderWidth: 1,
                          borderColor: colors.gray,
                        }}>
                        <View
                          width={'45%'}
                          style={{
                            borderRightWidth: 2,
                            borderRightColor: colors.gray,
                          }}>
                          <Text
                            style={{
                              borderRightWidth: 3,
                            }}>
                            Name
                          </Text>
                        </View>
                        <Text>{element.name}</Text>
                      </HStack>
                      <HStack
                        style={{
                          borderWidth: 1,
                          borderColor: colors.gray,
                        }}>
                        <View
                          width={'45%'}
                          style={{
                            borderRightWidth: 2,
                            borderRightColor: colors.gray,
                          }}>
                          <Text>Relationship</Text>
                        </View>
                        <Text>{element.relationship}</Text>
                      </HStack>
                      <HStack
                        style={{
                          borderWidth: 1,
                          borderColor: colors.gray,
                        }}>
                        <View
                          width={'45%'}
                          style={{
                            borderRightWidth: 2,
                            borderRightColor: colors.gray,
                          }}>
                          <Text>CNIC</Text>
                        </View>
                        <Text>{element.cnic}</Text>
                      </HStack>
                      <HStack
                        style={{
                          borderWidth: 1,
                          borderColor: colors.gray,
                        }}>
                        <View
                          width={'45%'}
                          style={{
                            borderRightWidth: 2,
                            borderRightColor: colors.gray,
                          }}>
                          <Text>Issuance Date</Text>
                        </View>
                        <Text>{element.issuance}</Text>
                      </HStack>
                      <HStack
                        style={{
                          borderWidth: 1,
                          borderColor: colors.gray,
                        }}>
                        <View
                          width={'45%'}
                          style={{
                            borderRightWidth: 2,
                            borderRightColor: colors.gray,
                          }}>
                          <Text>Expiry Date</Text>
                        </View>
                        <Text>{element.expiry}</Text>
                      </HStack>
                      <HStack
                        style={{
                          borderWidth: 1,
                          borderColor: colors.gray,
                        }}>
                        <View
                          width={'45%'}
                          style={{
                            borderRightWidth: 2,
                            borderRightColor: colors.gray,
                          }}>
                          <Text>Allocation %</Text>
                        </View>
                        <Text>{element.allocation}</Text>
                      </HStack>
                    </View>
                  );
                })}
              </FormControl>
            </Block>

            <Block marginVertical={sizes.sm} card>
              <View
                style={{borderBottomWidth: 1, borderBottomColor: colors.gray}}>
                <Text bold size={16} marginBottom={sizes.sm}>
                  DECLARATION
                </Text>
              </View>

              <FormControl marginTop={sizes.xs}>
                <FormControl.Label marginTop={sizes.xs} isRequired>
                  PUBLIC FIGURE/POLITICALLY EXPOSED PERSON
                </FormControl.Label>
                <Text>
                  {registration_KYC_3.Declaration_Public === 1 ? 'Yes' : 'No'}
                </Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  ARE YOU/YOUR FAMILY MEMBERS OR CLOSE ASSOCIATE OF ANY PUBLIC
                  FIGURE/POLITICALLY EXPOSED PERSON?
                </FormControl.Label>
                <Text>
                  {registration_KYC_3.Declaration_Associate === 1
                    ? 'Yes'
                    : 'No'}
                </Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  NAME OF ULTIMATE BENEFICIARY
                </FormControl.Label>
                <Text>{registration_KYC_3.Declaration_Ultimate}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  RELATIONSHIP WITH THE CUSTOMER
                </FormControl.Label>
                <Text>{registration_KYC_3.Declaration_Relationship}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  CNIC/NICOP/PASSPORT NUMBER
                </FormControl.Label>
                <Text>{registration_KYC_3.Declaration_CNIC}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  ISSUANCE DATE
                </FormControl.Label>
                <Text>{registration_KYC_3.Declaration_Issue}</Text>

                <FormControl.Label marginTop={sizes.xs} isRequired>
                  EXPIRY DATE
                </FormControl.Label>
                <Text marginBottom={sizes.sm}>
                  {registration_KYC_3.Declaration_Expiry}
                </Text>
              </FormControl>
            </Block>

            <Block
              row
              justify="center"
              marginTop={sizes.sm}
              marginBottom={sizes.sm}>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
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
          </>
        )}
      </Block>
    </ScrollView>
  );
}
