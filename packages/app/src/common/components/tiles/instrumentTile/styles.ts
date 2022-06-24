import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  background: {
    backgroundColor: theme.colors.product.background.secondary,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 112,
    marginLeft: 12,
    marginTop: 12,
    minWidth: 140,
    padding: 12,
  },
  chart: {
    height: 20,
    marginTop: 8,
  },
  horiztonal: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  increase: {
    color: theme.colors.product.brand.primary,
    fontSize: 10,
    marginLeft: 6,
    marginTop: 4,
  },
  lineChartInset: {
    bottom: 20,
    top: 20,
  },
  loading: {
    marginTop: 20,
  },
  text: {
    color: theme.colors.product.text.strong,
    fontSize: 10,
    marginTop: 4,
  },
  title: {
    color: theme.colors.product.text.strong,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default stylesCreator;
