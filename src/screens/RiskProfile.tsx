import {View, ScrollView} from 'react-native';
import React from 'react';
import {Block, Text} from '../components';
import {useTheme} from '../hooks';
import {Checkbox, Radio} from 'native-base';

export default function RiskProfile() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [value, setValue] = React.useState('one');
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <ScrollView>
      <Block margin={sizes.sm}>
        <Block card marginBottom={sizes.xs}>
          <Text bold marginBottom={sizes.xs}>
            1. Age?
          </Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}>
            <Radio value="one" my={1}>
              <Text>60 above</Text>
            </Radio>
            <Radio value="two" my={1}>
              <Text>40-60</Text>
            </Radio>
            <Radio value="two" my={1}>
              <Text>30-45</Text>
            </Radio>
            <Radio value="two" my={1}>
              <Text>30 below</Text>
            </Radio>
          </Radio.Group>
        </Block>

        <Block card marginBottom={sizes.xs}>
          <Text bold marginBottom={sizes.xs}>
            2. What is your investment horizon?
          </Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}>
            <Radio value="one" my={1}>
              <Text>Up to 6 months</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Up to 1 year</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>1-3 years</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>More than 3 years</Text>
            </Radio>
          </Radio.Group>
        </Block>

        <Block card marginBottom={sizes.xs}>
          <Text bold marginBottom={sizes.xs}>
            3. What is your investment knowledge?
          </Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}>
            <Radio value="one" my={1}>
              <Text>None</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Fresh/Basic</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Well-versed</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Expert</Text>
            </Radio>
          </Radio.Group>
        </Block>

        <Block card marginBottom={sizes.xs}>
          <Text bold marginBottom={sizes.xs}>
            4. What is risk appetite?
          </Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}>
            <Radio value="one" my={1}>
              <Text>Lower</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Low</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Moderate</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>High</Text>
            </Radio>
          </Radio.Group>
        </Block>
        <Block card marginBottom={sizes.xs}>
          <Text bold marginBottom={sizes.xs}>
            5. How will you define your investment experience by asset classes?
            {'\n'}You may select multiple options
          </Text>
          <Checkbox.Group
            onChange={setGroupValues}
            value={groupValues}
            accessibilityLabel="choose numbers">
            <Checkbox value="one" my={1}>
              <Text>Bank Deposits</Text>
            </Checkbox>
            <Checkbox value="two" my={1}>
              <Text>Money Markets/National Savings</Text>
            </Checkbox>
            <Checkbox value="two" my={1}>
              <Text>Fixed Income/Debt</Text>
            </Checkbox>
            <Checkbox value="two" my={1}>
              <Text>Equity/Forex/Commodity</Text>
            </Checkbox>
          </Checkbox.Group>
        </Block>

        <Block card marginBottom={sizes.xs}>
          <Text bold marginBottom={sizes.xs}>
            6. Investment Objective?
          </Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}>
            <Radio value="one" my={1}>
              <Text>Liquidity Management</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Regular Income</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Medium Term Capital Appreciation</Text>
            </Radio>
            <Radio value="one" my={1}>
              <Text>Long Term Wealth Accumulation</Text>
            </Radio>
          </Radio.Group>
        </Block>
      </Block>
    </ScrollView>
  );
}
