import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

//components
import MyTextBold from '../MyTextBold';
import MyTextMedium from '../MyTextMedium';
import MyTextMediumBold from '../MyTextMediumBold';
import CustomBorderLessBtn from '../CustomBorderLessBtn';
import QuantityRange from '../QuantityRange';

//redux
import {useDispatch} from 'react-redux';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LIKE_ITEM,
} from '../../../redux/actions/userAction';

//styles
import {styles} from './styles';

export default function InCartItem({itm, navigation, wishlist = false}) {
  const dispatch = useDispatch();

  const addToCartHandler = item => {
    dispatch({type: ADD_TO_CART, payload: item});
  };
  const removeToCartHandler = item => {
    dispatch({type: REMOVE_FROM_CART, payload: item});
  };
  const removeLikeHandler = item => {
    dispatch({type: LIKE_ITEM, payload: item});
  };

  return (
    <View style={styles.item} key={itm.id}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: itm.image}}
          width={81}
          height={81}
          style={styles.img}
          resizeMode="contain"
        />
        {!wishlist && (
          <MyTextMediumBold style={{color: 18, color: '#000', marginTop: 10}}>
            ${itm.price * itm.quantity}
          </MyTextMediumBold>
        )}
      </View>
      <View style={styles.detailes}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', itm)}>
          <MyTextBold style={{fontSize: 18, color: '#000'}}>
            {itm.title.split(' ').slice(0, 3).join(' ')}
          </MyTextBold>
          <MyTextMedium
            style={{
              fontSize: 14,
              marginVertical: 5,
              color: '#000',
            }}>
            {itm.title}
          </MyTextMedium>
        </TouchableOpacity>
        <MyTextMedium
          style={{fontSize: 12, color: '#848484', marginBottom: 10}}>
          {itm.category}
        </MyTextMedium>
        <View style={{alignSelf: 'flex-start'}}>
          {wishlist ? (
            <CustomBorderLessBtn
              title="REMOVE"
              onPress={() => removeLikeHandler(itm)}
            />
          ) : (
            <QuantityRange
              value={itm.quantity}
              removeToCartHandler={() => removeToCartHandler(itm)}
              addToCartHandler={() => addToCartHandler(itm)}
            />
          )}
        </View>
      </View>
    </View>
  );
}
