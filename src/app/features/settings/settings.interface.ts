export enum GameDifficulties {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export type GameDifficulty = `${GameDifficulties}`

export enum GameLengths {
  Short = "short",
  Medium = "medium",
  Long = "long",
}

export type GameLength = `${GameLengths}`

export enum AppBackgroundThemes {
  Light = "light",
  Dark = "dark",
  Black = "black",
}

export type AppBackgroundTheme = `${AppBackgroundThemes}`

export interface AppTheme {
  background: AppBackgroundTheme
}
