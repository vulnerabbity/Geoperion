import { Injectable } from "@angular/core"
import { getRandomIndex } from "src/app/common/functions/random.functions"
import { CountriesService } from "../../countries/countries.service"
import { GamesDefaultConfigService } from "../config/games-default-config.service"
import { CountriesGamesPureService } from "./countries-games-pure.service"
import { CountryPage } from "./countries-games.interface"

@Injectable({ providedIn: "root" })
export class CountriesGamesService {
  private pureService = new CountriesGamesPureService()

  constructor(private config: GamesDefaultConfigService) {}

  async getPages() {
    const pagesNumber = await this.config.getGameLength()
    const answersNumber = await this.config.getAnswersLength()

    return this.pureService.getPages({ pagesNumber: pagesNumber, answersNumber })
  }
}
