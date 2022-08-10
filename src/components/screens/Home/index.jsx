import React, {useEffect} from 'react';
import {ScrollView, Text, View, Button} from 'react-native';

//styles
import {styles} from './styles';

//colors
import {bgLight} from '../../../helpers/Constants';

//components
import Carousel from '../../shared/Carousel';
import LatestItems from '../../shared/LatestItems';

//redux
import {useDispatch} from 'react-redux';

//actions
import {getItems} from '../../../redux/actions/getItemsActions';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <ScrollView
      style={styles.body(bgLight)}
      contentContainerStyle={{
        paddingBottom: 90,
      }}>
      <Carousel />
      <LatestItems />
    </ScrollView>
  );
}
