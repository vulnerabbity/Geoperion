import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { GameStatistics } from "./statistics"
import { GameStatisticsStorage } from "./statistics-storage"

export class GameStatisticsManager {
  private static storage = new GameStatisticsStorage()

  // district instances because of static class
  private constructor() {}

  static async save(statistics: GameStatistics) {
    const statisticsList = await this.storage.get()

    statisticsList.push(statistics)
    await this.storage.set(statisticsList)
  }

  static async finishAndSave(statistics: GameStatistics) {
    const finished = this.finish(statistics)

    await this.save(finished)
  }

  static async removeById(id: string) {
    const statisticsList = await this.storage.get()
    statisticsList.filter(statistics => statistics.id !== id)

    await this.storage.set(statisticsList)
  }

  static async removeAll() {
    await this.storage.remove()
  }

  private static finish(statistics: GameStatistics): GameStatistics {
    const isAlreadyFinished = statistics.finishTime
    if (isAlreadyFinished) {
      return makeDeepCopy(statistics)
    }

    const statisticsCopy = makeDeepCopy(statistics)

    statisticsCopy.finishTime = new Date()

    return statisticsCopy
  }
}
