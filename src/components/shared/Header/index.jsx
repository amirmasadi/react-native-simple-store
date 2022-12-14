import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  StatusBar,
} from 'react-native';

import MyTextBold from '../MyTextBold';

//styles
import {styles} from './styles';

//icons and images
import avatarImg from '../../../assets/images/avatar-img.png';

//colors
import {textDark, bgLight} from '../../../helpers/Constants';

export default function index({route}) {
  return (
    <SafeAreaView
      style={styles.header(bgLight, StatusBar.currentHeight, textDark)}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.content}>
        <MyTextBold style={styles.brand(textDark)}>
          {route.name === 'Home' ? '.Store' : route.name}
        </MyTextBold>
      </View>
      <TouchableOpacity>
        <Image source={avatarImg} style={styles.avatar} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
