import { expect } from "chai";

describe("Finding the number of elements of a list", () => {
  context("if no list is provided", () => {
    it("should return undefined", () => {
      let result = arrLen();
      expect(result).to.be.eq(undefined);
    });
  });

  context("if list is empty", () => {
    it("should return 0", () => {
      let result = arrLen([]);
      expect(result).to.be.eql(0);
    });
  });

  context("if list is provided", () => {
    it("should return lenght of list", () => {
      let result = arrLen([1]);
      expect(result).to.be.eql(1);
    });
  });
});

const arrLen = (arr) => {
  if (arr) {
    return arr.length;
  }
};