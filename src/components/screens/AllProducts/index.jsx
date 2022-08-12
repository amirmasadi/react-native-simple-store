import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';

//components
import ItemCard from '../../shared/ItemCard';
import MyTextBold from '../../shared/MyTextBold';

//redux
import {useSelector} from 'react-redux';

//styles
import {styles} from './styles';
import MyTextMedium from '../../shared/MyTextMedium';

export default function AllProducts({route, navigation}) {
  const filter = route.params;

  //getting items from redux
  const items = useSelector(state => state.items.items);

  //extracting categorys from items
  const categorys = useSelector(state =>
    Array.from(new Set(state.items.items.map(itm => itm.category))),
  );

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 90,
      }}>
      <MyTextBold
        style={{color: '#000', fontSize: 22, padding: 20, paddingBottom: 0}}>
        All Products
      </MyTextBold>
      <View>
        <ScrollView
          style={styles.catRow}
          horizontal={true}
          contentContainerStyle={{
            paddingRight: 30,
          }}>
          <TouchableOpacity key={'All'}>
            <MyTextMedium style={[styles.pill, styles.activePill]}>
              All
            </MyTextMedium>
          </TouchableOpacity>
          {categorys.map(cat => (
            <TouchableOpacity key={cat}>
              <MyTextMedium style={styles.pill}>{cat}</MyTextMedium>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.catRowAfter}></View>
      </View>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          paddingTop: 20,
          justifyContent: 'center',
        }}>
        {items.map(itm => (
          <ItemCard key={itm.id} itemInfo={itm} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
}
