import { Injectable } from "@angular/core"
import { getFlagFullPath } from "src/assets/images/flags/flags-getter"
import { CountriesService } from "../countries/countries.service"

@Injectable()
export class FlagsService {
  constructor(private countriesService: CountriesService) {}

  getRandomFlag({ useFullPath } = { useFullPath: true }): string {
    const randomCountry = this.countriesService.getRandom()
    const randomFlag = randomCountry.flag

    if (useFullPath) {
      return getFlagFullPath(randomFlag)
    }

    return randomFlag
  }
}
