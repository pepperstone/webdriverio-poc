import React from 'react';
import { Text, View } from 'react-native';

import { DiscoverAnalysisScreenProps } from './types';
import stylesCreator from './Styles';
import useStrings from 'src/common/hooks/useStrings';
import { useTheme } from 'src/lib/theme/Theme';

const DiscoverAnalysisScreen = (): DiscoverAnalysisScreenProps => {
	const [styles] = useTheme(stylesCreator);
	const strings = useStrings();

	return (
		<View style={styles.background}>
			<Text style={styles.text}>
				{strings.DiscoverScreen.Tabs.Analysis.Name}
			</Text>
		</View>
	);
};

export default DiscoverAnalysisScreen;
