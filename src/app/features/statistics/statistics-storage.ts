import { StorageService } from "src/app/common/services/storage.service"
import { GameStatistics } from "./statistics"

export class GameStatisticsStorage extends StorageService<GameStatistics[]> {
  protected defaultValue: GameStatistics[] = []
  protected storageKey = "game-statistics"
}
