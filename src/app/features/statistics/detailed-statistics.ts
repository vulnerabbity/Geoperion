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
      const startTimeInMs = new Date(statistics.startTime).valueOf()
      const finishTimeInMs = new Date(statistics.finishTime).valueOf()

      const differenceInMs = finishTimeInMs - startTimeInMs

      const differenceInSeconds = differenceInMs / 1000

      return differenceInSeconds
    }
    return
  }

  private static getWrongAnswers(statistics: GameStatistics) {
    return statistics.totalAnswers - statistics.correctAnswers
  }
}
