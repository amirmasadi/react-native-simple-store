import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

//components
import MyTextBold from '../../shared/MyTextBold';
import ItemCard from '../../shared/ItemCard';
import CustomBtn from '../../shared/CustomBtn';
import EmptyOrError from '../../shared/EmptyOrError';

//colors
import {textDark} from '../../../helpers/Constants';

// assets
import offlineImg from '../../../assets/images/offline.png';

export default function LatestItems({navigation}) {
  const items = useSelector(state => state.items);

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
            <ItemCard key={itm.id} itemInfo={itm} navigation={navigation} />
          ))}
          <View style={{marginTop: 16}}>
            <CustomBtn
              title="Check all latest"
              onPress={() => navigation.navigate('AllProducts', 'All')}
            />
          </View>
        </View>
      )}

      {items.error && items.items.length === 0 && (
        <View
          style={{
            marginTop: 40,
          }}>
          <EmptyOrError title={items.error} img={offlineImg} />
        </View>
      )}

      {items.loading && (
        <MyTextBold style={{color: textDark, fontSize: 20}}>Loading</MyTextBold>
      )}
    </>
  );
}
