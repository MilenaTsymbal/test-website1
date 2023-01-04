function solution1(words){
   let n = [];
   let m = [];
   for(let i = 0; i < words.length-1; i++){
      n = words[i].split('');
      m = words[i + 1].split('');
      if(n[n.length-1] !== m[0]){
         return false;
      }
   }
   return true;
}
// function solution(words){
   
// }
// console.log(solution(["empire", "entartaiment", "embrace", "cable"]));

function stray(numbers) {
   let n = 0;
   for(let i = 0; i < numbers.length; i++){
        
   }
}
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


