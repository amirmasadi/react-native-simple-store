import React, {useState} from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';

// components
import MyTextBold from '../../shared/MyTextBold';
import MyTextMedium from '../../shared/MyTextMedium';
import MyTextMediumBold from '../../shared/MyTextMediumBold';
import CustomBtn from '../../shared/CustomBtn';
import CustomBorderLessBtn from '../../shared/CustomBorderLessBtn';

//style
import {styles} from './styles.js';

//icons
import heartOutline from '../../../assets/icons/heart-outline-icon.svg';
import heartFill from '../../../assets/icons/heart-fill-icon.svg';

import SvgUri from 'react-native-svg-uri';

//actions
import {
  LIKE_ITEM,
  ADD_TO_CART,
  REMOVE_TO_CART,
} from '../../../redux/actions/userAction';
import {useDispatch} from 'react-redux';
import QuantityRange from '../../shared/Quantityrange';

export default function ProductDetails({route, navigation}) {
  const [desc, setDesc] = useState('Description');
  const [relode, setRelode] = useState(false);
  const itemInfo = route.params;

  const dispatch = useDispatch();

  const LikeHandler = item => {
    dispatch({type: LIKE_ITEM, payload: item});
    setRelode(prevState => !prevState);
  };
  const addToCartHandler = item => {
    dispatch({type: ADD_TO_CART, payload: item});
    setRelode(prevState => !prevState);
  };
  const removeToCartHandler = item => {
    dispatch({type: REMOVE_TO_CART, payload: item});
    setRelode(prevState => !prevState);
  };

  const descData = [
    {
      title: 'Description',
      desc: (
        <View key={1}>
          <MyTextMedium
            style={{color: '#5B5B5B', lineHeight: 20, fontSize: 14}}>
            {itemInfo.description}
          </MyTextMedium>
          <MyTextMediumBold style={{color: '#000', marginTop: 10}}>
            Material & care
          </MyTextMediumBold>
          <MyTextMedium
            style={{color: '#5B5B5B', lineHeight: 20, fontSize: 14}}>
            All products are made with carefully selected materials. Please
            handle with care for longer product life.{'\n'} - Protect from
            direct light, heat and rain. Should it become wet, dry it
            immediately with a soft cloth{'\n'} - Store in the provided flannel
            bag or box{'\n'} - Clean with a soft, dry cloth
          </MyTextMedium>
        </View>
      ),
    },
    {
      title: 'Shipping info',
      desc: (
        <View key={2}>
          <MyTextMedium
            style={{color: '#5B5B5B', lineHeight: 20, fontSize: 14}}>
            Pre-order, Made to Order and DIY items will ship on the estimated
            date noted on the product description page. These items will ship
            through Premium Express once they become available.
          </MyTextMedium>
          <MyTextMediumBold style={{color: '#000', marginTop: 10}}>
            Return policy
          </MyTextMediumBold>
          <MyTextMedium
            style={{color: '#5B5B5B', lineHeight: 20, fontSize: 14}}>
            Returns may be made by mail or in store. The return window for
            online purchases is 30 days (10 days in the case of beauty items)
            from the date of delivery. You may return products by mail using the
            complimentary prepaid return label included with your order, and
            following the return instructions provided in your digital invoice.
          </MyTextMedium>
        </View>
      ),
    },
    {
      title: 'Payment options',
      desc: (
        <View key={3}>
          <MyTextMedium
            style={{color: '#5B5B5B', lineHeight: 20, fontSize: 14}}>
            We accepts the following forms of payment for online purchases:
          </MyTextMedium>
          <MyTextMedium
            style={{color: '#5B5B5B', lineHeight: 20, fontSize: 14}}>
            PayPal may not be used to purchase Made to Order Décor or DIY items.
            The full transaction value will be charged to your credit card after
            we have verified your card details, received credit authorisation,
            confirmed availability and prepared your order for shipping. For
            Made To Order, DIY, personalised and selected Décor products,
            payment will be taken at the time the order is placed.
          </MyTextMedium>
        </View>
      ),
    },
  ];

  return (
    <ScrollView
      style={styles.body}
      contentContainerStyle={{
        paddingBottom: 90,
      }}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          style={styles.like}
          onPress={() => LikeHandler(itemInfo)}>
          {itemInfo.isLiked ? (
            <SvgUri source={heartFill} />
          ) : (
            <SvgUri source={heartOutline} />
          )}
        </TouchableOpacity>
        <Image
          source={{
            uri: itemInfo.image,
          }}
          style={{
            resizeMode: 'contain',
            width: '100%',
            height: '100%',
            flex: 3,
          }}
        />
        <View style={styles.headerInfo}>
          <MyTextBold style={styles.title}>
            {itemInfo.title.split(' ')[0]}
            {itemInfo.title.split(' ')[1]}
          </MyTextBold>
          <MyTextMedium style={styles.fullTitle}>{itemInfo.title}</MyTextMedium>
          <MyTextMedium style={styles.category}>
            {itemInfo.category}
          </MyTextMedium>
          <MyTextMediumBold style={styles.price}>
            ${itemInfo.price}
          </MyTextMediumBold>
          <View style={{marginVertical: 15}}>
            {!itemInfo.quantity ? (
              <CustomBtn
                title={'Buy now'}
                onPress={() => addToCartHandler(itemInfo)}
                outline={false}
              />
            ) : (
              <QuantityRange
                value={itemInfo.quantity}
                removeToCartHandler={() => removeToCartHandler(itemInfo)}
                addToCartHandler={() => addToCartHandler(itemInfo)}
              />
            )}
          </View>
          <CustomBorderLessBtn title={'Add to cart'} />
        </View>
      </View>
      <View style={styles.fullInfo}>
        <View style={styles.btnRow}>
          {descData.map(itm => (
            <TouchableOpacity
              key={itm.title}
              onPress={() => setDesc(itm.title)}>
              <MyTextMediumBold
                style={[
                  {
                    color: '#727272',
                    fontSize: 14,
                  },
                  desc === itm.title && {
                    borderBottomWidth: 2,
                    paddingBottom: 5,
                    borderColor: '#000',
                    color: '#000',
                  },
                ]}>
                {itm.title}
              </MyTextMediumBold>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.desc}>
          {descData.map(itm => desc === itm.title && itm.desc)}
        </View>
      </View>
    </ScrollView>
  );
}
