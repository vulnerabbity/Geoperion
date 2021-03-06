import { Component } from "@angular/core"
import { LanguageServiceInstance } from "src/app/common/language/language.service"
import { FlagsService } from "src/app/features/flags/flags.service"
import { GamesPaths } from "./games-routing.module"

@Component({
  templateUrl: "./games.page.html",
  styleUrls: ["./games.page.scss"],
})
export class GamesPage {
  paths = GamesPaths
  flags = {
    guessCountry: this.getRandomFlag(),
    guessCapital: this.getRandomFlag(),
    guessPopulation: this.getRandomFlag(),
  }

  get translation() {
    return LanguageServiceInstance.translation.gamesPage
  }

  constructor(private flagsService: FlagsService) {}

  private getRandomFlag() {
    const flag = this.flagsService.getRandomFlag()

    return flag
  }
}
