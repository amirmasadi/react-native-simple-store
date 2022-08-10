import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: (width, marginHorizontal) => ({
    width: width,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: marginHorizontal,
    position: 'relative',
  }),
  img: {
    width: 111,
    height: 111,
    backgroundColor: '#fff',
  },
  title: textDark => ({
    fontSize: 18,
    color: textDark,
    marginVertical: 15,
  }),
  shop: textDark => ({
    fontSize: 14,
    color: textDark,
    paddingBottom: 3,
    borderBottomWidth: 2,
    borderBottomColor: textDark,
    // alignSelf: 'flex-start',
  }),
  like: {
    position: 'absolute',
    top: 5,
    right: 7,
  },
});
