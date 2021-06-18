import { expect } from "chai";

describe("Find the last but one element of a list", () => {
  context("if no list is provided", () => {
    it("should return undefined", () => {
      let result = lastButOne();
      expect(result).to.be.eq(undefined);
    });
  });

  context("if list is empty", () => {
    it("should return undefined", () => {
      let result = lastButOne();
      expect(result).to.be.eql(undefined);
    });
  });

  context("if only one element is present in the list", () => {
    it("should return undefined", () => {
      let result = lastButOne([1]);
      expect(result).to.be.eql(undefined);
    });

    context("if more than one element is present in the list", () => {
      it("should return last but one element", () => {
        let result = lastButOne([1, 2]);
        expect(result).to.be.eql(1);
      });
    });
  });
});

const lastButOne = (arr) => {
  if (arr) {
    return arr[arr.length - 2];
  }
};
