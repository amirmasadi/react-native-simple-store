import {Dimensions} from 'react-native';

export function gridColsWidth(cols, marginHorizontal) {
  const width =
    Dimensions.get('window').width / cols - marginHorizontal * (cols + 1);
  return width;
}
export function gridRowHeight(rows, marginVertical) {
  const height =
    Dimensions.get('window').height / rows - marginVertical * (rows + 1);
  return height;
}
