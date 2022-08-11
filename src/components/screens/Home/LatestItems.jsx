import React from 'react';
import {View, Button} from 'react-native';
import {useSelector} from 'react-redux';

//components
import MyTextBold from '../../shared/MyTextBold';
import MyTextMedium from '../../shared/MyTextMedium';
import ItemCard from '../../shared/ItemCard';
import CustomBtn from '../../shared/CustomBtn';

//colors
import {textDark} from '../../../helpers/Constants';

export default function LatestItems() {
  const items = useSelector(state => state.items);
  const likes = useSelector(state => state.userInfo.likes);

  return (
    <>
      {items.items.length > 0 && (
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            paddingTop: 20,
            justifyContent: 'center',
          }}>
          {items.items.slice(0, 4).map(itm => (
            <ItemCard
              key={itm.id}
              itemInfo={itm}
              isLiked={likes.filter(itm => {
                if (likes.id === itm.id) {
                  return true;
                } else return false;
              })}
            />
          ))}
          <CustomBtn title="Check all latest" />
        </View>
      )}

      {items.error && (
        <MyTextMedium style={{color: textDark, fontSize: 20}}>
          {items.error}
        </MyTextMedium>
      )}

      {items.loading && (
        <MyTextBold style={{color: textDark, fontSize: 20}}>Loading</MyTextBold>
      )}
    </>
  );
}
