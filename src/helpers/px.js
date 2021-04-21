import { Dimensions } from 'react-native';

const DEVICE_WIDTH_DP = Dimensions.get('window').width;
const DEVICE_HEIGHT_DP = Dimensions.get('window').height;
// the width of our design view, it's fixed and can't be changed
const UI_WIDTH_PX = 375;
const UI_WIDTH_PY = 667;

/**
 * convert px to dp
 *
 * @param {Int} uiElementPx
 */
const pxCache = {};
export function px2dp(uiElementPx, round) {
  let result;
  if (pxCache[uiElementPx]) {
    result = pxCache[uiElementPx];
  } else {
    result = uiElementPx * (DEVICE_WIDTH_DP / UI_WIDTH_PX);
    pxCache[uiElementPx] = result;
  }
  return round ? Math.round(result) : result;
}

const pyCache = {};
export function py2dp(uiElementPy, round) {
  let result;
  if (pyCache[uiElementPy]) {
    result = pyCache[uiElementPy];
  } else {
    result = uiElementPy * (DEVICE_HEIGHT_DP / UI_WIDTH_PY);
    pyCache[uiElementPy] = result;
  }
  return round ? Math.round(result) : result;
}

// px2dp alias
export const px = px2dp;
export const py = py2dp;
