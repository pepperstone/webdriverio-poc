import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import { InstrumentTileProps } from './types';
import { LineChart } from 'react-native-svg-charts';
import React from 'react';
import stylesCreator from './styles';
import { useInstrumentTileHook } from './hooks';
import { useTheme } from 'src/lib/theme/Theme';

const InstrumentTile = ({ id }: InstrumentTileProps) => {
  const [styles, theme] = useTheme(stylesCreator);
  const { loading, values } = useInstrumentTileHook({ id });

  return (
    <TouchableOpacity style={styles.background}>
      <Text style={styles.title}>{values.title.replace('/', '')}</Text>
      <Text style={styles.text}>{values.title}</Text>

      {loading ? (
        <ActivityIndicator
          size="small"
          style={styles.loading}
          color={theme.colors.common.blue}
        />
      ) : (
        <>
          <View style={styles.horiztonal}>
            <Text style={styles.text}>{values.value}</Text>
            <Text style={styles.increase}>{values.increase}</Text>
          </View>
          <Text style={styles.text}>{values.volume}</Text>
          <LineChart
            style={styles.chart}
            data={values.data}
            svg={{ stroke: theme.colors.product.brand.primary }}
            contentInset={styles.lineChartInset}
          />
        </>
      )}
    </TouchableOpacity>
  );
};

export default InstrumentTile;
