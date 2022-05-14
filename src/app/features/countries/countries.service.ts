import {
  sortAscendingFunction,
  sortDescendingFunction,
} from "src/app/common/functions/array.functions"
import { makeDeepCopy } from "src/app/common/functions/copy.functions"
import { getRandomArrayItem, getShuffledArray } from "src/app/common/functions/random.functions"
import { CountriesList, Country } from "src/app/data/countries.data"
import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { CountiesLimitOutOfRange } from "./countries.errors"

export type CountriesSortBy = "population" | "alphabet"

export class CountriesService {
  private readonly countries = CountriesList
  private sortedCountries = makeDeepCopy(this.countries)

  private sortBy: CountriesSortBy = "alphabet"

  constructor() {
    this.sort()
  }

  setSortBy(sortBy: CountriesSortBy) {
    this.sortBy = sortBy
    this.sort()
  }

  getRandom(): Country {
    return getRandomArrayItem(this.countries)
  }

  getMany(limit: number = this.countries.length) {
    return this.sortedCountries.slice(0, limit)
  }

  getTotal() {
    return this.countries.length
  }

  getByCode(code: CountryCode): Country {
    return this.countries.find(country => country.code === code)!
  }

  private sort() {
    const sortBy = this.sortBy

    if (sortBy === "population") {
      this.sortByPopulation()
    } else if (sortBy === "alphabet") {
      this.sortByAlphabet()
    }
  }

  private sortByPopulation() {
    this.sortedCountries.sort((a, b) => {
      return sortDescendingFunction(a.population, b.population)
    })
  }

  private sortByAlphabet() {
    this.sortedCountries.sort((a, b) => {
      return sortAscendingFunction(a.name, b.name)
    })
  }

  private validateLimit(limit: number) {
    if (this.isInvalidLimit(limit)) {
      throw new CountiesLimitOutOfRange(limit)
    }
  }

  private isInvalidLimit(limit: number) {
    const isMoreThanExpected = limit > this.countries.length
    const isLessThanExpected = limit < 0

    return isMoreThanExpected || isLessThanExpected
  }
}
