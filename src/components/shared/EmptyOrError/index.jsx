import React from 'react';
import {View, Image} from 'react-native';

// Component
import MyTextMedium from '../MyTextMedium';

export default function EmptyOrError({title, img}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={img}
        width={100}
        height={100}
        style={{width: 150, height: 150}}
      />
      <MyTextMedium style={{color: '#000', fontSize: 18}}>{title}</MyTextMedium>
    </View>
  );
}
