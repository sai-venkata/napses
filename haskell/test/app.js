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
        let result = subList([1, 3, 2, 2, 3, 3, 4, 4,5,5,3,4,4,8,9,9]);
        expect(result).to.be.eql([
          [1],
          [3],
          [2,2],
          [3,3],
          [4,4],
          [5,5],
          [3],
          [4,4],
          [8],
          [9,9]
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


describe.only('',() =>{
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
    context("if function is called list of elements encoded value should return ", () => {
      it("should return encoded list", () => {
        let result = encode(["w", "w", "w", "a", "a", "a", "b", "b", "b"]);
        expect(result).to.be.eql([[3, 'w'], [3, 'a'], [3, 'b']]);
      });
    });
})

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
