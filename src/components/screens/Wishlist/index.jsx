import React from 'react';
import {
  View,
  ScrollView,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

//components
import MyTextBold from '../../shared/MyTextBold.jsx';
import MyTextMedium from '../../shared/MyTextMedium.jsx';
import CustomBorderLessBtn from '../../shared/CustomBorderLessBtn';
import CustomBtn from '../../shared/CustomBtn';

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

  const removeLikeHandler = item => {
    dispatch({type: LIKE_ITEM, payload: item});
  };

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
      <MyTextBold style={{fontSize: 22, color: '#000', marginBottom: 20}}>
        Wishlist
      </MyTextBold>
      {likedItems.length ? (
        <View>
          {likedItems.map(itm => (
            <View style={styles.item} key={itm.id}>
              <Image
                source={{uri: itm.image}}
                width={81}
                height={81}
                style={styles.img}
                resizeMode="contain"
              />
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
                    }}>
                    {itm.title}
                  </MyTextMedium>
                </TouchableOpacity>
                <MyTextMedium
                  style={{fontSize: 12, color: '#848484', marginBottom: 10}}>
                  {itm.category}
                </MyTextMedium>
                <View style={{alignSelf: 'flex-start'}}>
                  <CustomBorderLessBtn
                    title="REMOVE"
                    onPress={() => removeLikeHandler(itm)}
                  />
                </View>
              </View>
            </View>
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
