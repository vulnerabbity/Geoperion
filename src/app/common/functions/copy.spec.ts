import { makeDeepCopy } from "./copy.functions"

describe("Copy functions", () => {
  describe("makeDeepCopy", () => {
    it("should not modify original object", () => {
      const personSample = makePersonSample()

      const personCopy = makeDeepCopy(personSample)

      personCopy.age = -2
      personCopy.kids.alice = "not alice"
      personCopy.kids.john = "not john"

      expect(personSample).toEqual(makePersonSample())
    })
  })
})

function makePersonSample() {
  return {
    name: "Bob",
    age: 45,
    kids: {
      alice: "Alice",
      john: "John",
    },
  }
}
