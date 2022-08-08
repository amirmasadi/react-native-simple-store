import React from 'react';

import MyTextMedium from './MyTextMedium';

// SVG Package
import SvgUri from 'react-native-svg-uri';

//svg icons
import homeIcon from '../../assets/icons/home-icon.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import wishlistIcon from '../../assets/icons/wishlist-icon.svg';
import cartIcon from '../../assets/icons/cart-icon.svg';

//colors
import {textDark, textGrey} from '../../helpers/Constants';

export default function TabIcon({route, focused}) {
  let iconName;
  let color;

  if (route.name === 'Home') {
    iconName = homeIcon;
    color = !focused ? textGrey : textDark;
  } else if (route.name === 'Search') {
    iconName = searchIcon;
    color = !focused ? textGrey : textDark;
  } else if (route.name === 'Wishlist') {
    iconName = wishlistIcon;
    color = !focused ? textGrey : textDark;
  } else if (route.name === 'Cart') {
    iconName = cartIcon;
    color = !focused ? textGrey : textDark;
  }

  return (
    <>
      <SvgUri source={iconName} fill={color} />
      {focused && (
        <MyTextMedium style={{color: '#000', fontSize: 10, marginTop: 4}}>
          {route.name}
        </MyTextMedium>
      )}
    </>
  );
}
