import { ActivityIndicator, Text, View } from 'react-native';

import { InstrumentTileProps } from './types';
import { LineChart } from 'react-native-svg-charts';
import React from 'react';
import stylesCreator from './Styles';
import { useInstrumentTileHook } from './Hooks';
import { useTheme } from '../../../../lib/theme/Theme';

const InstrumentTile = ({ id }: InstrumentTileProps) => {
  const [styles, theme] = useTheme(stylesCreator);
  const { loading, values } = useInstrumentTileHook({ id });

  return (
    <View style={styles.background}>
      <Text style={styles.title}>{values.title.replace('/', '')}</Text>
      <Text style={styles.text}>{values.title}</Text>

      {loading ? (
        <ActivityIndicator
          size="small"
          style={styles.loading}
          color={theme.colors.blue}
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
            svg={{ stroke: theme.colors.blue }}
            contentInset={styles.lineChartInset}
          />
        </>
      )}
    </View>
  );
};

export default InstrumentTile;
