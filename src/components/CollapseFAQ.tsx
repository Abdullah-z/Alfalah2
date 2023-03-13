import {View} from 'react-native';

import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {useTheme} from '../hooks';
import Text from './Text';
import Block from './Block';

export default function CollapseFAQ(props) {
  const [isCollapsed, setisCollapsed] = useState(true);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  return (
    <Block primary marginBottom={sizes.xs} marginHorizontal={sizes.xs}>
      <Text
        padding={sizes.sm}
        h5
        white
        onPress={() => {
          isCollapsed ? setisCollapsed(false) : setisCollapsed(true);
        }}>
        {props.heading}
      </Text>
      <Collapsible collapsed={isCollapsed}>
        <Block white>
          <Text black>{props.detail}</Text>
        </Block>
      </Collapsible>
    </Block>
  );
}
