import { Injectable } from "@angular/core"
import { StorageService } from "src/app/common/services/storage.service"
import { GameLength } from "./settings.interface"

@Injectable({
  providedIn: "root",
})
export class GameLengthStorage extends StorageService<GameLength> {
  protected readonly defaultValue: GameLength = "short"
  protected readonly storageKey = "game-length"
}
