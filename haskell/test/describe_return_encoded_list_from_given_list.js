import { expect } from "chai";


describe("return encoded list", () => {
  context("if function is called without the list", () => {
    it("should return undefined", () => {
      let result = encode();
      expect(result).to.be.eql(undefined);
    });
  });

  context("if function is called with empty list", () => {
    it("should return empty list", () => {
      let result = encode([]);
      expect(result).to.be.eql([]);
    });
  });
  context(
    "if function is called list of elements encoded value should return ",
    () => {
      it("should return encoded list", () => {
        let result = encode(["w", "w", "w", "a", "a", "a", "b", "b", "b"]);
        expect(result).to.be.eql([
          [3, "w"],
          [3, "a"],
          [3, "b"],
        ]);
      });
    }
  );
});

function encode(code) {
  if (code) {
    if (code.length === 0) {
      return code;
    }

    let encode = [];

    for (let i = 0; i < code.length; i++) {
      let count = 1;
      for (let j = i; j < code.length; j++) {
        if (code[i] !== code[j + 1]) break;
        count++;
        i++;
      }
      encode.push([count, code[i]]);
    }
    return encode;
  }
}
