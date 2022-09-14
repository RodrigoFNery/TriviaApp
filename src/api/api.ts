/**
 * api.ts
 * Privides functions to acess the server APIs
 */

// Entities
import { QuestionProps } from '../entities/Question'

const URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

export const getQuestionsFromApi = async (): Promise<[QuestionProps]> => {
  return await fetch(URL)
    .then(async (response) => await response.json()
      .then((json) => {
        return json.results
      })
      .catch((error) => {
        throw (error)
      })
    )
    .catch((error) => {
      throw (error)
    })
}
