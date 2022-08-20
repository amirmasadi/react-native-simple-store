import React from 'react';
import {View, Text, ScrollView} from 'react-native';

//components
import InCartItem from '../../shared/InCartItem/index.jsx';
import EmptyOrError from '../../shared/EmptyOrError/index.jsx';

//styles
import {styles} from './styles.js';

//redux
import {useSelector} from 'react-redux';
import CustomBtn from '../../shared/CustomBtn/index.js';

// assets
import emptyImg from '../../../assets/images/empty.png';

export default function Cart({navigation}) {
  const inCartItems = useSelector(state =>
    state.items.items.filter(itm => itm.quantity),
  );

  return (
    <>
      {inCartItems.length > 0 ? (
        <ScrollView
          style={styles.container}
          contentContainerStyle={{paddingBottom: 90}}>
          {inCartItems.map(itm => (
            <InCartItem itm={itm} key={itm.id} navigation={navigation} />
          ))}
          <View
            style={{
              marginVertical: 15,
              alignSelf: 'center',
            }}>
            <CustomBtn title={'Proceed to buy'} outline={false} />
          </View>
        </ScrollView>
      ) : (
        <EmptyOrError title={'Your cart is empty...'} img={emptyImg} />
      )}
    </>
  );
}
