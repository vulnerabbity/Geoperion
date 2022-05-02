import { Injectable } from "@angular/core"
import { Storage } from "@ionic/storage-angular"
import { StorageService } from "src/app/common/services/storage.service"

export interface GuessCountryConfigVariables {
  answersLength: number
  gameLength: number
}

@Injectable({
  providedIn: "root",
})
export class GuessCountryConfig {
  private readonly answersLengthsKey = "guess-country-answers-length"

  private readonly lengthKey = "guess-country-length"

  constructor(private storage: StorageService) {}

  async getConfig(): Promise<GuessCountryConfigVariables> {
    const answersLength = await this.getAnswersLength()
    const gameLength = await this.getGameLength()

    return { answersLength, gameLength }
  }

  async getAnswersLength() {
    const result = await this.storage.get<number>(this.answersLengthsKey)

    return result ?? 2
  }

  async setAnswersLength(difficulty: number) {
    return await this.storage.set(this.answersLengthsKey, difficulty)
  }

  async clearAnswersLength() {
    await this.storage.destroy(this.answersLengthsKey)
  }

  async getGameLength() {
    const result = await this.storage.get<number>(this.lengthKey)

    return result ?? 10
  }

  async setGameLength(length: number) {
    await this.storage.set(this.lengthKey, length)
  }

  async clearGameLength() {
    await this.storage.destroy(this.lengthKey)
  }
}

export async function getGuessCountryConfigModule() {
  const storage = new Storage()
  await storage.create()
  const storageService = new StorageService(storage)
  const config = new GuessCountryConfig(storageService)

  return config
}
