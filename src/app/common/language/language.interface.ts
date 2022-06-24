export const Locales = ["EN", "RU"] as const

// make union type from array of locales
export type Locale = typeof Locales[number]
