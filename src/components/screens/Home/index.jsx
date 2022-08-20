import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';

//styles
import {styles} from './styles';

//colors
import {bgLight} from '../../../helpers/Constants';

//components
import Carousel from './Carousel';
import LatestItems from './LatestItems';
import CategorySec from './CategorySec';

//redux
import {useDispatch} from 'react-redux';

//actions
import {getItems} from '../../../redux/actions/getItemsActions';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <ScrollView
      style={styles.body(bgLight)}
      contentContainerStyle={{
        paddingBottom: 90,
        paddingHorizontal: 10,
      }}>
      <Carousel />
      <LatestItems navigation={navigation} />
      <CategorySec navigation={navigation} />
    </ScrollView>
  );
}
