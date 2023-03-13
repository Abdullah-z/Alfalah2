import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Center,
  CheckIcon,
  Divider,
  FormControl,
  Icon,
  Input,
  Modal,
  Select,
} from 'native-base';
import React, {useCallback, useState} from 'react';
import {Image, SafeAreaView, View, ScrollView} from 'react-native';
import {Block, Button, Text} from '../components';
import {useTheme} from '../hooks';
import {Ionicons} from '@expo/vector-icons';

const SubRedModal = () => {
  const [showModal, setShowModal] = useState(false);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [type, setType] = useState(0);

  return (
    <Center>
      {/* <Button onPress={() => setShowModal(true)}>Button</Button> */}
      <Box flexDirection={'row'}>
        <Button
          onPress={() => {
            setShowModal(true), setType(1);
          }}
          marginHorizontal={sizes.xs}
          radius={30}
          color={'#4CAF50'}
          width={'50%'}>
          <Text white bold>
            Subscribe
          </Text>
        </Button>
        <Button
          onPress={() => {
            setShowModal(true), setType(2);
          }}
          marginHorizontal={sizes.xs}
          color={'#F44336'}
          width={'50%'}
          radius={30}>
          <Text white bold>
            Redeem
          </Text>
        </Button>
      </Box>

      <Modal
        size={'full'}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false), setType(0);
        }}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            {type === 1 ? 'Subscription Request' : 'Redeem Request'}
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <Select
                // selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                // onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
              <Block row>
                <Block>
                  <FormControl.Label>Holding Amount</FormControl.Label>
                  <Input width={'95%'}></Input>
                </Block>

                <Block>
                  <FormControl.Label>Holding Units</FormControl.Label>
                  <Input width={'95%'}></Input>
                </Block>
              </Block>

              <Block row>
                <Block>
                  <FormControl.Label>Previous NAV</FormControl.Label>
                  <Input width={'95%'}></Input>
                </Block>

                <Block>
                  <FormControl.Label>Next NAV Date</FormControl.Label>
                  <Input width={'95%'}></Input>
                </Block>
              </Block>

              <Block>
                <FormControl.Label>
                  Minimum Initial Subscription
                </FormControl.Label>
                <Input width={'100%'}></Input>
                <FormControl.Label>
                  Minimum Additional Subscription
                </FormControl.Label>
                <Input width={'100%'}></Input>
                <FormControl.Label>Investment Account Number</FormControl.Label>
                <Select></Select>
              </Block>
              <Block row marginVertical={sizes.sm}>
                <Block marginHorizontal={sizes.xs}>
                  <Text center>Currency</Text>
                  <Text center bold>
                    SAR
                  </Text>
                </Block>
                <Block marginHorizontal={sizes.xs}>
                  <Text center>Cash Balance</Text>
                  <Text center bold>
                    263,525.00
                  </Text>
                </Block>
                <Block marginHorizontal={sizes.xs}>
                  <Text center>Buying Power</Text>
                  <Text center bold>
                    SAR
                  </Text>
                </Block>
              </Block>
              <Block>
                <FormControl.Label>Subscription Amount</FormControl.Label>
                <Input width={'100%'}></Input>
              </Block>
              <Block row>
                <Block>
                  <FormControl.Label>Subscription Fee</FormControl.Label>
                  <Input width={'95%'}></Input>
                </Block>

                <Block>
                  <FormControl.Label>VAT</FormControl.Label>
                  <Input width={'95%'}></Input>
                </Block>
                <Block>
                  <FormControl.Label>Total Amount</FormControl.Label>
                  <Input width={'95%'}></Input>
                </Block>
              </Block>
              <Block row>
                <Text bold>Click Here</Text>
                <Text> to read the Fund's Terms & Conditions</Text>
              </Block>
            </FormControl>
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
    </Center>
  );
};

export default SubRedModal;
