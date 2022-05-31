export type StringsType = {
  LoginScreen: {
    Name: string,
    Message: string,
    Placeholders: {
      Username: string,
      Password: string,
    },
    Errors: {
      Username: string,
      Password: string,
      Email: string,
    },
    Buttons: {
      Login: string,
      Register: string,
    },
  },
  RegisterScreen: {
    Name: string,
    URL: string,
  },
  WatchlistsScreen: {
    Name: string,
  },
  SearchScreen: {
    Name: string,
  },
  MarketsScreen: {
    Name: string,
  },
  PortfolioScreen: {
    Name: string,
  },
  AnalysisScreen: {
    Name: string,
  },
  DiscoverScreen: {
    Name: string,
  },
};
