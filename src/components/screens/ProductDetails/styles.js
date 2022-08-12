import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerInfo: {
    alignItems: 'flex-start',
    flex: 4,
    paddingVertical: 20,
    paddingLeft: 30,
    paddingRight: 10,
  },
  title: {
    fontSize: 22,
    color: '#000',
  },
  fullTitle: {
    fontSize: 14,
    color: '#000',
  },
  category: {
    fontSize: 12,
    color: '#848484',
  },
  price: {
    fontSize: 20,
    color: '#000',
    marginVertical: 10,
  },
  like: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  fullInfo: {
    paddingTop: 25,
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  desc: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
