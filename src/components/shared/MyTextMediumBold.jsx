import React from 'react';
import {Text} from 'react-native';

export default function MyTextMediumBold({children, style}) {
  return <Text style={[{fontFamily: 'WorkSans Bold'}, style]}>{children}</Text>;
}
