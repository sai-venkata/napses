const unique = (arr) => {
  if (arr) {
    if (arr.length === 0) {
      return arr;
    }

    let res = [arr[0]];
    for (let x = 1 ; x < arr.length;x++) {
        if(arr[x] !== res[res.length - 1]){
          
          res.push(arr[x])
        }
    }
    return res;
  }
};

let result = unique([1, 2, 2, 3, 3, 5, 5, 7, 8, 7, 7, 8, 8, 9,2]);

console.log(result)