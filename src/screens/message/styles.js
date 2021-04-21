import {
  StyleSheet,
} from 'react-native';
import { px } from 'helpers/px';
import {
  COLORS,
  fontStyle,
  fontWeight,
} from 'resources/global-styles';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionView: {
    marginTop: px(40),
    marginBottom: px(25),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sectionItem: {
    alignItems: 'center',
  },
  sectionItemIcon: {
    width: px(35),
    height: px(35),
    resizeMode: 'contain',
  },
  sectionItemText: {
    ...fontStyle(14, 20, COLORS.TEXT_BLOCK),
    marginTop: px(7),
  },
  row: {
    width: '100%',
    height: px(77),
    paddingHorizontal: px(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowAvatar: {
    width: px(50),
    height: px(50),
    borderRadius: px(25),
  },
  rowContent: {
    marginLeft: px(10),
  },
  rowName: {
    ...fontWeight(17, 24, COLORS.BLOCK),
  },
  rowMessage: {
    ...fontStyle(13, 18, COLORS.TEXT_GRAY),
    marginTop: px(6),
    width: px(270),
  },
  rowTime: {
    ...fontStyle(12, 17, COLORS.TEXT_GRAY),
    position: 'absolute',
    right: px(17),
    top: px(17),
  },
});

export default styles;
