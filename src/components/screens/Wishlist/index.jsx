import React from 'react';
import {View, ScrollView, ToastAndroid} from 'react-native';

//components
import MyTextBold from '../../shared/MyTextBold.jsx';
import MyTextMedium from '../../shared/MyTextMedium.jsx';
import CustomBtn from '../../shared/CustomBtn';
import InCartItem from '../../shared/InCartItem/index.jsx';

//styles
import {styles} from './styles.js';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {ADD_TO_CART, LIKE_ITEM} from '../../../redux/actions/userAction';

export default function Wishlist({navigation}) {
  const likedItems = useSelector(state =>
    state.items.items.filter(itm => itm.isLiked),
  );

  const dispatch = useDispatch();

  const addAllToCart = () => {
    likedItems.forEach(liked => {
      dispatch({type: LIKE_ITEM, payload: liked});
      dispatch({type: ADD_TO_CART, payload: liked});
      showToast();
    });
  };

  const showToast = () => {
    ToastAndroid.show(
      'All liked item has been added to cart.',
      ToastAndroid.SHORT,
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 90}}>
      {likedItems.length ? (
        <View>
          {likedItems.map(itm => (
            <InCartItem
              itm={itm}
              key={itm.id}
              navigation={navigation}
              wishlist
            />
          ))}
          <View
            style={{
              marginVertical: 15,
              alignSelf: 'center',
            }}>
            <CustomBtn
              title={'Add all to cart'}
              outline={false}
              onPress={addAllToCart}
            />
          </View>
        </View>
      ) : (
        <MyTextMedium>Empty...</MyTextMedium>
      )}
    </ScrollView>
  );
}
