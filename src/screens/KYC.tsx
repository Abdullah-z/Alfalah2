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
  Heading,
  Slider,
  Modal,
  VStack,
} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Timeline from 'react-native-timeline-flatlist';

// KYC 1
interface Information {
  Name: string;
  Father_Name: string;
  Mother_Name: string;
  Gender: number;
  DOB: string;
  //Residental
  Permanent_Resident_Pakistan: number;
  Nationality: number;
  Country_Residence: number;
  Any_Other_Nationality: number; // Nationality
  US_Green_Card: number;
  US_Resident: number;
  Tax_Resident_Pakistan_US: number;
  //Contact
  Address: string;
  Correspondance_Address: string;
  City: number;
  State: number;
  Postal_Code: number;
  Country_Code: number;
  Phone_Number: number;
  Tel_No_Res: number;
  Tel_No_Off: number;
  Fax: number;
  Whatsapp_No: number;
  Email: string;
  //Tax
  Tax_Status: number;
  NTN: number;
  Religion: number; // remaining
  Zakat_Deduction: string; // remaining
  // Bank
  Bank_Name: number;
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
  Account_Operate_Account: number;
  Account_Others: string;
  Account_Cash_Dividend: number;
  Account_Stock_Divident: number;
  Account_Statement_Wish: number;
  Account_Statement_Yes_Mail: string;
  Account_All_Other_Correspondence: string;
}

// KYC 2
interface Information_KYC_2 {
  Professional_Education: number;
  Professional_Industry: number;
  Professional_Occupation: number;
  Professional_Source_Funds: number;
  Professional_Nature_Employer_Business: string;
  Professional_Geographics: string;
  Professional_Types_Counter_Parts: string;
  Professional_Business_Relationship: string;
  Professional_Modes_Transaction: string;
  // Transaction Details
  Transaction_Expected: number;
  Transaction_Annual: number;
  Transaction_TurnOver: number;
  // Declaration By Customer
  Declaration_Financial_Institution: number;
  Declaration_OnBehalf: number;
  Declaration_Govt_Position: number;
  Declaration_Political_Position: number;
  //PEP Declaration
  Pep_Public_Position: number;
  Pep_Public_Position_Last_12: number;
  Pep_Ever_Public_Position: number;
  Pep_Diplomatic_Position: number;
  Pep_Relative_Public_Position_Last_12: number;
  Pep_Close_Associate_Public_Position_Last_12: number;
  Pep_Conviction: number;
  Pep_Any_Yes: string;
  //Ultimate Beneficiary (if applicable)
  Ultimate_Beneficiary: string;
  Ultimate_RelationShip: string;
  Ultimate_CNIC: number;
  // FATCA
  Fatca_Account_Title: string;
  Fatca_CNIC: number;
  Fatca_Residence_than_Pak: number;
  Fatca_Place_Birth: string;
  Fatca_US_Citizen: number;
  Fatca_US_PhoneNumber: string;
  Fatca_US_Resident: number;
  Fatca_Green_Card: number;
  Fatca_Transfer_Fund: number;
  Fatca_Power: number;
  // Fatca_Account_Title: string;
  Fatca_US_Mail_Address: number;
  Fatca_Phone_Number: number;
  Fatca_US_Taxpayer_ID: number;
  // CRS
  CRS_Tax_Residence_1: number;
  CRS_Tin_1: string;
  CRS_Reason_1: number;
  CRS_Extended_Reason_1: string;
  CRS_Tax_Residence_2: number;
  CRS_Tin_2: string;
  CRS_Reason_2: number;
  CRS_Extended_Reason_2: string;
  CRS_Tax_Residence_3: number;
  CRS_Tin_3: string;
  CRS_Reason_3: number;
  CRS_Extended_Reason_3: string;
}

