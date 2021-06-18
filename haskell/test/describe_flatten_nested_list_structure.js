import { expect } from "chai";


describe("Flatten a nested list structure", () => {
  context("if function is called without the list", () => {
    it("should return undefined", () => {
      let result = flatten();
      expect(result).to.be.eql(undefined);
    });
  });
  context("if function is called with empty list", () => {
    it("should return empty list", () => {
      let result = flatten([]);
      expect(result).to.be.eql([]);
    });
  });
  context("if function is list which has empty lists", () => {
    it("should return empty list", () => {
      let result = flatten([[], []]);
      expect(result).to.be.eql([]);
    });
  });
  context("if function is list consisting nested lists ", () => {
    it("should return single consolidated list", () => {
      let result = flatten([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ]);
      expect(result).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
});

const flatten = (arr) => {
  if (arr) {
    let res = [];
    for (let x of arr) {
      for (let y of x) {
        res.push(y);
      }
    }
    return res;
  }
};