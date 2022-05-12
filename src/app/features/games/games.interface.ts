export interface GamePage<T> {
  options: T[]

  rightAnswerIndex: number
  selectedAnswerIndex?: number
}

export interface GameService<T> {
  getPage(): Promise<T> | T
  getPages(): Promise<T[]> | T[]
}
