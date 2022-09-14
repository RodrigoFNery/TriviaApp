/**
 * AllSeries.tsx
 * Renders the Quiz screen
 */

import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

// Components
import Header from '../components/Header'

// Translation
import { translate } from '../locales'

// Navigation
import { IStackScreenProps } from '../navigation/AppNavigator'

// Redux
import { connect, ConnectedProps } from 'react-redux'
import { RootState, store } from '../redux'
import * as AppActions from '../redux/actions/appActions'

// styling
import styles from '../styles/appStyles'

// Utils
import { decode } from 'html-entities'
import { QuestionProps } from '../entities/Question'

interface ResultsProps extends AppStateProps, IStackScreenProps { }

const ResultsScreen = (props: ResultsProps) => {
  const { questions, navigation } = props

  const onPress = () => {
    store.dispatch(AppActions.setQuestions([]))
    navigation.navigate('Home')
  }

  const getScoreText = () => {
    let score = 0
    questions.map((question) => {
      if (question.correct_answer.toUpperCase().trim() === question.user_answer.toUpperCase().trim()) {
        score++
      }
    })
    return score + ' ' + translate('of') + ' ' + questions.length
  }

  const getSignText = (question: QuestionProps) => {
    if (question.correct_answer.toUpperCase().trim() === question.user_answer.toUpperCase().trim()) {
      return '+'
    } else {
      return '-'
    }
  }

  return (
    questions
      ? (
      <View style={styles.container}>
        <Header title={translate('YouScored') + '\n' + getScoreText()} />
        <ScrollView style={styles.scrollView}>
          {questions.map((question, index) => {
            return (
              <View key={index} style={styles.resultsRows}>
                <Text style={{ ...styles.resultsText, fontWeight: 'bold' }}>{getSignText(question)}</Text>
                <Text style={{ ...styles.resultsText }}>{decode(question.question)}</Text>
              </View>
            )
          })}
        </ScrollView >
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.defaultText}>{translate('PlayAgain')}</Text>
        </TouchableOpacity>
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

export default connector(ResultsScreen)
