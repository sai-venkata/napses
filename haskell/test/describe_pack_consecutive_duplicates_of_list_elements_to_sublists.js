import { expect } from "chai";

describe("Pack consecutive duplicates of list elements into sublists. If a list contains repeated elements they should be placed in separate sublists.", () => {
  context("if function is called without the list", () => {
    it("should return undefined", () => {
      let result = subList();
      expect(result).to.be.eql(undefined);
    });
  });

  context("if function is called with empty list", () => {
    it("should return empty list", () => {
      let result = subList([]);
      expect(result).to.be.eql([]);
    });
  });

  context("if function is called with empty list", () => {
    it("should return empty list", () => {
      let result = subList([]);
      expect(result).to.be.eql([]);
    });
  });

  context(
    "if function is called with list of values it should return separate sublists",
    () => {
      it("should return empty list", () => {
        let result = subList([1, 3, 2, 2, 3, 3, 4, 4, 5, 5, 3, 4, 4, 8, 9, 9]);
        expect(result).to.be.eql([
          [1],
          [3],
          [2, 2],
          [3, 3],
          [4, 4],
          [5, 5],
          [3],
          [4, 4],
          [8],
          [9, 9],
        ]);
      });
    }
  );
});

const subList = (arr) => {
  if (arr) {
    if (arr.length === 0) {
      return arr;
    }

    let res = [];
    let sub = [];
    for (let x of arr) {
      if (!sub.includes(x) && sub.length !== 0) {
        res.push(sub);
        sub = [];
      }

      sub.push(x);
    }
    res.push(sub);

    return res;
  }
};

