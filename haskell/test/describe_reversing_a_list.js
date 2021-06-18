import { expect } from "chai";


describe("Reversing a list", () => {
  context("if no list is provided", () => {
    it("should return undefined", () => {
      let result = rev();
      expect(result).to.be.eq(undefined);
    });
  });

  context("if list is empty", () => {
    it("should return empty list", () => {
      let result = rev([]);
      expect(result).to.be.eql([]);
    });
  });

  context("if list of values is provided", () => {
    it("should return reversed list", () => {
      let result = rev([1, 2, 3, 4]);
      expect(result).to.be.eql([4, 3, 2, 1]);
    });
  });
});

let rev = (arr) => {
  if (arr) {
    if (arr.length === 0) {
      return arr;
    }
    let revArr = [];
    for (let i = 0; i < arr.length; i++) {
      revArr.unshift(arr[i]);
    }
    return revArr;
  }
};