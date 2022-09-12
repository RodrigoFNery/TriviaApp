import React, { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

//Translation
import { translate } from "../locales";

//styling
import styles from '../styles/appStyles';

//Interfaces
export interface QuestionCardAnswer {
  index: number,
  answer: string
}

export interface QuestionCardProps {
  index: number,
  question: string,
  callbackFunction: (questionCardAnswer: QuestionCardAnswer) => void
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {

  const { index, question, callbackFunction } = props

  const onTruePress = () => {
    const questionCardAnswer: QuestionCardAnswer = { index: index, answer: 'TRUE' }
    callbackFunction(questionCardAnswer)
  }

  const onFalsePress = () => {
    const questionCardAnswer: QuestionCardAnswer = { index: index, answer: 'FALSE' }
    callbackFunction(questionCardAnswer)
  }

  return (
    <View style= {styles.cardContainer}>
      <Text style={styles.defaultText}>{question}</Text>
      <View style={styles.answerButtonsContainer}>
        <TouchableOpacity onPress={onTruePress}>
          <Text style={styles.defaultText}>{translate('TRUE')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onFalsePress}>
          <Text style={styles.defaultText}>{translate('FALSE')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default memo(QuestionCard)
