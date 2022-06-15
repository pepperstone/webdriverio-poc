import { Linking } from 'react-native';

export const openLink = (url: string) => {
  Linking.canOpenURL(url)
    .then(() => Linking.openURL(url))
    .catch(() => {});
};

export interface socialLinkProps {
  url: string;
  scheme: string;
}

export const openSocialLink = (link: socialLinkProps ) => {
  Linking.canOpenURL(link.scheme)
    .then((supported) => Linking.openURL(supported ? link.scheme : link.url))
    .catch(() => {});
};

/** generate random id
 * @param: prefix - string value added before the random id
 */
export const generateRandomID = (prefix: string = "") : string => {
  return  prefix + '_' + Math.random().toString(36);
};