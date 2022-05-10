import { Injectable } from "@angular/core"
import { getRandomIndex } from "src/app/common/functions/random.functions"
import { CountriesService } from "../../countries/countries.service"
import { GamesDefaultConfigService } from "../config/games-default-config.service"
import { GameService } from "../games.interface"
import { CountryPage } from "./countries-games.interface"

@Injectable({ providedIn: "root" })
export class CountriesGamesService implements GameService<CountryPage> {
  private countriesService = new CountriesService()

  constructor(private config: GamesDefaultConfigService) {}

  async getPages() {
    const pagesNumber = await this.config.getGameLength()

    const pages: CountryPage[] = []

    for (let pageNumber = 0; pageNumber < pagesNumber; pageNumber++) {
      const newPage = await this.getPage()
      pages.push(newPage)
    }

    return pages
  }

  async getPage(): Promise<CountryPage> {
    const answersOptions = await this.getAnswersOptions()
    const rightAnswerIndex = getRandomIndex(answersOptions)

    return { options: answersOptions, rightAnswerIndex }
  }

  private async getAnswersOptions() {
    const answersLength = await this.config.getAnswersLength()

    return this.countriesService.getManyRandomUnique({ limit: answersLength })
  }
}
