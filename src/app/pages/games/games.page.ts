import { Component, OnInit } from "@angular/core"
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

  constructor(private flagsService: FlagsService) {}

  private getRandomFlag() {
    const flag = this.flagsService.getRandomFlag()

    return flag
  }
}
