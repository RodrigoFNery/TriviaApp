/**
 * QuestionCard.tsx
 * Renders the Question Card
 */

import React, { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

//Translation
import { translate } from "../locales";

//styling
import styles from '../styles/appStyles';

//Interfaces
export interface QuestionCardProps {
  question: string,
  callbackFunction: (answer: string) => void
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {

  const {question, callbackFunction } = props

  const onTruePress = () => {
    callbackFunction('TRUE' )
  }

  const onFalsePress = () => {
    callbackFunction('FALSE')
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
