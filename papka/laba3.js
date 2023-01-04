let a = [1, 2, 3, 4];
function permutation(inputArr){
    let result = [];
  
    function permute(arr, m){
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr, []);
  
   return result;
}
console.table(permutation(a));

let array = [1, 2, 3, 4];
function getCombinations(chars) {
    let result = [];
    let f = function (prefix, chars) {
        for (let i = 0; i < chars.length; i++) {
            result.push(prefix + chars[i]);
            f(prefix + chars[i], chars.slice(i + 1));
        }
    }
    f('', chars);
    return result;
}
console.table(getCombinations(array))
