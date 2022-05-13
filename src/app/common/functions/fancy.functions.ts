/**
 * Splits numbers by char. E.g. 10000 > 10,000
 */
export function getFancyNumberString(number: number, splitter = "'"): string {
  const reversedNumber = reverseString(String(number))

  let result = ""
  let letterNumber = 0

  for (let numberChar of reversedNumber) {
    letterNumber += 1
    // add number char to start
    result = numberChar + result

    const isNotFirst = letterNumber > 1
    const isNotLast = letterNumber < reversedNumber.length
    const isDividesByThree = letterNumber % 3 === 0
    const isThird = isNotFirst && isDividesByThree
    const needAddSplitter = isThird && isNotLast

    if (needAddSplitter) {
      result = splitter + result
    }
  }

  return result
}

function reverseString(string: string) {
  const chunks = string.split("")
  const reversedChunks = chunks.reverse()

  const result = reversedChunks.join("")

  return result
}
