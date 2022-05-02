import { Injectable } from "@angular/core"
import { getRandomIndex } from "src/app/common/functions/random.functions"
import { CountriesService } from "../countries/countries.service"
import { getGuessCountryConfigModule, GuessCountryConfig } from "./guess-country.config"
import { GuessCountryPage } from "./guess-country.interface"

@Injectable({ providedIn: "root" })
export class GuessCountryService {
  constructor(private config: GuessCountryConfig, private countriesService: CountriesService) {}

  async getPages() {
    const { gameLength: pagesNumber } = await this.getConfig()
    const pages: GuessCountryPage[] = []

    for (let pageNumber = 0; pageNumber < pagesNumber; pageNumber++) {
      const newPage = await this.getPage()
      pages.push(newPage)
    }

    return pages
  }

  private async getPage(): Promise<GuessCountryPage> {
    const answersOptions = await this.getAnswersOptions()
    const rightAnswerIndex = getRandomIndex(answersOptions)

    return { options: answersOptions, rightAnswerIndex }
  }

  private async getAnswersOptions() {
    const { answersLength } = await this.getConfig()

    return this.countriesService.getManyRandomUnique({ limit: answersLength })
  }

  private async getConfig() {
    return await this.config.getConfig()
  }
}

export async function getGuessCountryTestingService() {
  const config = await getGuessCountryConfigModule()
  const countriesService = new CountriesService()
  const service = new GuessCountryService(config, countriesService)

  return service
}
