import {
  StyleSheet,
} from 'react-native';
import { px } from 'helpers/px';
import { COLORS, fontWeight, statusBarHeight } from 'resources/global-styles';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: px(50) + statusBarHeight,
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
  },
  title: {
    ...fontWeight(16, 22, COLORS.BLOCK),
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: px(7),
  },
  right: {
    justifyContent: 'flex-end',
    paddingLeft: 0,
    paddingRight: px(7),
  },
  button: {
    paddingHorizontal: px(10),
    height: px(30),
    marginLeft: px(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonR: {
    marginLeft: 0,
    marginRight: px(2),
  },
  buttonTitle: {
    ...fontWeight(16, 23, COLORS.BLOCK),
  },
  buttonTitleDisabled: {
    color: COLORS.TEXT_DISABLED,
  },
  buttonIcon: {
    width: px(18),
    height: px(18),
    resizeMode: 'contain',
  },
});

export default styles;
