import { GameStatistics } from "./statistics"

export interface DetailedGameStatistics extends GameStatistics {
  wrongAnswers: number
  secondsPassed?: number
}

export class DetailedGameStatisticsGenerator {
  private constructor() {}

  static generate(statistics: GameStatistics): DetailedGameStatistics {
    const secondsPassed = this.getSecondsPassed(statistics)
    const wrongAnswers = this.getWrongAnswers(statistics)

    return { ...statistics, secondsPassed, wrongAnswers }
  }

  private static getSecondsPassed(
    statistics: GameStatistics,
  ): DetailedGameStatistics["secondsPassed"] | undefined {
    if (statistics.finishTime) {
      const startTime = new Date(statistics.startTime).getUTCSeconds()
      const finishTime = new Date(statistics.finishTime).getUTCSeconds()

      const difference = finishTime - startTime

      return difference
    }
    return
  }

  private static getWrongAnswers(statistics: GameStatistics) {
    return statistics.totalAnswers - statistics.correctAnswers
  }
}
