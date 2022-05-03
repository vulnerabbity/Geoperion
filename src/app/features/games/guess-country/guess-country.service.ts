import { Injectable } from "@angular/core"
import { getRandomIndex } from "src/app/common/functions/random.functions"
import { CountriesService } from "../../countries/countries.service"
import { getTestingGuessCountryConfig, GuessCountryConfig } from "./guess-country.config"
import { GuessCountryPage } from "./guess-country.interface"

@Injectable({ providedIn: "root" })
export class GuessCountryService {
  constructor(private config: GuessCountryConfig, private countriesService: CountriesService) {}

  async getPages() {
    const pagesNumber = await this.config.getGameLength()

    const pages: GuessCountryPage[] = []

    for (let pageNumber = 0; pageNumber < pagesNumber; pageNumber++) {
      const newPage = await this.getPage()
      pages.push(newPage)
    }

    return pages
  }

  async getPage(): Promise<GuessCountryPage> {
    const answersOptions = await this.getAnswersOptions()
    const rightAnswerIndex = getRandomIndex(answersOptions)

    return { options: answersOptions, rightAnswerIndex }
  }

  private async getAnswersOptions() {
    const answersLength = await this.config.getAnswersLength()

    return this.countriesService.getManyRandomUnique({ limit: answersLength })
  }
}

export function getGuessCountryTestingService() {
  const config = getTestingGuessCountryConfig()
  const countriesService = new CountriesService()
  const service = new GuessCountryService(config, countriesService)

  return service
}
