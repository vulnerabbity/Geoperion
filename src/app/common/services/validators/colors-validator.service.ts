import { Injectable } from "@angular/core"
import { removeFirstSignFromString } from "src/app/common/functions/string.functions"
import { AlphabetValidatorService } from "./alphabet-validator.service"

@Injectable({
  providedIn: "root",
})
export class ColorsValidatorService {
  private alphabetValidator = new AlphabetValidatorService()
  private hexColorsLengths = [3, 6]

  isHexColor(color: string) {
    if (this.isStartsWithHash(color)) {
      color = removeFirstSignFromString(color)
    }

    const isRightLength = this.hexColorsLengths.includes(color.length)
    if (isRightLength === false) {
      return false
    }

    return this.alphabetValidator.isHexString(color)
  }

  private isStartsWithHash(string: string): boolean {
    return string[0] === "#"
  }
}
