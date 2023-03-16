import {TouchableWithoutFeedback, View} from 'react-native';

import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {useTheme} from '../hooks';
import Text from './Text';
import Block from './Block';
import {Icon, Image} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

export default function CollapseFAQ(props) {
  const [isCollapsed, setisCollapsed] = useState(true);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block marginHorizontal={sizes.xs}>
      <TouchableWithoutFeedback
        onPress={() => {
          isCollapsed ? setisCollapsed(false) : setisCollapsed(true);
        }}>
        <Block primary row marginBottom={sizes.xs}>
          <View width={'80%'}>
            <Text padding={sizes.sm} marginBottom={sizes.sm} white h5 semibold>
              {props.heading}
            </Text>
          </View>
          <Block align="flex-end" justify="center">
            <Icon
              mb="1"
              as={
                <Ionicons name={isCollapsed ? 'chevron-down' : 'chevron-up'} />
              }
              size="xl"
              color={colors.white}
            />
          </Block>
        </Block>
      </TouchableWithoutFeedback>
      <Collapsible collapsed={isCollapsed}>
        <Block white>
          <Text black padding={sizes.sm}>
            {props.detail}
          </Text>
        </Block>
      </Collapsible>
    </Block>
  );
}
