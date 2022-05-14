import { Injectable } from "@angular/core"
import { GamesDefaultConfigService } from "../config/games-default-config.service"
import { CountriesGamesPureService } from "./countries-games-pure.service"

@Injectable({ providedIn: "root" })
export class CountriesGamesService {
  private pureService = new CountriesGamesPureService()

  constructor(private config: GamesDefaultConfigService) {}

  async getPages() {
    await this.updateConfig()

    return this.pureService.getPages()
  }

  async getPage() {
    await this.updateConfig()

    return this.pureService.getPage()
  }

  private async updateConfig() {
    const pagesNumber = await this.config.getGameLength()
    const countriesPart = await this.config.getCountriesPartPerDifficulty()

    this.pureService.setCountriesPartToTake(countriesPart)
    this.pureService.setPagesNumber(pagesNumber)
  }
}
