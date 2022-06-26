import { GamePage } from "../games/games.interface"
import { GameStatistics, GameStatisticsInput } from "./statistics"

export class GameStatisticsGenerator {
  // don't allow to make instance
  private constructor() {}

  static updateStatisticsFromPages(statistics: GameStatistics, pages: GamePage<unknown>[]) {
    const { correctAnswers, totalAnswers, totalQuestions } = this.getStatisticsInput(pages)

    statistics.correctAnswers = correctAnswers
    statistics.totalAnswers = totalAnswers
    statistics.totalQuestions = totalQuestions
  }

  static generateFromPages(pages: GamePage<unknown>[]): GameStatistics {
    return new GameStatistics(this.getStatisticsInput(pages))
  }

  private static getStatisticsInput(pages: GamePage<unknown>[]): GameStatisticsInput {
    const totalQuestions = this.getTotalQuestions(pages)
    const totalAnswers = this.getTotalAnswers(pages)
    const correctAnswers = this.getCorrectAnswersNumber(pages)

    return { totalAnswers, correctAnswers, totalQuestions }
  }

  private static getTotalQuestions(pages: GamePage<unknown>[]): number {
    return pages.length
  }

  private static getTotalAnswers(pages: GamePage<unknown>[]): number {
    let answers = 0
    pages.forEach(page => {
      const isAnswered = typeof page.selectedAnswerIndex === "number"
      if (isAnswered) {
        answers++
      }
    })

    return answers
  }

  private static getCorrectAnswersNumber(pages: GamePage<unknown>[]) {
    let correct = 0
    pages.forEach(page => {
      const isCorrect = page.rightAnswerIndex === page.selectedAnswerIndex
      if (isCorrect) {
        correct++
      }
    })

    return correct
  }
}
