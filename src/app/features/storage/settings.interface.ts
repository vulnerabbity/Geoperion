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
  Nord = "nord",
  Github = "github",
  Retro = "retro",
}

export type AppBackgroundTheme = `${AppBackgroundThemes}`

export interface AppTheme {
  background: AppBackgroundTheme
  hexAccent: string
}
