import React from 'react';
import {Text} from 'react-native';

export default function MyTextMedium({children, style}) {
  return <Text style={[{fontFamily: 'Work Sans'}, style]}>{children}</Text>;
}
