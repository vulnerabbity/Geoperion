import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { getRandomIndex, getShuffledArray } from "src/app/common/functions/random.functions"
import { Country } from "src/app/data/countries.data"
import { CountriesService } from "../../countries/countries.service"
import { CountryPage } from "./countries-games.interface"

/**Service for testing. It does not use config. Use not pure to use config */
export class CountriesGamesPureService {
  private countriesService = new CountriesService()
  private pagesNumber = 10
  private answersNumber = 4

  private countriesPartToTake: number = 1

  setCountriesPartToTake(value: number) {
    this.countriesPartToTake = value
  }

  setAnswersNumber(value: number) {
    this.answersNumber = value
  }

  setPagesNumber(value: number) {
    this.pagesNumber = value
  }

  getPages() {
    const pages: CountryPage[] = []

    for (let pageIndex = 0; pageIndex < this.pagesNumber; pageIndex++) {
      const newPage = this.getPage()
      pages.push(newPage)
    }

    return pages
  }

  getPage(): CountryPage {
    const answersOptions = this.getAnswersOptions()
    const rightAnswerIndex = getRandomIndex(answersOptions)

    return { options: answersOptions, rightAnswerIndex }
  }

  private getAnswersOptions() {
    const randomCountries = this.getRandomTopCountries()

    return randomCountries.slice(0, this.answersNumber)
  }

  private getRandomTopCountries() {
    const topCountries = this.getTopCountries()

    return getShuffledArray(topCountries)
  }

  private getTopCountries(): Country[] {
    this.countriesService.setSortBy("population")

    const topCountries = this.countriesService.getMany(this.getCountriesNumberToTake())

    return topCountries
  }

  private getCountriesNumberToTake(): number {
    const totalCountries = this.countriesService.getTotal()

    return Math.floor(totalCountries * this.countriesPartToTake)
  }
}
