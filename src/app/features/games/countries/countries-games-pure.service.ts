import { getRandomIndex } from "src/app/common/functions/random.functions"
import { CountriesService } from "../../countries/countries.service"
import { CountryPage } from "./countries-games.interface"

/**Service for testing. It does not use config. Use not pure to use config */
export class CountriesGamesPureService {
  private countriesService = new CountriesService()
  private pagesNumber = 10
  private answersNumber = 4

  getPages() {
    const pages: CountryPage[] = []

    for (let pageIndex = 0; pageIndex < this.pagesNumber; pageIndex++) {
      const newPage = this.getPage()
      pages.push(newPage)
    }

    return pages
  }

  getPage(): CountryPage {
    const answersOptions = this.getAnswersOptions(this.answersNumber)
    const rightAnswerIndex = getRandomIndex(answersOptions)

    return { options: answersOptions, rightAnswerIndex }
  }

  setAnswersNumber(value: number) {
    this.answersNumber = value
  }

  setPagesNumber(value: number) {
    this.pagesNumber = value
  }

  private getAnswersOptions(amount: number) {
    return this.countriesService.getManyRandomUnique({ limit: amount })
  }
}
