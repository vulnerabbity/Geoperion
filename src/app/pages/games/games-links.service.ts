import { Injectable } from "@angular/core"
import { GamesPaths } from "./games-routing.module"

@Injectable({
  providedIn: "root",
})
export class GamesLinksService {
  getLinkToGames() {
    return `/${GamesPaths.Games}`
  }

  getLinkToGuessCountry() {
    return `/${GamesPaths.Games}/${GamesPaths.GuessCountry}`
  }
}
