import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  btn: (pressed, outline, textDark, textWhite, bgLight) => ({
    borderWidth: 2,
    borderColor: textDark,
    backgroundColor: outline ? bgLight : textDark,
    color: outline ? textDark : textWhite,
    opacity: pressed ? 0.3 : 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginVertical: 15,
  }),
});
