const English = {
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
      Register: 'Register',
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
  },
} as const;

export default English;
