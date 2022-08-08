import React from 'react';
import {Text} from 'react-native';

export default function MyTextBold({children, style}) {
  return (
    <Text style={[{fontFamily: 'Playfair Display'}, style]}>{children}</Text>
  );
}
