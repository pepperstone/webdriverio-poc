import { Platform } from 'react-native';

// twitter
export const PEPPERSTONE_TWITTER_LINKS = {
  url: 'https://www.twitter.com/PepperstoneFX',
  scheme: 'twitter://user?screen_name=PepperstoneFX',
};

// facebook
export const PEPPERSTONE_FACEBOOK_LINKS = {
  url: 'https://www.facebook.com/Pepperstonefx',
  scheme: Platform.OS === 'ios' ? 'fb://profile/157604064293524' : 'fb://page/157604064293524',
};

// linkedIn
export const PEPPERSTONE_LINKEDIN_LINKS = {
  url: 'https://www.linkedin.com/company/pepperstone',
  scheme: 'linkedin://profile?id=663955459',
};

// youtube
export const PEPPERSTONE_YOUTUBE_LINKS = {
  url: 'https://www.youtube.com/c/Pepperstone',
  scheme: 'vnd.youtube://channel/UCrNLfyB-wvPotj4RHR_dcSA',
};

export const GOOGLE_DOCS_VIEWER = 'http://docs.google.com/gview?embedded=true&url=';