export default function KYC() {
  // KYC 1
  const [registration, setRegistration] = useState<Information>({
    Name: '',
    Father_Name: '',
    Mother_Name: '',
    Gender: null,
    DOB: '',
    //Residental
    Permanent_Resident_Pakistan: null,
    Nationality: null,
    Country_Residence: null,
    Any_Other_Nationality: null,
    US_Green_Card: null,
    US_Resident: null,
    Tax_Resident_Pakistan_US: null,
    //Contact
    Address: '',
    Correspondance_Address: '',
    City: null,
    State: null,
    Postal_Code: null,
    Country_Code: null,
    Phone_Number: null,
    Tel_No_Res: null,
    Tel_No_Off: null,
    Fax: null,
    Whatsapp_No: null,
    Email: '',
    // Tax
    Tax_Status: null,
    NTN: null,
    Religion: null, // remaining
    Zakat_Deduction: '', // remaining
    // Bank
    Bank_Name: null,
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

    Account_Operate_Account: null,
    Account_Others: null,
    Account_Cash_Dividend: null,
    Account_Stock_Divident: null,
    Account_Statement_Wish: null,
    Account_Statement_Yes_Mail: '',
    Account_All_Other_Correspondence: '',
  });

  const [image, setImage] = useState(null);
  const [step, setStep] = useState(1);

  console.log('Registration_KYC_1 : ' + JSON.stringify(registration));

  const [isLifetimeExpiry, setIsLifetimeExpiry] = useState(false);
  const [zakat, setZakat] = useState(false);
  const [isOtherNationalities, setIsOtherNationalities] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [dob, setDob] = useState('');
  const [account_Statement, setAccount_Statement] = useState(false);
  console.log('Date: ' + dob);
  const [showModal, setShowModal] = useState(false);
  const [showModal_Risk, setShowModal_Risk] = useState(true);

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

  const handleConfirm_Nominee_Issue = (date) => {
    const var_date = JSON.stringify(date).substring(0, 11);
    const final_date = var_date.split('-').reverse().join('-');
    console.warn('---- A date has been picked: ', final_date);
    handleChange({Nominee_CNIC_Issuance_Date: final_date});
    hideDatePicker();
  };

  const handleConfirm_Nominee_Expiry = (date) => {
    const var_date = JSON.stringify(date).substring(0, 11);
    const final_date = var_date.split('-').reverse().join('-');
    console.warn('---- A date has been picked: ', final_date);
    handleChange({Nominee_CNIC_Expiry_Date: final_date});
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

  // KYC 2

  const {assets, colors, fonts, gradients, sizes} = useTheme();
  // for Pep Declaration Screen
  const [pepDeclaration, setPepDeclaration] = useState(0);

  const [pep_1, setPep_1] = useState(0);
  const [pep_2, setPep_2] = useState(0);
  const [pep_3, setPep_3] = useState(0);
  const [pep_4, setPep_4] = useState(0);
  const [pep_5, setPep_5] = useState(0);
  const [pep_6, setPep_6] = useState(0);
  const [pep_7, setPep_7] = useState(0);

  //FATCA Details
  const [fatca_Residence, setFatca_Residence] = useState(0);

  //Tax Residence
  const [taxResidence, setTaxResidence] = useState(0);
  const [taxResidence2, setTaxResidence2] = useState(0);
  const [taxResidence3, setTaxResidence3] = useState(0);

  // Risk Profile Questionnaire
  const [risk, setRisk] = useState(0);
  const [risk1, setRisk1] = useState(0);
  const [risk2, setRisk2] = useState(0);
  const [risk3, setRisk3] = useState(0);
  const [risk4, setRisk4] = useState([]);
  const [risk5, setRisk5] = useState(0);

  const [sliderValue, setSliderValue] = useState(0);

  const [slider_Text, setSlider_Text] = useState('');

  // console.log(risk + risk1 + risk2 + risk3 + risk4 + risk5);

  console.log(
    'value of Risk : ' +
      risk +
      risk1 +
      risk2 +
      risk3 +
      '--' +
      risk4 +
      '--' +
      risk5,
  );
  const [registration_KYC_2, setRegistration_KYC_2] =
    useState<Information_KYC_2>({
      Professional_Education: null,
      Professional_Industry: null,
      Professional_Occupation: null,
      Professional_Source_Funds: null,
      Professional_Nature_Employer_Business: '',
      Professional_Geographics: '',
      Professional_Types_Counter_Parts: '',
      Professional_Business_Relationship: '',
      Professional_Modes_Transaction: '',
      // Transaction Details
      Transaction_Expected: null,
      Transaction_Annual: null,
      Transaction_TurnOver: null,
      // Declaration By Customer
      Declaration_Financial_Institution: null,
      Declaration_OnBehalf: null,
      Declaration_Govt_Position: null,
      Declaration_Political_Position: null,
      //PEP Declaration
      Pep_Public_Position: null,
      Pep_Public_Position_Last_12: null,
      Pep_Ever_Public_Position: null,
      Pep_Diplomatic_Position: null,
      Pep_Relative_Public_Position_Last_12: null,
      Pep_Close_Associate_Public_Position_Last_12: null,
      Pep_Conviction: null,
      Pep_Any_Yes: '',
      //Ultimate Beneficiary (if applicable)
      Ultimate_Beneficiary: '',
      Ultimate_RelationShip: '',
      Ultimate_CNIC: null,
      // FATCA
      Fatca_Account_Title: '',
      Fatca_CNIC: null,
      Fatca_Residence_than_Pak: null,
      Fatca_Place_Birth: '',
      Fatca_US_PhoneNumber: null,
      Fatca_US_Citizen: null,
      Fatca_US_Resident: null,
      Fatca_Green_Card: null,
      Fatca_Transfer_Fund: null,
      Fatca_Power: null,
      // Fatca_Account_Title: '',
      Fatca_US_Mail_Address: null,
      Fatca_Phone_Number: null,
      Fatca_US_Taxpayer_ID: null,
      // CRS
      CRS_Tax_Residence_1: null,
      CRS_Tin_1: '',
      CRS_Reason_1: null,
      CRS_Extended_Reason_1: '',
      CRS_Tax_Residence_2: null,
      CRS_Tin_2: '',
      CRS_Reason_2: null,
      CRS_Extended_Reason_2: '',
      CRS_Tax_Residence_3: null,
      CRS_Tin_3: '',
      CRS_Reason_3: null,
      CRS_Extended_Reason_3: '',
    });

  const handleChange_KYC_2 = useCallback(
    (value) => {
      setRegistration_KYC_2((state) => ({...state, ...value}));
    },
    [setRegistration_KYC_2],
  );

  console.log('Life :  ' + isLifetimeExpiry);
  console.log('Registration_KYC_2  : ' + JSON.stringify(registration_KYC_2));

  const Risk_Modal = () => {
    console.log('Modal: ' + showModal_Risk);

    return (
      <Modal isOpen={showModal_Risk} onClose={() => showModal_Risk(false)}>
        <Modal.Content width={sizes.lg} style={{padding: sizes.xs}}>
          <Modal.Header height={sizes.sm}>
            <Modal.CloseButton size={sizes.x} />
          </Modal.Header>

          <Modal.Body>
            <FormControl>
              <Heading>Thank You!</Heading>
              <FormControl.Label>
                On the basis of the survey, you can bear Medium Risk and
                following products are recommended for you:
              </FormControl.Label>
              <View
                height={sizes.l}
                style={{borderWidth: 2, borderColor: 'black'}}
              />
              <FormControl.Label>
                However using the slider, you can increase your risk and the
                product range
              </FormControl.Label>
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
                setShowModal_Risk(false);
              }}>
              <Text white>OK</Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
  };

  // <FormControl.Label marginTop={sizes.xs} isRequired>
  //   OCCUPATION
  // </FormControl.Label>;
  const Risk_Slider = () => {
    return (
      <View marginTop={sizes.sm}>
        <Text bold>
          {sliderValue === 0
            ? 'Very Low Risk'
            : sliderValue === 1
            ? 'Low Risk'
            : sliderValue === 2
            ? 'Moderate Risk'
            : sliderValue === 3
            ? 'Medium Risk'
            : sliderValue === 4
            ? 'high Risk'
            : console.log('Noice')}
        </Text>
        <Slider
          width={sizes.l}
          colorScheme="cyan"
          minValue={0}
          maxValue={4}
          value={sliderValue}
          step={1}
          onChange={(v) => setSliderValue(v)}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </View>
    );
  };

  return (
    // KYC 1
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
                <Select.Item label="UX Research" value={1} />
                <Select.Item label="Web Development" value={2} />
                <Select.Item label="Cross Platform Development" value={3} />
                <Select.Item label="UI Designing" value={4} />
                <Select.Item label="Backend Development" value={5} />
              </Select>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                DOCUMENT SCAN COPY
              </FormControl.Label>
              <Button onPress={pickImage} primary>
                <Text white>Upload Image</Text>
              </Button>
              <FormControl.Label marginTop={sizes.xs} isRequired>
                ID DOCUMENT BACK SCAN COPY
              </FormControl.Label>
              <Button onPress={pickImage} marginBottom={sizes.xs} primary>
                <Text white>Upload Image</Text>
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
              <Select.Item label="UX Research" value={1} />
              <Select.Item label="Web Development" value={2} />
              <Select.Item label="Cross Platform Development" value={3} />
              <Select.Item label="UI Designing" value={4} />
              <Select.Item label="Backend Development" value={5} />
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
                onPress={showDatePicker}
                primary>
                <Text white>Select Date</Text>
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
                onPress={
                  isLifetimeExpiry == true ? console.log('') : showDatePicker
                }
                color={
                  isLifetimeExpiry == true ? colors.secondary : colors.primary
                }>
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
              DATE OF BIRTH
            </FormControl.Label>
            <View>
              <Button
                isDisabled={isLifetimeExpiry}
                color={
                  isLifetimeExpiry == true ? colors.secondary : colors.primary
                }
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                onPress={
                  isLifetimeExpiry == true ? console.log('') : showDatePicker
                }>
                <Text white>Select Date</Text>
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
              <Select.Item label="UX Research" value={1} />
              <Select.Item label="Web Development" value={2} />
              <Select.Item label="Cross Platform Development" value={3} />
              <Select.Item label="UI Designing" value={4} />
              <Select.Item label="Backend Development" value={5} />
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
              <Select.Item label="Male" value={1} />
              <Select.Item label="Female" value={2} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              RELIGION
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Religion"
              onValueChange={(v) => handleChange({Religion: v})}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Muslim" value={1} />
              <Select.Item label="Non-Muslim" value={2} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ZAKAT DEDUCTION
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) => {
                handleChange({Zakat_Deduction: value});
              }}>
              <HStack>
                <Radio value="Yes" my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="No" my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

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
              <Select.Item label="UX Research" value={1} />
              <Select.Item label="Web Development" value={2} />
              <Select.Item label="Cross Platform Development" value={3} />
              <Select.Item label="UI Designing" value={4} />
              <Select.Item label="Backend Development" value={5} />
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
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
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
              <Select.Item label="Male" value={1} />
              <Select.Item label="Female" value={2} />
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
              <Select.Item label="Male" value={1} />
              <Select.Item label="Female" value={2} />
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
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              SPECIFY OTHER NATIONALITIES (IF APPLICABLE)?
            </FormControl.Label>
            <Input
              placeholder="Enter Nationalities"
              isDisabled={isOtherNationalities == 1 ? false : true}
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
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
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
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
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
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

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
              onChangeText={(value) =>
                handleChange({Correspondance_Address: value})
              }
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
              onValueChange={(value) => handleChange({City: value})}>
              <Select.Item label="Male" value={1} />
              <Select.Item label="Female" value={2} />
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
              onValueChange={(value) => handleChange({State: value})}>
              <Select.Item label="Male" value={1} />
              <Select.Item label="Female" value={2} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ZIP CODE / POSTAL CODE
            </FormControl.Label>
            <Input
              placeholder="Enter Zip Code/ Postal Code"
              keyboardType="numeric"
              onChangeText={(value) =>
                handleChange({Postal_Code: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TEL NO. (RES)
            </FormControl.Label>
            <Input
              placeholder="Enter Tel No.(Res)"
              keyboardType="numeric"
              onChangeText={(value) =>
                handleChange({Tel_No_Res: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TEL NO. (OFF)
            </FormControl.Label>
            <Input
              placeholder="Enter Tel No.(OFF)"
              keyboardType="numeric"
              onChangeText={(value) =>
                handleChange({Tel_No_Off: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              FAX
            </FormControl.Label>
            <Input
              placeholder="Enter Fax"
              keyboardType="numeric"
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
                  <Select.Item label="Pakistan" value={1} />
                  <Select.Item label="England" value={2} />
                </Select>
              </View>
              <Block width={'70%'}>
                <Input
                  minW={'70%'}
                  keyboardType="numeric"
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
              keyboardType="numeric"
              onChangeText={(value) =>
                handleChange({Whatsapp_No: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              EMAIL
            </FormControl.Label>
            <Input
              placeholder="Enter Email Address"
              keyboardType="email-address"
              onChangeText={(value) => handleChange({Email: value})}
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
                <Radio value={1} my={1}>
                  Filer
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                  Non-Filer
                </Radio>
              </HStack>
            </Radio.Group>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              NATIONAL TAX NO. (NTN)
            </FormControl.Label>
            {/* <Input
              placeholder="Enter the NTN "
              onChangeText={(v) => handleChange({NTN: v})}
            /> */}
            <Input
              placeholder="Enter NTN"
              keyboardType="numeric"
              onChangeText={(value) => {
                handleChange({NTN: value});
              }}></Input>
            {/* <Input
              placeholder="Enter NTN---"
              onChangeText={(value) => {
                handleChange({NTN: value});
              }}
            /> */}
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
        ) : step === 6 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Bank Details
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              IBAN/Account No:
            </FormControl.Label>
            <Input
              placeholder="Enter Account Number/IBAN"
              keyboardType="numeric"
              onChangeText={(value) =>
                handleChange({Bank_IBAN_Account_No: value})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BANK ACCOUNT TITLE
            </FormControl.Label>
            <Input
              placeholder="Enter Account Number Title"
              onChangeText={(value) =>
                handleChange({Bank_Account_Title: value})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BANK NAME
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="120"
              accessibilityLabel="Select State"
              placeholder="Select Bank Name"
              onValueChange={(v) => handleChange({Bank_Name: v})}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value={1} />
              <Select.Item label="Female" value={2} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BRANCH
            </FormControl.Label>
            <Input
              placeholder="Enter Branch"
              onChangeText={(value) => handleChange({Bank_Branch: value})}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BRANCH CODE
            </FormControl.Label>
            <Input
              placeholder="Enter Branch Code"
              onChangeText={(value) => handleChange({Bank_Branch_Code: value})}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ADDRESS
            </FormControl.Label>
            <Input
              placeholder="Enter Address"
              onChangeText={(value) =>
                handleChange({Bank_Branch_Address: value})
              }
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
        ) : step === 7 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Nominee Details (Optional)
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              NAME (MR./MS./MRS.)
            </FormControl.Label>
            <Input
              placeholder="Enter Name(MR./MS./MRS.)"
              onChangeText={(value) => handleChange({Nominee_Name: value})}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              RELATIONSHIP WITH INVESTOR
            </FormControl.Label>
            <Input
              placeholder="Enter Relationship With Investor"
              onChangeText={(value) =>
                handleChange({Nominee_Relationship_Investor: value})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CNIC/NICOP NO.
            </FormControl.Label>
            <Input
              placeholder="Enter CNIC/NICOP NO"
              keyboardType="numeric"
              onChangeText={(value) =>
                handleChange({Nominee_CNIC: parseInt(value)})
              }
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ISSUANCE DATE
            </FormControl.Label>
            <View>
              <Button
                marginHorizontal={sizes.xs}
                style={{borderWidth: 1}}
                primary
                onPress={showDatePicker}>
                <Text white>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm_Nominee_Issue}
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
                primary
                onPress={showDatePicker}>
                <Text white>Select Date</Text>
              </Button>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm_Nominee_Expiry}
                onCancel={hideDatePicker}
              />
            </View>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ALLOCATION %
            </FormControl.Label>
            <Input
              value="100"
              isDisabled
              onChangeText={(value) =>
                handleChange({Nominee_Allocation: value})
              }
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
              onValueChange={(v) => handleChange({Account_Operate_Account: v})}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="Male" value={1} />
              <Select.Item label="Female" value={2} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CASH DIVIDEND:
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) =>
                handleChange({Account_Cash_Dividend: value})
              }>
              <HStack>
                <Radio value={1} onChange={setZakat} my={1}>
                  Re-Invest
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
                  Provide Cash
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              STOCK DIVIDEND:
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) =>
                handleChange({Account_Stock_Divident: value})
              }>
              <Radio value={1} onChange={setZakat} my={1}>
                Issue Bonus Units
              </Radio>
              <Radio value={2} my={1}>
                Encash Bonus Units
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU WISH TO RECEIVE STATEMENT OF ACCOUNTS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(value) => {
                handleChange({Account_Statement_Wish: value});
                {
                  value == 1
                    ? setAccount_Statement(false)
                    : setAccount_Statement(true);
                }
              }}>
              <Radio value={1} my={1}>
                Yes
              </Radio>
              <Radio value={2} my={1}>
                No
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              (IF YES, PLEASE SELECT THE NATURE OF MAIL)
            </FormControl.Label>

            <Checkbox.Group
              isDisabled={account_Statement}
              onChange={(v) => handleChange({Account_Statement_Yes_Mail: v})}
              accessibilityLabel="choose numbers">
              <Checkbox onChange={setIsLifetimeExpiry} value={'Post'}>
                Post
              </Checkbox>
              <Checkbox value={'Email'} onChange={setIsLifetimeExpiry}>
                Email
              </Checkbox>
            </Checkbox.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              FOR ALL OTHER CORRESPONDENCE:
            </FormControl.Label>

            <Checkbox.Group
              accessibilityLabel="choose numbers"
              onChange={(v) =>
                handleChange({Account_All_Other_Correspondence: v})
              }>
              <Checkbox value={'SMS'} onChange={setIsLifetimeExpiry}>
                SMS
              </Checkbox>
              <Checkbox value={'Email'} onChange={setIsLifetimeExpiry}>
                Email
              </Checkbox>
            </Checkbox.Group>

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
                onPress={() => setStep(step + 2)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 10 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Professional Details
            </Text>

            <FormControl marginTop={sizes.xs}>
              <FormControl.Label isRequired>EDUCATION</FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                onChange={(value) =>
                  handleChange_KYC_2({Professional_Education: value})
                }>
                <Radio value={1} my={1}>
                  UnderGraduate
                </Radio>
                <Radio value={2} my={1}>
                  Graduate
                </Radio>
                <Radio value={3} my={1}>
                  PostGraduate
                </Radio>
                <Radio value={4} my={1}>
                  Professional
                </Radio>
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Professional_Industry: v});
                }}>
                <Select.Item label="UX Research" value={1} />
                <Select.Item label="Web Development" value={2} />
                <Select.Item label="Cross Platform Development" value={3} />
                <Select.Item label="UI Designing" value={4} />
                <Select.Item label="Backend Development" value={5} />
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Professional_Occupation: v});
                }}>
                <Select.Item label="UX Research" value={1} />
                <Select.Item label="Web Development" value={2} />
                <Select.Item label="Cross Platform Development" value={3} />
                <Select.Item label="UI Designing" value={4} />
                <Select.Item label="Backend Development" value={5} />
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Professional_Source_Funds: v});
                }}>
                <Select.Item label="UX Research" value={1} />
                <Select.Item label="Web Development" value={2} />
                <Select.Item label="Cross Platform Development" value={3} />
                <Select.Item label="UI Designing" value={4} />
                <Select.Item label="Backend Development" value={5} />
              </Select>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                NATURE OF EMPLOYER / BUSINESS
              </FormControl.Label>
              <Input
                placeholder="Enter Nature of Employer / Business"
                onChangeText={(v) => {
                  handleChange_KYC_2({
                    Professional_Nature_Employer_Business: v,
                  });
                }}
              />

              <FormControl.Label marginTop={sizes.xs} isRequired>
                GEOGRAPHIES INVOLVED (DOMESTIC):
              </FormControl.Label>

              <Checkbox.Group
                onChange={(v) =>
                  handleChange_KYC_2({Professional_Geographics: v})
                }>
                <Checkbox value="Sindh">Sindh</Checkbox>
                <Checkbox value="Punjab">Punjab</Checkbox>
                <Checkbox value="KPK">KPK</Checkbox>
                <Checkbox value="Baloch">Balochistan</Checkbox>
                <Checkbox value="Azad">Azad Kashmir</Checkbox>
                <Checkbox value="Gilgit">Gilgit Baltistan</Checkbox>
              </Checkbox.Group>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                TYPE OF COUNTER PARTIES (DOMESTIC):
              </FormControl.Label>
              <Checkbox.Group
                onChange={(v) =>
                  handleChange_KYC_2({Professional_Types_Counter_Parts: v})
                }>
                <Checkbox value="Sindh">Sindh</Checkbox>
                <Checkbox value="Punjab">Punjab</Checkbox>
                <Checkbox value="KPK">KPK</Checkbox>
                <Checkbox value="Baloch">Balochistan</Checkbox>
                <Checkbox value="Azad">Azad Kashmir</Checkbox>
                <Checkbox value="Gilgit">Gilgit Baltistan</Checkbox>
              </Checkbox.Group>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                PURPOSE AND INTENDED NATURE OF BUSINESS RELATIONSHIP:
              </FormControl.Label>
              <Checkbox.Group
                onChange={(v) =>
                  handleChange_KYC_2({Professional_Business_Relationship: v})
                }>
                <Checkbox>Investment & Savings</Checkbox>
              </Checkbox.Group>

              <FormControl.Label marginTop={sizes.xs} isRequired>
                POSSIBLE MODES OF TRANSCATIONS / DELIVERY CHANNELS:
              </FormControl.Label>

              <Checkbox.Group
                onChange={(v) =>
                  handleChange_KYC_2({Professional_Modes_Transaction: v})
                }>
                <Checkbox>Physical</Checkbox>
                <Checkbox>Online</Checkbox>
              </Checkbox.Group>
            </FormControl>
            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                secondary
                onPress={() => setStep(step - 2)}
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
        ) : step === 11 ? (
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Transaction_Expected: v});
                }}>
                <Select.Item label="US 1000" value={1} />
                <Select.Item label="US 5000" value={2} />
                <Select.Item label="US 20000" value={3} />
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Transaction_Annual: v});
                }}>
                <Select.Item label="UX Research" value={1} />
                <Select.Item label="Web Development" value={2} />
                <Select.Item label="Cross Platform Development" value={3} />
                <Select.Item label="UI Designing" value={4} />
                <Select.Item label="Backend Development" value={5} />
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Transaction_TurnOver: v});
                }}>
                <Select.Item label="10 Lakh" value={1} />
                <Select.Item label="5 Lakh" value={2} />
                <Select.Item label="UX Research" value={3} />
                <Select.Item label="Web" value={4} />
                <Select.Item label="Backend Development" value={5} />
              </Select>
            </FormControl>

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
        ) : step === 12 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Declaration by Customer
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              HAS ANY FINANCIAL INSTITUTION EVER REFUSED TO OPEN YOUR ACCOUNT?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Declaration_Financial_Institution: v});
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
              ARE YOU OPENING THIS ACCOUNT ON BEHALF OF ANY OTHER PERSON?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Declaration_OnBehalf: v});
              }}>
              <HStack>
                <Radio value={1} onChange={setZakat} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value={2} my={1}>
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
                handleChange_KYC_2({Declaration_Govt_Position: value});
              }}
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              isDefault="false">
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
              ARE YOU HOLDING A POSITION IN ANY POLITICAL PARTY?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Declaration_Political_Position: v});
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
        ) : step === 13 ? (
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
                setPep_1(nextValue);
                setPepDeclaration(nextValue);
                handleChange_KYC_2({Pep_Public_Position: nextValue});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
                setPep_2(nextValue);
                setPepDeclaration(nextValue);
                handleChange_KYC_2({Pep_Public_Position_Last_12: nextValue});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
                setPep_3(nextValue);
                setPepDeclaration(nextValue);
                handleChange_KYC_2({Pep_Ever_Public_Position: nextValue});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
                setPep_4(nextValue);
                setPepDeclaration(nextValue);
                handleChange_KYC_2({Pep_Diplomatic_Position: nextValue});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
                setPep_5(nextValue);
                setPepDeclaration(nextValue);
                handleChange_KYC_2({
                  Pep_Relative_Public_Position_Last_12: nextValue,
                });
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
                setPep_6(nextValue);
                setPepDeclaration(nextValue);
                handleChange_KYC_2({
                  Pep_Close_Associate_Public_Position_Last_12: nextValue,
                });
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
              onChange={(nextValue) => {
                setPep_7(nextValue);
                setPepDeclaration(nextValue);
                handleChange_KYC_2({
                  Pep_Conviction: nextValue,
                });
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF YOU HAVE ANSWERED "YES" TO ANY OF THE QUESTIONS ABOVE, PLEASE
              PROVIDE DETAILS:
            </FormControl.Label>
            <Input
              numberOfLines={4}
              placeholder="Enter Details"
              isDisabled={
                pep_1 === 1 ||
                pep_2 === 1 ||
                pep_3 === 1 ||
                pep_4 === 1 ||
                pep_5 === 1 ||
                pep_6 === 1 ||
                pep_7 === 1
                  ? false
                  : true
              }
              onChangeText={(v) => {
                handleChange_KYC_2({Pep_Any_Yes: v});
              }}
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
        ) : step === 14 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Ultimate Beneficiary (if applicable)
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              NAME OF ULTIMATE BENEFICIARY
            </FormControl.Label>
            <Input
              placeholder="Enter Name of Ultimate Beneficiary"
              onChangeText={(v) => {
                handleChange_KYC_2({Ultimate_Beneficiary: v});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              RELATIONSHIP WITH THE CUSTOMER
            </FormControl.Label>
            <Input
              placeholder="Enter Relationship with the Customer"
              onChangeText={(v) => {
                handleChange_KYC_2({Ultimate_RelationShip: v});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CNIC/NICOP/PASSPORT NO.
            </FormControl.Label>
            <Input
              placeholder="Enter CNIC/NICOP/Passport No."
              keyboardType="numeric"
              onChangeText={(v) => {
                handleChange_KYC_2({Ultimate_CNIC: v});
              }}
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
        ) : step === 15 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              FATCA Details (if applicable)
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TITLE OF ACCOUNT
            </FormControl.Label>
            <Input
              placeholder="Enter Title of Account"
              onChangeText={(v) => {
                handleChange_KYC_2({Fatca_Account_Title: v});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CNIC NO.
            </FormControl.Label>
            <Input
              placeholder="Enter CNIC NO."
              keyboardType="numeric"
              onChangeText={(v) => {
                handleChange_KYC_2({Fatca_CNIC: v});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE COUNTRY OF TAX RESIDENCE OTHER THAN PAKISTAN?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                setFatca_Residence(v);
                handleChange_KYC_2({Fatca_Residence_than_Pak: v});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              COUNTRY OF TAX RESIDENCE OTHER THAN PAKISTAN
            </FormControl.Label>
            <Select
              isDisabled={fatca_Residence == 1 ? false : true}
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              onValueChange={(v) =>
                handleChange_KYC_2({Fatca_Residence_than_Pak_IF_Yes: v})
              }>
              <Select.Item label="UX Research" value={1} />
              <Select.Item label="Web Development" value={2} />
              <Select.Item label="Cross Platform Development" value={3} />
              <Select.Item label="UI Designing" value={4} />
              <Select.Item label="Backend Development" value={5} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              PLACE OF BIRTH
            </FormControl.Label>
            <Input
              placeholder="Enter Place of Birth"
              onChangeText={(v) => {
                handleChange_KYC_2({Fatca_Place_Birth: v});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              ARE YOU A US CITIZEN?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_US_Citizen: v});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
              onChange={(v) => {
                handleChange_KYC_2({Fatca_US_Resident: v});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HOLD US PERMANENT RESIDENT CARD (GREEN CARD)?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_Green_Card: v});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_Transfer_Fund: v});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
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
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_Power: v});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE US RESIDENCE/MAILING/SOLE HOLD MAIL ADDRESS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_US_Mail_Address: v});
              }}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DO YOU HAVE US TELEPHONE NUMBER?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => handleChange({Fatca_US_PhoneNumber: v})}>
              <HStack>
                <Radio value={1} my={1}>
                  Yes
                </Radio>
                <Radio marginLeft={sizes.sm} value={2} my={1}>
                  No
                </Radio>
              </HStack>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              US TAXPAYER IDENTIFICATION NUMBER
            </FormControl.Label>
            <Input
              placeholder="Enter US Taxpayer Identification Number"
              onChangeText={(v) => {
                handleChange_KYC_2({Fatca_US_Taxpayer_ID: parseInt(v)});
              }}
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
        ) : step === 16 ? (
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
              mt="1"
              onValueChange={(v) => {
                handleChange_KYC_2({CRS_Tax_Residence_1: v});
              }}>
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value={1}
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value={2}
              />
              <Select.Item label="No TIN required" value={3} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TIN OR EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter TIN Or Equivalent"
              onChangeText={(v) => {
                handleChange_KYC_2({CRS_Tin_1: v});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              REASON
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence"
              value={taxResidence}
              onValueChange={(value) => {
                setTaxResidence(value),
                  handleChange_KYC_2({CRS_Reason_1: value});
              }}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value={1}
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value={2}
              />
              <Select.Item label="No TIN required" value={3} />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence == 2 ? false : true}
              onChangeText={(value) => {
                handleChange_KYC_2({CRS_Extended_Reason_1: value});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              COUNTRY OF TAX RESIDENCE #2
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence #2"
              onValueChange={(value) => {
                handleChange_KYC_2({CRS_Tax_Residence_2: value});
              }}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item label="UX Research" value={1} />
              <Select.Item label="Web Development" value={2} />
              <Select.Item label="Cross Platform Development" value={3} />
              <Select.Item label="UI Designing" value={4} />
              <Select.Item label="Backend Development" value={5} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TIN OR EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter TIN Or Equivalent"
              onChangeText={(value) => {
                handleChange_KYC_2({CRS_Tin_2: v});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              REASON
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence"
              value={taxResidence2}
              onValueChange={(value) => {
                setTaxResidence2(value),
                  handleChange_KYC_2({CRS_Reason_2: value});
              }}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value={1}
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value={2}
              />
              <Select.Item label="No TIN required" value={3} />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence2 == 2 ? false : true}
              onChangeText={(v) => {
                handleChange_KYC_2({CRS_Extended_Reason_2: v});
              }}
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
              onValueChange={(v) => {
                handleChange_KYC_2({CRS_Tax_Residence_3: v});
              }}
              mt="1">
              <Select.Item label="UX Research" value={1} />
              <Select.Item label="Web Development" value={2} />
              <Select.Item label="Cross Platform Development" value={3} />
              <Select.Item label="UI Designing" value={4} />
              <Select.Item label="Backend Development" value={5} />
            </Select>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              TIN OR EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter TIN Or Equivalent"
              onChangeText={(v) => {
                handleChange_KYC_2({CRS_Tin_3: v});
              }}
            />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              REASON
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Country of Tax Residence"
              value={taxResidence3}
              onValueChange={(value) => {
                setTaxResidence3(value),
                  handleChange_KYC_2({CRS_Reason_3: value});
              }}
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1">
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value={1}
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value={2}
              />
              <Select.Item label="No TIN required" value={3} />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence3 == 2 ? false : true}
              onChangeText={(v) =>
                handleChange_KYC_2({CRS_Extended_Reason_3: v})
              }
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
        ) : step === 17 ? (
          <Block marginVertical={sizes.sm} card>
            <Text bold size={16}>
              Risk Profiling Questionnaire
            </Text>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              AGE
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={risk}
              onChange={(value) => {
                setRisk(parseInt(value));
              }}>
              <Radio value={1} my={1}>
                60 Above
              </Radio>
              <Radio value={2} my={1}>
                46-60
              </Radio>
              <Radio value={3} my={1}>
                30-45
              </Radio>
              <Radio value={4} my={1}>
                30 Below
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              WHAT IS YOUR INVESTMENT HORIZON?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={risk1}
              onChange={(value) => {
                setRisk1(parseInt(value));
              }}>
              <Radio value={1} my={1}>
                Up To 6 Months
              </Radio>
              <Radio value={2} my={1}>
                Up To 1 Year
              </Radio>

              <Radio value={3} my={1}>
                Up To 3 Year
              </Radio>
              <Radio value={4} my={1}>
                More Than 3 Years
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DEFINE YOUR INVESTMENT KNOWLEDGE?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={risk2}
              onChange={(value) => {
                setRisk2(parseInt(value));
              }}>
              <Radio value={1} my={1}>
                None
              </Radio>
              <Radio value={2} my={1}>
                Fresh/Basic
              </Radio>

              <Radio value={3} my={1}>
                Well-Versed
              </Radio>
              <Radio value={4} my={1}>
                Expert
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              WHAT IS YOUR RISK APPETITE?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={risk3}
              onChange={(value) => {
                setRisk3(parseInt(value));
              }}>
              <Radio value={1} my={1}>
                Lower
              </Radio>
              <Radio value={2} my={1}>
                Low
              </Radio>

              <Radio value={3} my={1}>
                Moderate
              </Radio>
              <Radio value={4} my={1}>
                High
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              HOW WILL YOU DEFINE YOUR INVESTMENT EXPERIENCE BY ASSET CLASSES?
              (YOU MAY SELECT MULTIPLE)
            </FormControl.Label>
            <Checkbox.Group
              onChange={(values) => {
                setRisk4(values);
              }}>
              <Checkbox value={'1'}>Bank Deposits</Checkbox>
              <Checkbox value={'2'}>Money Markets/ National Savings</Checkbox>
              <Checkbox value={'3'}>Fixed Income/Debt</Checkbox>
              <Checkbox value={'4'}>Equity/Forex/Commodity</Checkbox>
            </Checkbox.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              INVESTMENT OBJECTIVE
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={risk5}
              onChange={(value) => {
                setRisk5(value);
              }}>
              <Radio value={1} my={1}>
                Liquidity Management
              </Radio>
              <Radio value={2} my={1}>
                Regular Income
              </Radio>
              <Radio value={3} my={1}>
                Medium Term Capital Appreciation
              </Radio>
              <Radio value={4} my={1}>
                Long Term Wealth Accumulation
              </Radio>
            </Radio.Group>

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

              {risk4.length > 0
                ? (risk && risk1 && risk2 && risk3 && risk5) == 0
                : true}
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                primary
                onPress={() =>
                  (
                    risk4.length > 0
                      ? (risk && risk1 && risk2 && risk3 && risk5) == 0
                      : true
                  )
                    ? Alert.alert('Error', 'Please select all options', [
                        {
                          text: 'Close',
                          style: 'cancel',
                        },
                      ])
                    : setStep(step + 1)
                }
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 18 ? (
          <Block card marginVertical={sizes.sm}>
            <Text bold size={16}>
              Risk Profile
            </Text>
            <Risk_Modal />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              CUSTOMER SCORE
            </FormControl.Label>
            <Input value={'Score'} isDisabled />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              Score Range
            </FormControl.Label>
            <Input value={'Range'} isDisabled />
            <Risk_Slider />

            <FormControl.Label marginTop={sizes.xs} isRequired>
              Fund Risk Category
            </FormControl.Label>
            <Input
              value={
                'Equity Funds, Asset Allocation (with 0 – 100% Equity exposure mandate) and Balanced Funds (with 30% - 70% Equity exposure mandate), Commodity Funds, Index Trakker Funds and Sector Specific Equity related Funds'
              }
              isDisabled
            />
            <FormControl.Label marginTop={sizes.xs} isRequired>
              Recommended Fund as per Fund(s) Risk Category
            </FormControl.Label>
            <Select
              backgroundColor={'white'}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Select Product?"
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
        ) : step === 19 ? (
          <Block marginTop={sizes.sm} card>
            <Text bold size={16}>
              Upload Documents
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              DOCUMENT SOURCE OF INCOME SCAN COPY
            </FormControl.Label>
            <Button primary onPress={pickImage}>
              <Text white>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              NOMINEE CNIC SCAN COPY
            </FormControl.Label>
            <Button primary onPress={pickImage}>
              <Text white>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              W-9 FORM (US CITIZEN) SCAN COPY
            </FormControl.Label>
            <Button primary onPress={pickImage}>
              <Text white>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              W-8 FORM (FOR NON-US CITIZEN) SCAN COPY
            </FormControl.Label>
            <Button primary onPress={pickImage}>
              <Text white>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BUSINESS/EMPLOYMENT PROOF SCAN COPY
            </FormControl.Label>
            <Button primary onPress={pickImage}>
              <Text white>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DIGITAL SIGNATURE SCAN COPY
            </FormControl.Label>
            <Button primary onPress={pickImage}>
              <Text white>Upload Image</Text>
            </Button>
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
        ) : step === 20 ? (
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
            {/* KYC1 */}
            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Basic Information
              </Text>

              <VStack>
                <Text>Name :</Text>
                <Text>{registration.Name}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Father Name :</Text>
                <Text>{registration.Father_Name}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Mother Name :</Text>
                <Text>{registration.Mother_Name}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Gender :</Text>
                <Text>
                  {registration.Gender === 1
                    ? 'Male'
                    : registration.Gender === 2
                    ? 'Female'
                    : ''}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Date of Birth :</Text>
                <Text>{registration.DOB}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Residential Information
              </Text>
              <VStack marginTop={sizes.s}>
                <Text>Permanent Resident in Pakistan :</Text>
                <Text>
                  {registration.Permanent_Resident_Pakistan === 1
                    ? 'Yes'
                    : registration.Permanent_Resident_Pakistan === 2
                    ? 'No'
                    : ''}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Nationality :</Text>
                <Text>
                  {registration.Nationality === 1
                    ? 'Male'
                    : registration.Nationality == 2
                    ? 'Female'
                    : ''}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Country of Residence :</Text>
                <Text>
                  {registration.Country_Residence === 1
                    ? 'Male'
                    : registration.Country_Residence == 2
                    ? 'Female'
                    : ''}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Do You have any other Nationalities :</Text>
                <Text>
                  {registration.Any_Other_Nationality === 1 ? 'Yes' : 'No'}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Do you hold any US Green Card ?</Text>
                <Text>{registration.US_Green_Card === 1 ? 'Yes ' : 'No'}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Do you a US Resident ?</Text>
                <Text>{registration.US_Resident === 1 ? 'Yes ' : 'No'}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Are you tax resident of Pakistan and/or USA?</Text>
                <Text>
                  {registration.Tax_Resident_Pakistan_US === 1 ? 'Yes ' : 'No'}
                </Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Contact Information
              </Text>
              <VStack marginTop={sizes.s}>
                <Text>Address:</Text>
                <Text>{registration.Address}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>
                  Business / Registered Address (In case of sole proprietor) :
                </Text>
                <Text>{registration.Correspondance_Address}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>City:</Text>
                <Text>
                  {registration.City === 1
                    ? 'Male'
                    : registration.City === 2
                    ? 'Female'
                    : ''}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>State:</Text>
                <Text>
                  {registration.State === 1
                    ? 'Male'
                    : registration.State === 2
                    ? 'Female'
                    : ''}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Postal Code: ?</Text>
                <Text>{registration.Postal_Code}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Phone Number: ?</Text>
                <HStack>
                  <Text>
                    {registration.Country_Code === 1
                      ? '+92'
                      : registration.Country_Code === 2
                      ? '+42'
                      : ''}
                  </Text>
                  <Text>{registration.Phone_Number}</Text>
                </HStack>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Tel No. (Res):</Text>
                <Text>{registration.Tel_No_Res}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Tel No. (Off):</Text>
                <Text>{registration.Tel_No_Off}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Fax:</Text>
                <Text>{registration.Fax}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>WhatsApp No :</Text>
                <Text>{registration.Whatsapp_No}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
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
                <Text>
                  {registration.Tax_Status === 1
                    ? 'Filer'
                    : registration.Tax_Status === 2
                    ? 'Non-Filer'
                    : ''}
                </Text>
              </VStack>
            </Block>

            <Text bold size={19} marginTop={sizes.m} marginLeft={sizes.xs}>
              Account Info
            </Text>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Bank Information
              </Text>
              <VStack>
                <Text>Bank Name: </Text>
                <Text>
                  {registration.Bank_Name === 1
                    ? 'Male'
                    : registration.Bank_Name === 2
                    ? 'Female'
                    : ''}
                </Text>
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
                Account Management Instructions
              </Text>
              <VStack>
                <Text>Instruction to Operate Account: </Text>
                <Text>{registration.Account_Operate_Account}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Others (please specify):</Text>
                <Text>{registration.Account_Others}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Cash Dividend:</Text>
                <Text>{registration.Account_Cash_Dividend}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Stock Dividend:</Text>
                <Text>{registration.Account_Stock_Divident}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Do you wish to receive Statement of Accounts?</Text>
                <Text>{registration.Account_Statement_Wish}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>(If Yes, please select the nature of Mail):</Text>
                <Text>{registration.Account_Statement_Yes_Mail}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>For All Other Correspondence:</Text>
                <Text>{registration.Account_All_Other_Correspondence}</Text>
              </VStack>
            </Block>

            {/* KYC2 */}

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Professional Information
              </Text>

              <VStack>
                <Text>Education:</Text>
                <Text>{registration_KYC_2.Professional_Education}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Industry:</Text>
                <Text>{registration_KYC_2.Professional_Industry}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Occupation:</Text>
                <Text>{registration_KYC_2.Professional_Occupation}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Source of Funds:</Text>
                <Text>{registration_KYC_2.Professional_Source_Funds}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>
                  Nature of Employer / Business (In case of sole proprietor):
                </Text>
                <Text>
                  {registration_KYC_2.Professional_Nature_Employer_Business}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Geographies involved (Domestic):</Text>
                <Text>{registration_KYC_2.Professional_Geographics}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>
                  Nature of Employer / Business (In case of sole proprietor):
                </Text>
                <Text>
                  {registration_KYC_2.Professional_Nature_Employer_Business}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Type of Counter Parties (Domestic):</Text>
                <Text>
                  {registration_KYC_2.Professional_Types_Counter_Parts}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>
                  Purpose and intended nature of business relationship:
                </Text>
                <Text>
                  {registration_KYC_2.Professional_Business_Relationship}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>Possible modes of transcations / Delivery Channels:</Text>
                <Text>{registration_KYC_2.Professional_Modes_Transaction}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Transaction Information
              </Text>
              <VStack marginTop={sizes.s}>
                <Text>Expected No. of Transactions (Monthly):</Text>
                <Text>{registration_KYC_2.Transaction_Expected}</Text>
              </VStack>

              <VStack marginTop={sizes.s}>
                <Text>Annual Income:</Text>
                <Text>{registration_KYC_2.Transaction_Annual}</Text>
              </VStack>

              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>Expected Credit(TurnOver): </Text>
                <Text>{registration_KYC_2.Transaction_TurnOver}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Declaration By Customer
              </Text>
              <VStack marginTop={sizes.s}>
                <Text>
                  Has any Financial Institution ever refused to open your
                  account?
                </Text>
                <Text>
                  {registration_KYC_2.Declaration_Financial_Institution}
                </Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>
                  Are you opening this Account on behalf of any other person?
                </Text>
                <Text>{registration_KYC_2.Declaration_OnBehalf}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>
                  Are you holding a position in any government/public of office?
                </Text>
                <Text>{registration_KYC_2.Declaration_Govt_Position}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>Are you holding a position in any political party?</Text>
                <Text>{registration_KYC_2.Declaration_Political_Position}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                PEP Declaration
              </Text>
              <VStack>
                <Text>DO YOU CURRENTLY HOLD ANY PUBLIC POSITION?</Text>
                <Text>{registration_KYC_2.Pep_Public_Position}</Text>
              </VStack>
              <VStack marginTop={sizes.xs} marginBottom={sizes.s}>
                <Text>
                  DID YOU HOLD ANY PUBLIC POSITION IN THE LAST 12 MONTHS?
                </Text>
                <Text>{registration_KYC_2.Pep_Public_Position_Last_12}</Text>
              </VStack>
              <VStack marginTop={sizes.xs} marginBottom={sizes.s}>
                <Text>HAVE YOU EVER HELD ANY PUBLIC POSITION?</Text>
                <Text>{registration_KYC_2.Pep_Ever_Public_Position}</Text>
              </VStack>
              <VStack marginTop={sizes.xs} marginBottom={sizes.s}>
                <Text>
                  DID YOU HAVE OR HAVE YOU EVER HAD ANY DIPLOMATIC IMMUNITY?
                </Text>
                <Text>{registration_KYC_2.Pep_Diplomatic_Position}</Text>
              </VStack>
              <VStack marginTop={sizes.xs} marginBottom={sizes.s}>
                <Text>
                  DO YOU HAVE A RELATIVE WHO HAS HELD ANY PUBLIC POSITION IN THE
                  LAST 12 MONTHS?
                </Text>
                <Text>
                  {registration_KYC_2.Pep_Relative_Public_Position_Last_12}
                </Text>
              </VStack>
              <VStack marginTop={sizes.xs} marginBottom={sizes.s}>
                <Text>
                  DO YOU HAVE A CLOSE ASSOCIATE WHO HAS HELD ANY PUBLIC POSITION
                  IN THE LAST 12 MONTHS?
                </Text>
                <Text>
                  {
                    registration_KYC_2.Pep_Close_Associate_Public_Position_Last_12
                  }
                </Text>
              </VStack>
              <VStack marginTop={sizes.xs} marginBottom={sizes.s}>
                <Text>
                  HAS THERE BEEN A CONVICTION AGAINST YOU BY A COURT OF LAW?
                </Text>
                <Text>{registration_KYC_2.Pep_Conviction}</Text>
              </VStack>
              <VStack marginTop={sizes.xs} marginBottom={sizes.s}>
                <Text>
                  IF YOU HAVE ANSWERED "YES" TO ANY OF THE QUESTIONS ABOVE,
                  PLEASE PROVIDE DETAILS:
                </Text>
                <Text>{registration_KYC_2.Pep_Any_Yes}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                Ultimate Beneficiary (if applicable)
              </Text>
              <VStack>
                <Text>Name of Ultimate Beneficiary: </Text>
                <Text>{registration_KYC_2.Ultimate_Beneficiary}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Relationship with the Customer:</Text>
                <Text>{registration_KYC_2.Ultimate_RelationShip}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>CNIC/NICOP/Passport No.:</Text>
                <Text>{registration_KYC_2.Ultimate_CNIC}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                FATCA Information
              </Text>
              <VStack>
                <Text>Title of Account:</Text>
                <Text>{registration_KYC_2.Fatca_Account_Title}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>CNIC No.:</Text>
                <Text>{registration_KYC_2.Fatca_CNIC}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Place of Birth:</Text>
                <Text>{registration_KYC_2.Fatca_Place_Birth}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Are you a US Citizen?</Text>
                <Text>{registration_KYC_2.Fatca_US_Citizen}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Are you a US Resident?</Text>
                <Text>{registration_KYC_2.Fatca_US_Resident}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>
                  Standing instructions to transfer funds to an account
                  maintained in USA:
                </Text>
                <Text>{registration_KYC_2.Fatca_Transfer_Fund}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>
                  Do you have any Power of Attorney/Authorised Signatory/Mandate
                  Holder having US Address?
                </Text>
                <Text>{registration_KYC_2.Fatca_Power}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>
                  Do you have US residence/mailing/Sole Hold Mail Address?
                </Text>
                <Text>{registration_KYC_2.Fatca_US_Mail_Address}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>Do you have US telephone number?</Text>
                <Text>{registration_KYC_2.Fatca_US_PhoneNumber}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>US Taxpayer Identification Number:</Text>
                <Text>{registration_KYC_2.Fatca_US_Taxpayer_ID}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>Country of tax residence other than Pakistan:</Text>
                <Text>{registration_KYC_2.Fatca_Residence_than_Pak}</Text>
              </VStack>
            </Block>

            <Block card marginTop={sizes.sm}>
              <Text bold size={16} marginTop={sizes.sm} marginBottom={sizes.sm}>
                CRS Form for Tax Residency Self Certification
              </Text>
              <VStack>
                <Text>Country of Tax Residence #1:</Text>
                <Text>{registration_KYC_2.CRS_Tax_Residence_1}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>TIN or Equivalent:</Text>
                <Text>{registration_KYC_2.CRS_Tin_1}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Reason:</Text>
                <Text>{registration_KYC_2.CRS_Reason_1}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>
                  If reason B selected, please explain why you are unable to
                  obtain a TIN or functional Equivalent:
                </Text>
                <Text>{registration_KYC_2.CRS_Extended_Reason_1}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Country of Tax Residence #2:</Text>
                <Text>{registration_KYC_2.CRS_Tax_Residence_2}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>TIN or Equivalent:</Text>
                <Text>{registration_KYC_2.CRS_Tin_2}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Reason:</Text>
                <Text>{registration_KYC_2.CRS_Reason_2}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>
                  If reason B selected, please explain why you are unable to
                  obtain a TIN or functional Equivalent:
                </Text>
                <Text>{registration_KYC_2.CRS_Extended_Reason_2}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Country of Tax Residence #3:</Text>
                <Text>{registration_KYC_2.CRS_Tax_Residence_3}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>TIN or Equivalent:</Text>
                <Text>{registration_KYC_2.CRS_Tin_3}</Text>
              </VStack>
              <VStack marginTop={sizes.s}>
                <Text>Reason:</Text>
                <Text>{registration_KYC_2.CRS_Reason_3}</Text>
              </VStack>
              <VStack marginTop={sizes.s} marginBottom={sizes.s}>
                <Text>
                  If reason B selected, please explain why you are unable to
                  obtain a TIN or functional Equivalent:
                </Text>
                <Text>{registration_KYC_2.CRS_Extended_Reason_3}</Text>
              </VStack>
            </Block>

            <Button
              width={'45%'}
              marginHorizontal={sizes.xs}
              marginTop={sizes.s}
              secondary
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
