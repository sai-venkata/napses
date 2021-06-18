import { expect } from "chai";

describe("Find the last element of a list", () => {
  context("if no list is provided", () => {
    it("should return undefined", () => {
      let result = process();
      expect(result).to.be.eq(undefined);
    });
  });

  context("if list is empty", () => {
    it("should return undefined", () => {
      let result = process();
      expect(result).to.be.eql(undefined);
    });
  });

  context("if only one element is present in the list", () => {
    it("should return undefined", () => {
      let result = process([1]);
      expect(result).to.be.eql(1);
    });

    context("if more than one element is present in the list", () => {
      it("should return last but one element", () => {
        let result = process([1, 2]);
        expect(result).to.be.eql(2);
      });
    });
  });
});

const process = (arr) => {
  if (arr) {
    return arr[arr.length - 1];
  }
};
