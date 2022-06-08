import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const BORDER_RADIUS = 15;

export default {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  BORDER_RADIUS,
};
