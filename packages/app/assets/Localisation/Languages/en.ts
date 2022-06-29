export default {
  common: {
    OR: 'OR',
  },
  LandingScreen: {
    Name: 'Landing',
    Guest: 'Enter as Guest',
    Login: 'Login',
    Signup: 'Sign up',
  },
  LoginScreen: {
    Name: 'Login',
    Message: 'Enter your details',
    Placeholders: {
      Username: 'Email',
      Password: 'Password',
    },
    Errors: {
      Username: 'Please enter an email',
      Password: 'Please enter a password',
      Email: 'Please enter a valid email address',
    },
    Buttons: {
      Login: 'Log In',
      Signup: 'Sign up',
    },
  },
  RegisterScreen: {
    Name: 'Register',
    URL: 'https://secure.pepperstone.com/register?legalEntity=individual&locale=en',
  },
  WatchlistsScreen: {
    Name: 'Watchlists',
  },
  SearchScreen: {
    Name: 'Search',
  },
  MarketsScreen: {
    Name: 'Markets',
  },
  PortfolioScreen: {
    Name: 'Portfolio',
  },
  AnalysisScreen: {
    Name: 'Analysis',
  },
  DiscoverScreen: {
    Name: 'Discover',
    ProfileDrawerMenu: {
      Authenticated: {
        Incomplete: {
          IncompleteMessage: 'Your account is nearly complete. Finalise the remaining tasks to trade live.',
          Buttons: {
            CompleteSuitabilityTest: 'Complete suitability test',
            FundYourTradingAccount: 'Fund your trading account',
            VerifyYourProfile: 'Verify your profile',
          },
        },
        Complete: {
          Buttons: {
            ViewProfile: 'View Profile',
            TradingAccounts: 'Trading Accounts',
            FinancialStatements: 'Financial Statements',
            Deposit: 'Deposit',
            Withdraw: 'Withdraw',
            Transfer: 'Transfer',
            Settings: 'Settings',
            OneClickTrading: 'One Click Trading',
            ApplyForPepperstonePro: 'Apply for Pepperstone Pro',
            ReferAFriend: 'Refer a Friend',
            Logout: 'Log out',
          },
        },
      },
    },
    Tabs: {
      Feed: {
        Name: 'Feed',
      },
      Analysis: {
        Name: 'Analysis',
      },
      Events: {
        Name: 'Events',
      },
    },
  },
  Legal: {
    ContactUs: 'Contact us',
    CONTACT_US_URL: 'https://pepperstone.com/en-au/contact-us/',

    PrivacyPolicy: 'Privacy policy',
    PRIVACY_POLICY_URL: 'https://assets.pepperstone.com/legal/APAC_ROW/PrivacyPolicy.pdf',

    TermsAndConditions: 'Terms & conditions',
    TERMS_AND_CONDITIONS_URL: 'https://files.pepperstone.com/legal/UK_EU/UK-Website-Terms-and-Conditions.pdf',

    WhistleblowerPolicy: 'Whistleblower policy',
    WHISTLEBLOWER_POLICY_URL: 'https://files.pepperstone.com/legal/APAC_ROW/AU-Whistleblower-Policy.pdf',

    CookiePolicy: 'Cookie Policy',
    COOKIE_POLICY_URL: 'https://assets.pepperstone.com/legal/UK_EU/Cookie_Policy.pdf',

    CopyWrite: '© 2020 Pepperstone Group Limited',
    FollowUs: 'Follow us',
  },
};
