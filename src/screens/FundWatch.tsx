import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {Block, Button, Image, Text} from '../components';
import SubRedModal from '../components/SubRedModal';
import {useData, useTheme} from '../hooks';

export default function FundWatch() {
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );
  return (
    <></>
    // <ScrollView>
    //   <Block
    //     row
    //     flex={0}
    //     align="center"
    //     justify="center"
    //     color={colors.card}
    //     paddingBottom={sizes.sm}>
    //     <Button onPress={() => handleProducts(0)}>
    //       <Block row align="center">
    //         <Block
    //           flex={0}
    //           radius={6}
    //           align="center"
    //           justify="center"
    //           marginRight={sizes.s}
    //           width={sizes.socialIconSize}
    //           height={sizes.socialIconSize}
    //           gradient={gradients?.[tab === 0 ? 'primary' : 'secondary']}>
    //           <Image source={assets.extras} color={colors.white} radius={0} />
    //         </Block>
    //         <Text p font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
    //           {t('home.following')}
    //         </Text>
    //       </Block>
    //     </Button>
    //     <Block
    //       gray
    //       flex={0}
    //       width={1}
    //       marginHorizontal={sizes.sm}
    //       height={sizes.socialIconSize}
    //     />
    //     <Button onPress={() => handleProducts(1)}>
    //       <Block row align="center">
    //         <Block
    //           flex={0}
    //           radius={6}
    //           align="center"
    //           justify="center"
    //           marginRight={sizes.s}
    //           width={sizes.socialIconSize}
    //           height={sizes.socialIconSize}
    //           gradient={gradients?.[tab === 1 ? 'primary' : 'secondary']}>
    //           <Image
    //             radius={0}
    //             color={colors.white}
    //             source={assets.documentation}
    //           />
    //         </Block>
    //         <Text p font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
    //           {t('home.trending')}
    //         </Text>
    //       </Block>
    //     </Button>
    //   </Block>
    // </ScrollView>
  );
}
