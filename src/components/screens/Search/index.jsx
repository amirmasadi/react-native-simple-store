import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//components
import MyTextMedium from '../../shared/MyTextMedium';

//redux
import {useSelector} from 'react-redux';

//styles
import {styles} from './styles.js';

export default function Search({navigation}) {
  const [searchInput, setSearchInput] = useState('');

  const searchInputRef = useRef(null);

  const items = useSelector(state => state.items);

  useEffect(() => {
    if (searchInputRef.current) {
      const unsubscribe = navigation.addListener('focus', () => {
        searchInputRef.current?.focus();
        setSearchInput('');
      });

      return unsubscribe;
    }
  }, [navigation, searchInputRef.current]);

  return items.items.length === 0 || items.error ? (
    <Text style={{color: '#000'}}>{items.error}</Text>
  ) : (
    <View style={styles.body}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={setSearchInput}
          value={searchInput}
          ref={searchInputRef}
          placeholder={'Type here to search'}
          placeholderTextColor={'#00000076'}
          autoFocus={true}
        />
      </View>
      <ScrollView
        style={styles.resultWrapper}
        contentContainerStyle={{paddingBottom: 90, paddingTop: 15}}>
        {searchInput &&
          items.items.map(itm => {
            if (itm.title.toLowerCase().includes(searchInput.toLowerCase())) {
              return (
                <TouchableOpacity
                  key={itm.id}
                  onPress={() => navigation.navigate('ProductDetails', itm)}>
                  <MyTextMedium style={styles.result}>
                    {itm.title.split(' ').slice(0, 3).join(' ')}
                  </MyTextMedium>
                </TouchableOpacity>
              );
            }
          })}
      </ScrollView>
    </View>
  );
}
