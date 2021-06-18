import { expect } from "chai";

describe("Eliminate consecutive duplicates of list elements", () => {
  context("if function is called without the list", () => {
    it("should return undefined", () => {
      let result = unique();
      expect(result).to.be.eql(undefined);
    });
  });
  context("if function is called with empty list", () => {
    it("should return empty list", () => {
      let result = unique([]);
      expect(result).to.be.eql([]);
    });
  });
  context("if function is called with list of values", () => {
    it("should return unique list removing the duplicates", () => {
      let result = unique([
        1, 2, 2, 5, 3, 3, 5, 5, 7, 8, 7, 7, 8, 8, 9, 9, 9, 8, 8, 2, 2,
      ]);
      expect(result).to.be.eql([1, 2, 5, 3, 5, 7, 8, 7, 8, 9, 8, 2]);
    });
  });
});

const unique = (arr) => {
  if (arr) {
    if (arr.length === 0) {
      return arr;
    }
    let res = [arr[0]];
    for (let x = 1; x < arr.length; x++) {
      if (arr[x] !== res[res.length - 1]) {
        res.push(arr[x]);
      }
    }
    return res;
  }
};