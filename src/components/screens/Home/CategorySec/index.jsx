import React from 'react';
import {View} from 'react-native';

// components
import MyTextBold from '../../../shared/MyTextBold';
import CategoryItemCard from '../../../shared/CategoryItemCard';

// styles
import {styles} from './styles';

// redux
import {useSelector} from 'react-redux';

export default function CategorySec({navigation}) {
  //extracting categorys from array of items in store
  const category = useSelector(state =>
    Array.from(new Set(state.items.items.map(itm => itm.category))),
  );

  return (
    <>
      {category.length > 0 && (
        <>
          <MyTextBold style={styles.title}> Shop by categories </MyTextBold>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {category.map(cat => (
              <CategoryItemCard title={cat} key={cat} navigation={navigation} />
            ))}
          </View>
        </>
      )}
    </>
  );
}
