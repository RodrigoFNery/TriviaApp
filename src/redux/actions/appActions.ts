/**
 * appActions.ts
 * Holds the app Redux Actions
 */

//Entities
import { QuestionProps } from "../../entities/Question";

//ActionConstants
export enum AppActionConstants {
    SET_QUESTIONS = 'SET_QUESTIONS',
}

//Interfaces
export interface SetQuestions {
    readonly type: typeof AppActionConstants.SET_QUESTIONS
    questions: QuestionProps[]
}

export type AppAction = SetQuestions

export type AppDispatch = (action: AppAction) => void;

//Functions
export function setQuestions(questions: QuestionProps[]) {
    return {
        type: AppActionConstants.SET_QUESTIONS,
        questions: questions
    };
}