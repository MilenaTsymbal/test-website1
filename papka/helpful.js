// сортировка
function sort(arr){
    let arrlength = arr.length;
    let t;
  
    for (let i = 0; i < arrlength ; i++) 
    {
        for(let j = 0 ; j < arrlength - i - 1; j++)
        {
            if (arr[j] > arr[j + 1]) 
            {
                t = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = t;
            }
        }
    }
    return arr;
}
// test if there is any letter, return true  
/[a-zA-Z]/.test(pin)