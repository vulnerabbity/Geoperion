import { Injectable } from "@angular/core"
import { GameStorageService } from "../game-storage.service"
import { GameLength } from "../settings.interface"

@Injectable({
  providedIn: "root",
})
export class GameLengthStorage extends GameStorageService<GameLength> {
  protected readonly defaultValue: GameLength = "short"
  protected readonly storageKey = "game-length"
}
