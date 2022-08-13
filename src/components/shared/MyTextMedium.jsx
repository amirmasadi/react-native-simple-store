import React from 'react';
import {Text} from 'react-native';

export default function MyTextMedium({children, style}) {
  return (
    <Text style={[{fontFamily: 'Work Sans', color: '#000'}, style]}>
      {children}
    </Text>
  );
}
