import {
  StyleSheet,
} from 'react-native';
import { px } from 'helpers/px';
import { COLORS, extraFooterHeight, fontStyle } from 'resources/global-styles';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: COLORS.GRAY_BG,
  },
  row: {
    marginTop: px(15),
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: px(10),
  },
  rowR: {
    justifyContent: 'flex-end',
  },
  rowAvatar: {
    width: px(40),
    height: px(40),
    borderRadius: px(20),
  },
  rowContent: {
    marginLeft: px(8),
    width: px(230),
    borderRadius: px(3),
    padding: px(10),
    backgroundColor: COLORS.WHITE,
  },
  rowContentR: {
    marginRight: px(8),
    width: px(230),
    backgroundColor: COLORS.BLUE,
  },
  rowTitle: {
    ...fontStyle(12, 12, COLORS.TEXT_LIGHT),
  },
  rowLine: {
    marginVertical: px(10),
    width: '100%',
    height: 0.5,
    backgroundColor: COLORS.BG,
  },
  rowMessage: {
    ...fontStyle(14, 20, COLORS.TEXT),
  },
  rowMessageR: {
    color: COLORS.WHITE,
  },
  rowData: {
    ...fontStyle(12, 12, COLORS.TEXT_LIGHT),
    marginTop: px(10),
  },
  rowArow: {
    position: 'absolute',
    top: px(12),
    left: px(54),
    width: px(10),
    height: px(10),
    backgroundColor: COLORS.WHITE,
    transform: [{
      rotateZ: '45deg',
    }],
  },
  rowArowR: {
    position: 'absolute',
    top: px(12),
    width: px(12),
    height: px(10),
    right: px(54),
    backgroundColor: COLORS.BLUE,
    transform: [{
      rotateZ: '45deg',
    }],
  },
  chatBar: {
    width: '100%',
    paddingHorizontal: px(10),
    paddingVertical: px(9),
    paddingBottom: px(9) + extraFooterHeight,
    backgroundColor: '#F6F7F8',
    flexDirection: 'row',
  },
  inputContain: {
    padding: px(8),
    width: px(312),
    minHeight: px(40),
    borderRadius: px(4),
    backgroundColor: COLORS.WHITE,
    marginRight: px(13),
  },
  input: {
    width: '100%',
    maxHeight: px(75),
    padding: 0,
    fontSize: px(14),
  },
  sendBtn: {
    width: px(30),
    height: px(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    width: px(30),
    height: px(30),
  },
});

export default styles;
