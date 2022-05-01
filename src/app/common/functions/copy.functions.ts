export function makeDeepCopy<T>(object: T): T {
  return JSON.parse(JSON.stringify(object))
}
