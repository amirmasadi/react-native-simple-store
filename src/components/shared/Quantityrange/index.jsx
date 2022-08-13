import React from 'react';
import {View} from 'react-native';

//components
import MyTextMedium from '../MyTextMedium';
import CustomBtn from '../CustomBtn';

// styles
import {styles} from './styles';

export default function QuantityRange({
  value,
  removeToCartHandler,
  addToCartHandler,
}) {
  return (
    <View style={styles.wrapper}>
      <CustomBtn title={'-'} onPress={removeToCartHandler} outline={false} />
      <MyTextMedium style={styles.quantity}>{value}</MyTextMedium>
      <CustomBtn title={'+'} onPress={addToCartHandler} outline={false} />
    </View>
  );
}
