import React from 'react';
import {Pressable} from 'react-native';

//components
import MyTextMedium from '../MyTextMedium';

// styles
import {styles} from './styles';

// colors
import {textDark, textWhite, bgLight} from '../../../helpers/Constants';

export default function CustomBtn({title, onPress, outline = true}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.btn(pressed, outline, textDark, textWhite, bgLight),
      ]}>
      <MyTextMedium
        style={{fontSize: 16, color: outline ? textDark : textWhite}}>
        {title}
      </MyTextMedium>
    </Pressable>
  );
}
