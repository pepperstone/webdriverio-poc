import { FacebookSVG, LinkedInSVG, TwitterSVG, YoutubeSVG } from 'assets/logos';
import React from 'react';
import { Text, View } from 'react-native';
import SvgButton from 'src/common/components/buttons/svgButton';
import TextButton from 'src/common/components/buttons/textButton';
import TextTouchable from 'src/common/components/buttons/textTouchable';
import useStrings from 'src/common/hooks/useStrings';
import { useDiscoverHook } from 'src/features/discover/Hooks';
import {
  PEPPERSTONE_FACEBOOK_LINKS,
  PEPPERSTONE_LINKEDIN_LINKS,
  PEPPERSTONE_TWITTER_LINKS,
  PEPPERSTONE_YOUTUBE_LINKS,
} from 'src/lib/constants/Links';
import { useTheme } from 'src/lib/theme/Theme';
import { openSocialLink } from 'src/lib/Utils';
import { UseGuestMenuHook } from './Hooks';
import stylesCreator from './Styles';
import { GuestMenuProps } from './types';

const GuestMenu = ({ handleLogin, handleSignup }: GuestMenuProps) => {
  const [styles, theme] = useTheme(stylesCreator);
  const { loading } = useDiscoverHook();
  const { onLinkPressed } = UseGuestMenuHook();
  const { Legal } = useStrings();

  return (
    <>
      <View style={styles.signinContainer}>
        <View style={styles.signinWrapper}>
          <TextButton
            onPress={handleSignup}
            text="Sign Up"
            loading={false}
            buttonStyles={styles.signUpButton}
          />
        </View>
        <View style={styles.signinWrapper}>
          <TextButton
            onPress={handleLogin}
            text="Login"
            loading={loading}
            buttonStyles={styles.loginButton}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <TextTouchable
          onPress={() => onLinkPressed(Legal.ContactUs, Legal.CONTACT_US_URL)}
          text={Legal.ContactUs}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() =>
            onLinkPressed(Legal.PrivacyPolicy, Legal.PRIVACY_POLICY_URL)
          }
          text={Legal.PrivacyPolicy}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() =>
            onLinkPressed(
              Legal.TermsAndConditions,
              Legal.TERMS_AND_CONDITIONS_URL,
            )
          }
          text={Legal.TermsAndConditions}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() =>
            onLinkPressed(Legal.CookiePolicy, Legal.COOKIE_POLICY_URL)
          }
          text={Legal.CookiePolicy}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() =>
            onLinkPressed(
              Legal.WhistleblowerPolicy,
              Legal.WHISTLEBLOWER_POLICY_URL,
            )
          }
          text={Legal.WhistleblowerPolicy}
          textStyles={styles.linkText}
        />
      </View>
      <View style={styles.socialsContainer}>
        <Text style={styles.followUsText}>{Legal.FollowUs}</Text>
      </View>
      <View style={styles.socialIconsContainer}>
        <SvgButton
          onPress={() => openSocialLink(PEPPERSTONE_TWITTER_LINKS)}
          fill={theme.colors.common.white}
          Icon={TwitterSVG}
        />
        <SvgButton
          onPress={() => openSocialLink(PEPPERSTONE_FACEBOOK_LINKS)}
          fill={theme.colors.common.white}
          Icon={FacebookSVG}
        />
        <SvgButton
          onPress={() => openSocialLink(PEPPERSTONE_LINKEDIN_LINKS)}
          fill={theme.colors.common.white}
          Icon={LinkedInSVG}
        />
        <SvgButton
          onPress={() => openSocialLink(PEPPERSTONE_YOUTUBE_LINKS)}
          fill={theme.colors.common.white}
          Icon={YoutubeSVG}
        />
      </View>
      <Text style={styles.copyWrite}>{Legal.CopyWrite}</Text>
    </>
  );
};

export default GuestMenu;
