import {View, ScrollView, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {Text, Card, Block} from '../components';
import {useTheme} from '../hooks';
import {useState} from 'react';
import {
  Checkbox,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  Select,
  Button,
  Heading,
  Radio,
  VStack,
  Modal,
  Slider,
} from 'native-base';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {color, Value} from 'react-native-reanimated';

interface Information_KYC_2 {
  Professional_Education: string;
  Professional_Industry: string;
  Professional_Occupation: string;
  Professional_Source_Funds: string;
  Professional_Nature_Employer_Business: string;
  Professional_Geographics: string;
  Professional_Types_Counter_Parts: string;
  Professional_Business_Relationship: string;
  Professional_Modes_Transaction: string;
  // Transaction Details
  Transaction_Expected: string;
  Transaction_Annual: string;
  Transaction_TurnOver: string;
  // Declaration By Customer
  Declaration_Financial_Institution: string;
  Declaration_OnBehalf: string;
  Declaration_Govt_Position: string;
  Declaration_Political_Position: string;
  //PEP Declaration
  Pep_Public_Position: string;
  Pep_Public_Position_Last_12: string;
  Pep_Ever_Public_Position: string;
  Pep_Diplomatic_Position: string;
  Pep_Relative_Public_Position_Last_12: string;
  Pep_Close_Associate_Public_Position_Last_12: string;
  Pep_Conviction: string;
  Pep_Any_Yes: string;
  //Ultimate Beneficiary (if applicable)
  Ultimate_Beneficiary: string;
  Ultimate_RelationShip: string;
  Ultimate_CNIC: number;
  // FATCA
  Fatca_Account_Title: string;
  Fatca_CNIC: number;
  Fatca_Residence_than_Pak: string;
  Fatca_Residence_than_Pak_IF_Yes: string;
  Fatca_Place_Birth: string;
  Fatca_US_Citizen: string;
  Fatca_US_PhoneNumber: string;
  Fatca_US_Resident: string;
  Fatca_Green_Card: string;
  Fatca_Transfer_Fund: string;
  Fatca_Power: string;
  // Fatca_Account_Title: string;
  Fatca_US_Mail_Address: string;
  Fatca_Phone_Number: string;
  Fatca_US_Taxpayer_ID: number;
  // CRS
  CRS_Tax_Residence_1: string;
  CRS_Tin_1: string;
  CRS_Reason_1: string;
  CRS_Extended_Reason_1: string;
  CRS_Tax_Residence_2: string;
  CRS_Tin_2: string;
  CRS_Reason_2: string;
  CRS_Extended_Reason_2: string;
  CRS_Tax_Residence_3: string;
  CRS_Tin_3: string;
  CRS_Reason_3: string;
  CRS_Extended_Reason_3: string;
}

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
  console.log('PEP: ' + pepDeclaration);
  //FATCA Details
  const [fatca_Residence, setFatca_Residence] = useState('');

  //Tax Residence
  const [taxResidence, setTaxResidence] = useState('');
  const [taxResidence2, setTaxResidence2] = useState('');
  const [taxResidence3, setTaxResidence3] = useState('');

  // Risk Profile Questionnaire
  const [risk, setRisk] = useState(0);
  const [risk1, setRisk1] = useState(0);
  const [risk2, setRisk2] = useState(0);
  const [risk3, setRisk3] = useState(0);
  const [risk4, setRisk4] = useState([]);
  const [risk5, setRisk5] = useState(0);

  const [showModal, setShowModal] = useState(true);

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
      Professional_Education: '',
      Professional_Industry: '',
      Professional_Occupation: '',
      Professional_Source_Funds: '',
      Professional_Nature_Employer_Business: '',
      Professional_Geographics: '',
      Professional_Types_Counter_Parts: '',
      Professional_Business_Relationship: '',
      Professional_Modes_Transaction: '',
      // Transaction Details
      Transaction_Expected: '',
      Transaction_Annual: '',
      Transaction_TurnOver: '',
      // Declaration By Customer
      Declaration_Financial_Institution: '',
      Declaration_OnBehalf: '',
      Declaration_Govt_Position: '',
      Declaration_Political_Position: '',
      //PEP Declaration
      Pep_Public_Position: '',
      Pep_Public_Position_Last_12: '',
      Pep_Ever_Public_Position: '',
      Pep_Diplomatic_Position: '',
      Pep_Relative_Public_Position_Last_12: '',
      Pep_Close_Associate_Public_Position_Last_12: '',
      Pep_Conviction: '',
      Pep_Any_Yes: '',
      //Ultimate Beneficiary (if applicable)
      Ultimate_Beneficiary: '',
      Ultimate_RelationShip: '',
      Ultimate_CNIC: null,
      // FATCA
      Fatca_Account_Title: '',
      Fatca_CNIC: null,
      Fatca_Residence_than_Pak: '',
      Fatca_Residence_than_Pak_IF_Yes: '',
      Fatca_Place_Birth: '',
      Fatca_US_PhoneNumber: '',
      Fatca_US_Citizen: '',
      Fatca_US_Resident: '',
      Fatca_Green_Card: '',
      Fatca_Transfer_Fund: '',
      Fatca_Power: '',
      // Fatca_Account_Title: '',
      Fatca_US_Mail_Address: '',
      Fatca_Phone_Number: '',
      Fatca_US_Taxpayer_ID: null,
      // CRS
      CRS_Tax_Residence_1: '',
      CRS_Tin_1: '',
      CRS_Reason_1: '',
      CRS_Extended_Reason_1: '',
      CRS_Tax_Residence_2: '',
      CRS_Tin_2: '',
      CRS_Reason_2: '',
      CRS_Extended_Reason_2: '',
      CRS_Tax_Residence_3: '',
      CRS_Tin_3: '',
      CRS_Reason_3: '',
      CRS_Extended_Reason_3: '',
    });
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

  const handleChange_KYC_2 = useCallback(
    (value) => {
      setRegistration_KYC_2((state) => ({...state, ...value}));
    },
    [setRegistration_KYC_2],
  );

  console.log('Life :  ' + isLifetimeExpiry);
  console.log('Regisration_2 :' + JSON.stringify(registration_KYC_2));

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

  const Risk_Modal = () => {
    console.log('Modal: ' + showModal);

    return (
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
            <Button.Group space={2}>
              <Button
                color={colors.primary}
                size={sizes.lg}
                width={sizes.sm}
                onPress={() => {
                  setShowModal(false);
                }}>
                OK
              </Button>
            </Button.Group>
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
                accessibilityLabel="favorite number"
                onChange={(value) =>
                  handleChange_KYC_2({Professional_Education: value})
                }>
                <Radio value="UnderGraduate" my={1}>
                  UnderGraduate
                </Radio>
                <Radio value="Graduate" my={1}>
                  Graduate
                </Radio>
                <Radio value="PostGraduate" my={1}>
                  PostGraduate
                </Radio>
                <Radio value="Professional" my={1}>
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Professional_Occupation: v});
                }}>
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Professional_Source_Funds: v});
                }}>
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
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
                bg={colors.secondary}
                onPress={() => navigation.navigate('KYC')}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Transaction_Expected: v});
                }}>
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Transaction_Annual: v});
                }}>
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
                mt="1"
                onValueChange={(v) => {
                  handleChange_KYC_2({Transaction_TurnOver: v});
                }}>
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
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
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
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Declaration_Financial_Institution: v});
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
                <Radio value="one" onChange={setZakat} my={1}>
                  Yes
                </Radio>
                <Radio style={{marginLeft: sizes.sm}} value="two" my={1}>
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
                handleChange_KYC_2({Declaration_Govt_Position: v});
              }}
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              isDefault="false">
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
              ARE YOU HOLDING A POSITION IN ANY POLITICAL PARTY?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Declaration_Political_Position: v});
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
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
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
                setPepDeclaration(nextValue);
                handleChange_KYC_2({
                  Pep_Public_Position: nextValue,
                });
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
                setPepDeclaration(nextValue);
                handleChange_KYC_2({
                  Pep_Relative_Public_Position_Last_12: nextValue,
                });
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
                setPepDeclaration(nextValue);
                handleChange_KYC_2({Pep_Ever_Public_Position: nextValue});
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
                setPepDeclaration(nextValue);
                handleChange_KYC_2({Pep_Diplomatic_Position: nextValue});
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
                setPepDeclaration(nextValue);
                handleChange_KYC_2({
                  Pep_Relative_Public_Position_Last_12: nextValue,
                });
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
                setPepDeclaration(nextValue);
                handleChange_KYC_2({
                  Pep_Close_Associate_Public_Position_Last_12: nextValue,
                });
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
                setPepDeclaration(nextValue);
                handleChange_KYC_2({
                  Pep_Conviction: nextValue,
                });
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
              numberOfLines={4}
              placeholder="Enter Details"
              isDisabled={pepDeclaration == 'true' ? false : true}
              onChangeText={(v) => {
                handleChange_KYC_2({Pep_Any_Yes: v});
              }}
            />
            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
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
              onChangeText={(v) => {
                handleChange_KYC_2({Ultimate_CNIC: v});
              }}
            />

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
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
              onChange={(v) =>
                handleChange_KYC_2({Fatca_Residence_than_Pak: v})
              }>
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
              mt="1"
              onValueChange={(v) =>
                handleChange_KYC_2({Fatca_Residence_than_Pak_IF_Yes: v})
              }>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
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
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_US_Resident: v});
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
              DO YOU HOLD US PERMANENT RESIDENT CARD (GREEN CARD)?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_Green_Card: v});
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
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_Power: v});
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
              DO YOU HAVE US RESIDENCE/MAILING/SOLE HOLD MAIL ADDRESS?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => {
                handleChange_KYC_2({Fatca_US_Mail_Address: v});
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
              DO YOU HAVE US TELEPHONE NUMBER?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              onChange={(v) => handleChange({Fatca_US_PhoneNumber: value})}>
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
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
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
              mt="1"
              onValueChange={(v) => {
                handleChange_KYC_2({CRS_Tax_Residence_1: v});
              }}>
              <Select.Item
                label="The Country Does not Issue TIN to its residents"
                value="false"
              />
              <Select.Item
                label="Unable to obtain a TIN/Equivalent Number"
                value="true"
              />
              <Select.Item label="No TIN required" value="Other" />
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
                setTaxResidence(value), handleChange_KYC_2({CRS_Reason_1: v});
              }}
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
              <Select.Item label="No TIN required" value="Other" />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence == 'true' ? false : true}
              onChangeText={(value) => {
                handleChange_KYC_2({CRS_Extended_Reason_1: v});
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
                handleChange_KYC_2({CRS_Tax_Residence_2: v});
              }}
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
                setTaxResidence2(value), handleChange_KYC_2({CRS_Reason_2: v});
              }}
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
              <Select.Item label="No TIN required" value="Other" />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence2 == 'true' ? false : true}
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
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
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
                setTaxResidence3(value), handleChange_KYC_2({CRS_Reason_3: v});
              }}
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
              <Select.Item label="No TIN required" value="Other" />
            </Select>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              IF REASON B SELECTED, PLEASE EXPLAIN WHY YOU ARE UNABLE TO OBTAIN
              A TIN OR FUNCTIONAL EQUIVALENT
            </FormControl.Label>
            <Input
              placeholder="Enter Reason"
              isDisabled={taxResidence3 == 'true' ? false : true}
              onChangeText={(v) =>
                handleChange_KYC_2({CRS_Extended_Reason_3: v})
              }
            />

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 3 ? (
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
              value={risk.toString()}
              onChange={(value) => {
                setRisk(parseInt(value));
              }}>
              <Radio value={'1'} my={1}>
                60 Above
              </Radio>
              <Radio value={'2'} my={1}>
                46-60
              </Radio>
              <Radio value={'3'} my={1}>
                30-45
              </Radio>
              <Radio value={'4'} my={1}>
                30 Below
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              WHAT IS YOUR INVESTMENT HORIZON?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={risk1.toString()}
              onChange={(value) => {
                setRisk1(parseInt(value));
              }}>
              <Radio value="1" my={1}>
                Up To 6 Months
              </Radio>
              <Radio value="2" my={1}>
                Up To 1 Year
              </Radio>

              <Radio value="3" my={1}>
                Up To 3 Year
              </Radio>
              <Radio value="4" my={1}>
                More Than 3 Years
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DEFINE YOUR INVESTMENT KNOWLEDGE?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={risk2.toString()}
              onChange={(value) => {
                setRisk2(parseInt(value));
              }}>
              <Radio value="1" my={1}>
                None
              </Radio>
              <Radio value="2" my={1}>
                Fresh/Basic
              </Radio>

              <Radio value="3" my={1}>
                Well-Versed
              </Radio>
              <Radio value="4" my={1}>
                Expert
              </Radio>
            </Radio.Group>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              WHAT IS YOUR RISK APPETITE?
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={risk3.toString()}
              onChange={(value) => {
                setRisk3(parseInt(value));
              }}>
              <Radio value="1" my={1}>
                Lower
              </Radio>
              <Radio value="2" my={1}>
                Low
              </Radio>

              <Radio value="3" my={1}>
                Moderate
              </Radio>
              <Radio value="4" my={1}>
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
              value={risk5.toString()}
              onChange={(value) => {
                setRisk5(parseInt(value));
              }}>
              <Radio value="1" my={1}>
                Liquidity Management
              </Radio>
              <Radio value="2" my={1}>
                Regular Income
              </Radio>
              <Radio value="3" my={1}>
                Medium Term Capital Appreciation
              </Radio>
              <Radio value="4" my={1}>
                Long Term Wealth Accumulation
              </Radio>
            </Radio.Group>

            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>

              <Button
                isDisabled={
                  risk4.length > 0
                    ? (risk && risk1 && risk2 && risk3 && risk5) == 0
                    : true
                }
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 10 ? (
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
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>

              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 3 ? (
          <Block marginTop={sizes.sm} card>
            <Text bold size={16}>
              Upload Documents
            </Text>
            <FormControl.Label marginTop={sizes.xs} isRequired>
              DOCUMENT SOURCE OF INCOME SCAN COPY
            </FormControl.Label>
            <Button bg={colors.white} onPress={pickImage}>
              <Text primary>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              NOMINEE CNIC SCAN COPY
            </FormControl.Label>
            <Button bg={colors.white} onPress={pickImage}>
              <Text primary>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              W-9 FORM (US CITIZEN) SCAN COPY
            </FormControl.Label>
            <Button bg={colors.white} onPress={pickImage}>
              <Text primary>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              W-8 FORM (FOR NON-US CITIZEN) SCAN COPY
            </FormControl.Label>
            <Button bg={colors.white} onPress={pickImage}>
              <Text primary>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              BUSINESS/EMPLOYMENT PROOF SCAN COPY
            </FormControl.Label>
            <Button bg={colors.white} onPress={pickImage}>
              <Text primary>Upload Image</Text>
            </Button>

            <FormControl.Label marginTop={sizes.xs} isRequired>
              DIGITAL SIGNATURE SCAN COPY
            </FormControl.Label>
            <Button bg={colors.white} onPress={pickImage}>
              <Text primary>Upload Image</Text>
            </Button>
            <Block row justify="center">
              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.secondary}
                onPress={() => setStep(step - 1)}
                marginBottom={sizes.xs}>
                <Text white>Back</Text>
              </Button>

              <Button
                width={'45%'}
                marginHorizontal={sizes.xs}
                marginTop={sizes.sm}
                bg={colors.primary}
                onPress={() => setStep(step + 1)}
                marginBottom={sizes.xs}>
                <Text white>Next</Text>
              </Button>
            </Block>
          </Block>
        ) : step === 2 ? (
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
              bg={colors.secondary}
              onPress={() => setStep(step - 1)}
              marginBottom={sizes.xs}>
              <Text white>Back</Text>
            </Button>
          </>
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
