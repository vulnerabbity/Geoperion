import { Injectable } from "@angular/core"
import { getRandomArrayItem, getShuffledArray } from "src/app/common/functions/random.functions"
import { CountriesList, Country } from "src/app/data/countries.data"
import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { CountiesLimitOutOfRange } from "./countries.errors"

@Injectable()
export class CountriesService {
  private readonly countries = CountriesList

  getRandom(): Country {
    return getRandomArrayItem(this.countries)
  }

  getManyRandomUnique({ limit }: { limit: number }) {
    this.validateLimit(limit)
    const shuffledCountries = getShuffledArray(this.countries)

    return shuffledCountries.slice(0, limit)
  }

  getByCode(code: CountryCode): Country {
    return this.countries.find(country => country.code === code)
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
