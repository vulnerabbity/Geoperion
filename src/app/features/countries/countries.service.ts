import { Injectable } from "@angular/core"
import { getRandomArrayItem } from "src/app/common/functions/random.functions"
import { CountriesList, Country } from "src/app/data/countries.data"

@Injectable()
export class CountriesService {
  private readonly countries = CountriesList

  getRandom(): Country {
    return getRandomArrayItem(this.countries)
  }
}
