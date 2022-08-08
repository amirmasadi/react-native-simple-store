import React from 'react';
import {ScrollView, Text} from 'react-native';

//styles
import {styles} from './styles';

//colors
import {bgLight} from '../../../helpers/Constants';

//components
import Carousel from '../../shared/Carousel';

export default function Home() {
  return (
    <ScrollView style={styles.body(bgLight)}>
      <Carousel />
    </ScrollView>
  );
}
