import { CountriesList } from "src/app/data/countries.data"

export class CountiesLimitOutOfRange extends Error {
  constructor(limit: number) {
    super(`Country limit ${limit} out of range. Expected is ${CountriesList.length}`)
  }
}
