import React from 'react';
import {TouchableOpacity} from 'react-native';

// styles
import {styles} from './styles';
//colors
import {textDark} from '../../../helpers/Constants';

//components
import MyTextMedium from '../MyTextMedium';

export default function index({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MyTextMedium style={styles.shop(textDark)}>{title}</MyTextMedium>
    </TouchableOpacity>
  );
}
