import { expect } from "chai";


describe("finding whether a list is palindrome or not", () => {
  context("if no list is provided", () => {
    it("should return undefined", () => {
      let result = palindrome();
      expect(result).to.be.eq(undefined);
    });
  });

  context("if list is empty", () => {
    it("should return false", () => {
      let result = palindrome([]);
      expect(result).to.be.eql(false);
    });
  });

  context("if list has only one element", () => {
    it("should return true", () => {
      let result = palindrome([-1]);
      expect(result).to.be.eql(true);
    });
  });

  context("if list has even number of  elements", () => {
    it("should check and return true if list is palindorme and false if not", () => {
      let result = palindrome([1, 2, 1]);
      expect(result).to.be.eql(true);
    });
  });
});

const palindrome = (arr) => {
  if (arr) {
    if (arr.length === 0) {
      return false;
    } else if (arr.length === 1) {
      return true;
    } else {
      for (let i = 0; i <= arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
          return false;
        }
      }

      return true;
    }
    return true;
  }
};