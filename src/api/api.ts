const URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

//Interfaces
export interface QuestionProps {
  category: string,
  type: boolean,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: [string],
  index: number,
  callbackFunction: (index: number, answer: boolean) => void
}

export const getQuestionsFromApi = async ():Promise<[QuestionProps]> => {
  return fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      return json.results
    })
    .catch((error) => {
      console.error(error);
    });
}
