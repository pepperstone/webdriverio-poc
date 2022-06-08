import { Platform } from 'react-native';

const fontWeightAndroid = {
	light: '400',
	regular: '500',
	semibold: '700',
	bold: '800',
	black: '900',
} as const;

const fontWeightIOS = {
	light: '300',
	regular: '400',
	semibold: '600',
	bold: '700',
	black: '800',
} as const;

export default Platform.OS === 'ios' ? fontWeightIOS : fontWeightAndroid;
