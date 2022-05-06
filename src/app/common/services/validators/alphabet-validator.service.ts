import { Injectable } from "@angular/core"

interface AlphabetWithCandidate {
  alphabet: string
  candidate: string
}

@Injectable({ providedIn: "root" })
export class AlphabetValidatorService {
  private hexAlphabet = "0123456789abcdef"

  isHexString(candidate: string): boolean {
    return this.isAllSymbolsOfOneAlphabet({ candidate, alphabet: this.hexAlphabet })
  }

  private isAllSymbolsOfOneAlphabet(input: AlphabetWithCandidate): boolean {
    const { alphabet, candidate } = input
    const isEmptyString = candidate === ""
    if (isEmptyString) {
      return false
    }

    for (let candidateSymbol of candidate) {
      const isSymbolOfAlphabet = alphabet.includes(candidateSymbol)
      if (isSymbolOfAlphabet === false) {
        return false
      }
    }

    return true
  }
}
