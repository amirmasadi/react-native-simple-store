import React from 'react';
import {View, Image, Dimensions, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';

//components
import MyTextBold from '../MyTextBold';
import MyTextMedium from '../MyTextMedium';
import CustomBorderLessBtn from '../CustomBorderLessBtn';

//icons
import heartOutline from '../../../assets/icons/heart-outline-icon.svg';
import heartFill from '../../../assets/icons/heart-fill-icon.svg';

//styles
import {styles} from './styles';
import {textDark} from '../../../helpers/Constants';

// redux
import {useSelector, useDispatch} from 'react-redux';
//actions
import {LIKE_ITEM, DISLIKE_ITEM} from '../../../redux/actions/userAction';
import {gridColsWidth} from '../../../helpers/functions';

export default function ItemCard({itemInfo, navigation}) {
  const dispatch = useDispatch();

  const LikeHandler = item => {
    dispatch({type: LIKE_ITEM, payload: item});
  };

  //for implementing grid like behavior
  const rows = 3;
  const cols = 2;
  const marginHorizontal = 10;
  const marginVertical = 10;
  const width = gridColsWidth(cols, marginHorizontal);

  return (
    <View style={styles.container(width, marginHorizontal)}>
      <TouchableOpacity
        style={styles.like}
        onPress={() => LikeHandler(itemInfo)}>
        <SvgUri source={heartOutline} />
      </TouchableOpacity>
      <Image
        source={{uri: itemInfo.image}}
        width={111}
        height={111}
        style={styles.img}
        resizeMode="contain"
      />
      <MyTextBold style={styles.title(textDark)}>
        {itemInfo.title.split(' ')[0] + itemInfo.title.split(' ')[1]}
      </MyTextBold>
      <CustomBorderLessBtn
        title={'SHOP NOW'}
        onPress={() => navigation.navigate('ProductDetails', itemInfo)}
      />
    </View>
  );
}