import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: (bgLight, statusBarHeight) => ({
    backgroundColor: bgLight,
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  }),
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: textDark => ({
    fontSize: 22,
    color: textDark,
    padding: 0,
    marginLeft: 15,
    marginBottom: 5,
  }),
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
});
