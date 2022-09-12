import React, { memo, useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { getQuestionsFromApi, QuestionProps } from '../api/api';

//Components
import Header from '../components/Header';

//Translation
import { translate } from "../locales";

//Navigation
import { IStackScreenProps } from '../navigation/StackScreenProps';
import { NavigatorParamList } from '../navigation/AppNavigator';

//styling
import styles from '../styles/appStyles';

const HomeScreen: React.FC<IStackScreenProps> = (props) => {
  const { navigation, route } = props;
  const [isLoading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  const loadQuestions = async () => {
    setLoading(true)
    getQuestionsFromApi().then((results: [QuestionProps]) => {
      setQuestions(results);
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      setLoading(false);
    })
  }

  const onPress = () => {
    loadQuestions().then(() => {
      navigation.navigate('Quiz', {
        questions: questions,
      } as NavigatorParamList)
    })
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
