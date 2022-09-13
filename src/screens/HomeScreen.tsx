/**
 * AllSeries.tsx
 * Renders the Home screen
 */

import React, { memo, useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'

//APIs
import { getQuestionsFromApi } from '../api/api';

//Entities
import { QuestionProps } from '../entities/Question';

// Redux
import { store } from '../redux/store';
import * as AppActions from "../redux/actions/appActions";

//Components
import Header from '../components/Header';

//Translation
import { translate } from "../locales";

//Navigation
import { IStackScreenProps } from '../navigation/AppNavigator';

//styling
import styles from '../styles/appStyles';

const HomeScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation, route } = props;
  const [isLoading, setLoading] = useState(false);

  const loadQuestions = async () => {
    setLoading(true)
    try {
      const questions: QuestionProps[] = await getQuestionsFromApi()
      if (questions && questions.length > 0) {
        store.dispatch(AppActions.setQuestions(questions))
        navigation.navigate('Quiz')
      } else {
        Alert.alert(
          translate("Error"),
          translate("ThereIsNoQuestionsToShow"),
          [{ text: translate("OK") }]
        );
      }
    } catch (error) {
      Alert.alert(
        translate("Error"),
        translate("CouldNotLoadQuestions") + error,
        [{ text: translate("OK") }]
      );
    } finally {
      setLoading(false);
    }
  }


  const onPress = () => {
    loadQuestions()
  }

  return (
    <View style={styles.container}>
      <Header title={translate('HomeHeader')} />
      <View style={styles.contentView}>
        <Text style={styles.defaultText}>{translate('HomeInstruction')}</Text>
        <Text style={styles.defaultText}>{translate('HomePrompt')}</Text>
        {isLoading && <ActivityIndicator color='#e93766' size="large" />}
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.defaultText}>{translate('HomeButtonText')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default memo(HomeScreen)
