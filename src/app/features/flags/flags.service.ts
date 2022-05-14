import { Injectable } from "@angular/core"
import { CountryCode } from "src/app/interfaces/iso-3166.interface"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"
import { CountriesService } from "../countries/countries.service"

@Injectable({
  providedIn: "root",
})
export class FlagsService {
  private countriesService = new CountriesService()

  getRandomFlag(): string {
    const randomCountry = this.countriesService.getRandom()
    const randomFlag = randomCountry.flag

    return getFlagFullPath(randomFlag)
  }

  getFlagByCode(code: CountryCode) {
    const country = this.countriesService.getByCode(code)

    return getFlagFullPath(country.flag)
  }
}
