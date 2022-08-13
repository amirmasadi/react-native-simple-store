import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

// components
import MyTextBold from '../../shared/MyTextBold';

// images
import womensClothingImg from '../../../assets/images/womens-clothing.png';
import mensClothingImg from '../../../assets/images/mens-clothing.png';
import jeweleryImg from '../../../assets/images/jewelery.png';
import electronicsImg from '../../../assets/images/electronics.png';

//styles
import {styles} from './styles';
//colors
import {textDark, textWhite} from '../../../helpers/Constants';
import {gridColsWidth} from '../../../helpers/functions';

const cols = 2;
const marginHorizontal = 10;
const width = gridColsWidth(cols, marginHorizontal);

const CategoryItemCard = ({title, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container(width, marginHorizontal)}
      onPress={() => navigation.navigate('AllProducts', title)}>
      {title === "women's clothing" && (
        <Image
          source={womensClothingImg}
          width={10}
          height={10}
          style={{width: '100%'}}
        />
      )}
      {title === "men's clothing" && (
        <Image
          source={mensClothingImg}
          width={10}
          height={10}
          style={{width: '100%'}}
        />
      )}
      {title === 'jewelery' && (
        <Image
          source={jeweleryImg}
          width={10}
          height={10}
          style={{width: '100%'}}
        />
      )}
      {title === 'electronics' && (
        <Image
          source={electronicsImg}
          width={10}
          height={10}
          style={{width: '100%'}}
        />
      )}
      <MyTextBold style={styles.title(textWhite, textDark)}>{title}</MyTextBold>
    </TouchableOpacity>
  );
};

export default CategoryItemCard;
