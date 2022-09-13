/**
 * QuestionProps.ts
 * Represents the question entity
 */

//Interfaces
export interface QuestionProps {
    category: string,
    type: boolean,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: [string],
    index: number,
    user_answer: string,
    callbackFunction: (index: number, answer: boolean) => void
  }