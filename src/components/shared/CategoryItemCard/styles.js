import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: (width, marginHorizontal) => ({
    width: width,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: marginHorizontal,
    position: 'relative',
    overflow: 'hidden',
  }),
  title: (textWhite, textDark) => ({
    fontSize: 15,
    color: textWhite,
    backgroundColor: textDark,
    padding: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
  }),
});
