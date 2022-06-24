import { StorageService } from "src/app/common/services/storage.service"
import { GameStorageEvents } from "./game-storage.events"

export abstract class GameStorageService<T> extends StorageService<T> {
  override async set(newValue: T): Promise<void> {
    await super.set(newValue)
    GameStorageEvents.storageChanged$.next()
  }
}
