import { Injectable } from "@angular/core"
import { getRandomIndex } from "src/app/common/functions/random.functions"
import { CountriesService } from "../../countries/countries.service"
import { CountryPage } from "./countries-games.interface"

interface GetPagesInput {
  pagesNumber: number
  answersNumber?: number
}

/**Service for testing. It does not use config. Use not pure to use config */
@Injectable({ providedIn: "root" })
export class CountriesGamesPureService {
  private countriesService = new CountriesService()

  getPages(input: GetPagesInput) {
    const { answersNumber, pagesNumber } = input
    const pages: CountryPage[] = []

    for (let pageIndex = 0; pageIndex < pagesNumber; pageIndex++) {
      const newPage = this.getPage(answersNumber ?? 4)
      pages.push(newPage)
    }

    return pages
  }

  getPage(answerOptions: number = 4): CountryPage {
    const answersOptions = this.getAnswersOptions(answerOptions)
    const rightAnswerIndex = getRandomIndex(answersOptions)

    return { options: answersOptions, rightAnswerIndex }
  }

  private getAnswersOptions(amount: number) {
    return this.countriesService.getManyRandomUnique({ limit: amount })
  }
}
