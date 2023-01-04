function main(){
   let negation = (a) => !A;
   let conjuction = (a, b) => a && b;
   let disjuction = (a, b) => a || b;
   let equals = (a, b) => a === b;
   let implication = (a, b) => a ? b : true ;
   
   let A = !!(+(prompt('A: ')));
   let B = !!(+prompt('B: '));
   let C = !!(+prompt('C: '));
   main();
}

