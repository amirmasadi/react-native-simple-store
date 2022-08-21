import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

//components
import MyTextBold from '../MyTextBold';
import CustomBorderLessBtn from '../CustomBorderLessBtn';

//icons
import HeartOutline from '../../../assets/icons/heart-outline-icon.svg';
import HeartFill from '../../../assets/icons/heart-fill-icon.svg';

//styles
import {styles} from './styles';
import {textDark} from '../../../helpers/Constants';

// redux
import {useDispatch} from 'react-redux';
//actions
import {LIKE_ITEM} from '../../../redux/actions/userAction';
import {gridColsWidth} from '../../../helpers/functions';

export default function ItemCard({itemInfo, navigation}) {
  const dispatch = useDispatch();

  const LikeHandler = item => {
    dispatch({type: LIKE_ITEM, payload: item});
  };

  //for implementing grid like behavior
  const cols = 2;
  const marginHorizontal = 10;
  const width = gridColsWidth(cols, marginHorizontal);

  return (
    <View style={styles.container(width, marginHorizontal)}>
      <TouchableOpacity
        style={styles.like}
        onPress={() => LikeHandler(itemInfo)}>
        {itemInfo.isLiked ? <HeartFill /> : <HeartOutline />}
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
