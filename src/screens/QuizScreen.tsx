/**
 * AllSeries.tsx
 * Renders the Quiz screen
 */

import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

// Components
import Header from '../components/Header'
import QuestionCard from '../components/QuestionCard'

// Translation
import { translate } from '../locales'

// Navigation
import { IStackScreenProps } from '../navigation/AppNavigator'

// Redux
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../redux'

// styling
import styles from '../styles/appStyles'

// Utils
import { decode } from 'html-entities'

interface QuizProps extends AppStateProps, IStackScreenProps { }

const QuizScreen = (props: QuizProps) => {
  const [index, setIndex] = useState(0)
  const { questions, navigation } = props

  const pullCardAnswer = (answer: string): void => {
    if (questions && index < questions.length) {
      questions[index].user_answer = answer
      if (index < questions.length - 1) {
        setIndex(index + 1)
      } else {
        navigation.navigate('Results')
      }
    }
  }

  return (
    questions
      ? (
      <View style={styles.container}>
        <Header title={questions[index]?.category} />
        <QuestionCard question={decode(questions[index]?.question)} callbackFunction={pullCardAnswer} />
        <View style={styles.contentView}>
          <View style={styles.counterTextContainer}>
            <Text style={{ ...styles.defaultText, marginRight: 10 }}>{index + 1}</Text>
            <Text style={styles.defaultText}>{translate('of')}</Text>
            <Text style={{ ...styles.defaultText, marginLeft: 10 }}>{questions.length}</Text>
          </View>
        </View>
      </View>
        )
      : (<></>)
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    questions: state.appReducer.questions
  }
}

const connector = connect(mapStateToProps)

type AppStateProps = ConnectedProps<typeof connector>

export default connector(QuizScreen)
