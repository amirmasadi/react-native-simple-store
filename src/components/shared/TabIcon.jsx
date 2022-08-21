import React from 'react';

import MyTextMedium from './MyTextMedium';

//svg icons
import HomeIcon from '../../assets/icons/home-icon.svg';
import SearchIcon from '../../assets/icons/search-icon.svg';
import WishlistIcon from '../../assets/icons/wishlist-icon.svg';
import CartIcon from '../../assets/icons/cart-icon.svg';

//colors
import {textDark, textGrey} from '../../helpers/Constants';

export default function TabIcon({route, focused}) {
  let iconName;
  let color;

  if (route.name === 'Home') {
    iconName = <HomeIcon />;
    color = !focused ? textGrey : textDark;
  } else if (route.name === 'Search') {
    iconName = <SearchIcon />;
    color = !focused ? textGrey : textDark;
  } else if (route.name === 'Wishlist') {
    iconName = <WishlistIcon />;
    color = !focused ? textGrey : textDark;
  } else if (route.name === 'Cart') {
    iconName = <CartIcon fill={'pink'} />;
    color = !focused ? textGrey : textDark;
  }

  return (
    <>
      {iconName}
      {focused && (
        <MyTextMedium style={{color: textDark, fontSize: 10, marginTop: 4}}>
          {route.name}
        </MyTextMedium>
      )}
    </>
  );
}
