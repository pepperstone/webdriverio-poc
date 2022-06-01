import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSideMenuOpen } from '../../../../../../slices';

import { GOOGLE_DOCS_VIEWER } from 'src/lib/constants/Links';
import useStrings from 'src/common/hooks/useStrings';
import { UseGuestMenuHookProps } from './types';
import { AppState } from 'src/app/types';

export const UseGuestMenuHook = (): UseGuestMenuHookProps => {
  const dispatch = useDispatch();
  const { isSideMenuOpen } = useSelector((state: AppState) => state.discover);
  const navigation = useNavigation();
  const { Legal } = useStrings();

  const onLinkPressed = ( title: string, url: string ) => {
    const isIOS = Platform.OS === 'ios';
    const androidLinkConverter = title === Legal.ContactUs ? url : `${GOOGLE_DOCS_VIEWER}${url}`;
    const platformLink = isIOS ? url : androidLinkConverter;

    navigation.navigate('WebView', { title, url: platformLink });
    toggleSideMenu();
  };

  const toggleSideMenu = () => dispatch(setIsSideMenuOpen(!isSideMenuOpen));

  return {
    onLinkPressed,
  };
};
