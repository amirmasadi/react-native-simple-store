import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  carousel: {
    width: '100%',
    position: 'relative',
  },
  slide: {
    // marginRight: 10,
    padding: 10,
  },
  titleWrapper: {
    position: 'absolute',
    top: '25%',
    right: '8%',
  },
  title: {
    fontSize: 22,
    alignSelf: 'flex-start',
    color: '#000',
    backgroundColor: '#fff',
    paddingVertical: 0,
    paddingHorizontal: 7,
  },
  container: {
    position: 'relative',
  },
  indicatorsWrapper: {
    flexDirection: 'row-reverse',
    position: 'absolute',
    bottom: 0,
    right: '5%',
  },
  indicators: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
});
