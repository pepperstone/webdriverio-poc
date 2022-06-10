import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  background: {
    marginTop: 12,
    marginLeft: 12,
    minWidth: 140,
    padding: 12,
    backgroundColor: theme.colors.product.background.secondary,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 112,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    color: theme.colors.product.text.strong,
  },
  text: {
    fontSize: 10,
    color: theme.colors.product.text.strong,
    marginTop: 4,
  },
  increase: {
    fontSize: 10,
    color: theme.colors.product.brand.primary,
    marginLeft: 6,
    marginTop: 4,
  },
  horiztonal: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  chart: {
    marginTop: 8,
    height: 20,
  },
  loading: {
    marginTop: 20,
  },
  lineChartInset: {
    top: 20,
    bottom: 20,
  },
});

export default stylesCreator;
