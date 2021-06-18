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

encode(["w", "w", "w", "a", "a", "a", "b", "b", "b"]);