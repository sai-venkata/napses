import { expect } from "chai";


describe("Find the Kth element of a list", () => {
  context("if no list is provided", () => {
    it("should return undefined", () => {
      let result = findK(1);
      expect(result).to.be.eq(undefined);
    });
  });
  context("if K value is not provided", () => {
    it("should return undefined", () => {
      let result = findK([1, 2, 3]);
      expect(result).to.be.eq(undefined);
    });
  });
  context("if k value and list are not provided", () => {
    it("should return undefined", () => {
      let result = findK();
      expect(result).to.be.eq(undefined);
    });
  });
  context("if k value is negative", () => {
    it("should return invalid k value", () => {
      let result = findK(-1, [1, 2, 3]);
      expect(result).to.be.eq("invalid arguments");
    });
  });
  context("if array is empty", () => {
    it("should return invalid arguments", () => {
      let result = findK(1, []);
      expect(result).to.be.eq("invalid arguments");
    });
  });
  context("if k value is greater than length of array", () => {
    it("should return invalid k value", () => {
      let result = findK(5, [1, 2, 3]);
      expect(result).to.be.eq("invalid arguments");
    });
  });

  context("if valid array and k values are provided", () => {
    it("should return kth element", () => {
      let result = findK(1, [1, 2, 3, 4]);
      expect(result).to.be.eq(1);
    });
  });
});

const findK = (k, arr) => {
  if (arr && k) {
    if (k <= 0 || k > arr.length || arr.length === 0) {
      return "invalid arguments";
    }
    return arr[k - 1];
  }
};