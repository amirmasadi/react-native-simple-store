import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  catRow: {
    flexDirection: 'row',
    marginTop: 20,
    position: 'relative',
  },
  pill: {
    color: '#000',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginHorizontal: 4,
  },
  activePill: {
    backgroundColor: '#000',
    color: '#fff',
  },
  catRowAfter: {
    position: 'absolute',
    right: 0,
    top: '20%',
    height: '100%',
    width: '5%',
    backgroundColor: '#fff',
  },
});
