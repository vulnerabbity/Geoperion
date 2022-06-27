import { v4 as makeUUID } from "uuid"

export interface GameStatisticsInput {
  totalQuestions: number
  totalAnswers: number
  correctAnswers: number
}

export class GameStatistics {
  // constructed fields
  correctAnswers: number
  totalAnswers: number
  totalQuestions: number

  // auto fields
  public readonly id = makeUUID()
  public startTime: Date | string = new Date()
  public finishTime: Date | string | null = null

  static getDefault(): GameStatistics {
    return new this({ correctAnswers: 0, totalAnswers: 0, totalQuestions: 0 })
  }

  constructor({ correctAnswers, totalAnswers, totalQuestions }: GameStatisticsInput) {
    this.correctAnswers = correctAnswers
    this.totalAnswers = totalAnswers
    this.totalQuestions = totalQuestions
  }
}
