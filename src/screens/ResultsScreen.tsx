import React, { memo } from 'react';
import { Text, View } from 'react-native'

//Translation
import { translate } from "../locales";

//styling
import styles from '../styles/appStyles';

const ResultsScreen = ():JSX.Element =>  {
  return (
      <View style={styles.container}>
        <Text>{translate('ResultsScreen')}</Text>
      </View>
  )
}

export default memo(ResultsScreen)
