import React, {useState, useEffect} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';

//components
import ItemCard from '../../shared/ItemCard';
import MyTextBold from '../../shared/MyTextBold';

import LinearGradient from 'react-native-linear-gradient';

//redux
import {useSelector} from 'react-redux';

//styles
import {styles} from './styles';
import MyTextMedium from '../../shared/MyTextMedium';

export default function AllProducts({route, navigation}) {
  const [currentFilter, setCurrentFilter] = useState('');

  const filter = route.params;

  useEffect(() => {
    setCurrentFilter(filter);
  }, []);

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
          <TouchableOpacity key={'All'} onPress={() => setCurrentFilter('All')}>
            <MyTextMedium
              style={[
                styles.pill,
                currentFilter === 'All' && styles.activePill,
              ]}>
              All
            </MyTextMedium>
          </TouchableOpacity>
          {categorys.map(cat => (
            <TouchableOpacity key={cat} onPress={() => setCurrentFilter(cat)}>
              <MyTextMedium
                style={[
                  styles.pill,
                  currentFilter === cat && styles.activePill,
                ]}>
                {cat}
              </MyTextMedium>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FFFFFF00', '#f1f1f182', '#f1f1f1e1', '#F1F1F1']}
          style={styles.catRowAfter}></LinearGradient>
      </View>

      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          paddingTop: 20,
          justifyContent: 'center',
        }}>
        {items.map(itm => {
          if (itm.category === currentFilter) {
            return (
              <ItemCard key={itm.id} itemInfo={itm} navigation={navigation} />
            );
          } else if (currentFilter === 'All') {
            return (
              <ItemCard key={itm.id} itemInfo={itm} navigation={navigation} />
            );
          }
        })}
      </View>
    </ScrollView>
  );
}
