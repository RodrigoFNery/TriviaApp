import React, { memo, useEffect, useState } from 'react';
import { Text, View } from 'react-native'

//Components
import Header from '../components/Header';
import QuestionCard, { QuestionCardAnswer } from '../components/QuestionCard';

//Translation
import { translate } from "../locales";

//Navigation
import { IStackScreenProps } from '../navigation/StackScreenProps';

//styling
import styles from '../styles/appStyles';

import { decode } from 'html-entities';
import { useRoute } from '@react-navigation/native';
import { NavigatorParamList } from '../navigation/AppNavigator';


const QuizScreen: React.FC<IStackScreenProps> = (props) => {
  // const [isLoading, setLoading] = useState(true);
  // const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionCardAnswer[]>([])

  // const loadQuestions = async () => {
  //   try {
  //     const results: [QuestionProps] = await getQuestionsFromApi()
  //     setQuestions(results);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  const route = useRoute();

  const questions = route.params?.questions


  const { navigation } = props;

  const pullCardAnswer = (questionCardAnswer: QuestionCardAnswer): void => {
    console.log(questionCardAnswer.index + ' : ' + questionCardAnswer.answer)
    answers.push(questionCardAnswer)
    if (index < 9) {
      setIndex(index + 1)
    } else {
      navigation.navigate('Results')
    }
  }
  return (
    questions ? (
      <View style={styles.container}>
        <Header title={questions[index]?.category} />
        <QuestionCard index={index} question={decode(questions[index]?.question)} callbackFunction={pullCardAnswer} />
        <View style={styles.contentView}>
          <View style={styles.counterTextContainer}>
            <Text style={{ ...styles.defaultText, marginRight: 10 }}>{index + 1}</Text>
            <Text style={styles.defaultText}>{translate('of')}</Text>
            <Text style={{ ...styles.defaultText, marginLeft: 10 }}>10</Text>
          </View>
        </View>
      </View>
    ) : (<></>)
  )
}

export default memo(QuizScreen)
