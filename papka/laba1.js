
    // Задаємо три змінних через вікно prompt та за допомогою методу split розбиваємо отриману строку на елементи масиву.Після цього викликаємо функцію sort(для сортування масиву) та функцію remove(для очищення масиву від однакових елементів)
    let a = prompt("Enter set A: ").split(", ");
    sort(a);
    a = remove(a);

    let b = prompt("Enter set B: ").split(", ");
    sort(b);
    b = remove(b);

    let c = prompt("Enter set C: ").split(", ");
    sort(c);
    c = remove(c);

    // Задаємо універсальну множину, в яку за допомогою методу spread копіюються елементи вище заданих змінних. Потім масив також пропускаємо через функцію remove, щоб видалити повторювані числа
    let universal = [...a, ...b, ...c]; 
    universal = remove(universal);
    
    // Функція remove пробігається по всім елементам масиву та видаляє ті, що повторюються за допомогою методу splice
    function remove(arr)
    {
        for(let i = 0; i < arr.length; i++)
        {
            for(let n = i + 1; n < arr.length; n++)
            {
                if(arr[i] === arr[n])
                {
                    arr.splice(n, 1);
                    n--;
                }
            }
        }
        return arr;
    } 
    
    // Функцію union ми реалізовуємо також за допомогою методу spread, який копіює елементи масивів, що увійшли у функцію, у змінну union. У return ми отримуємо цей масив, який складається з елементів, що не повторюються
    function union (x, y)
    {
        let union = [...x, ...y];
        return remove(union);
    } 
    
    // Функція difference працює за допомогою додаткової змінної. Якщо у масиві знайдено два однакових елементи, значення перемінної змінюється, цикл обривається та наступна умова не реалізовується. В іншому випадку, коли таких елементів не виявлено, то вони додаються до нового масиву differenceResult, тим самим він буде у собі містити унікальні елементи першого масиву, який увійшов у функцію. У кінці ми повертаємо цей новий масив.
    function difference(d, e)
    {
        let differenceResult= [];
            for(let i = 0; i < d.length; i++)
            {
                let found = false;

                for(let j = 0; j < e.length; j++)
                { 
                    if(d[i] == e[j])
                    {
                        found = true;
                        break; 
                    }
                }
                if(found == false)
                {
                    differenceResult.push(d[i]);
                }
            }
        return differenceResult;
    }
    // Функція compliment по факту є також самою як і difference, тому тут ми викликаємо саме цю функцію, але у цьому випадку наперед відомо, що у неї увійде універсальна множина та наш масив 
    function compliment(h)
    {
       return difference(universal, h);
    }
    
    // Аналогічна до функції difference, функція intersection, але тут ми навпаки додаємо до нового масиву intersectionResult елементи, які зустрічаються в обох масивах, та змінюємо значення змінної found, якщо таких елементів немає
    function intersection(f, g)
    {
        let intersectionResult = [];
        for(let i = 0; i < f.length; i++)
        {
            let found = false;

            for(let j = 0; g < g.length; j++)
            { 
                if(f[i] == g[j])
                {
                    intersectionResult.push(f[i]);
                    break; 
                }
            }
            if(found == false)
            {
                found = true;
            }
        }
        return intersectionResult;
    }
    // Функція BubleSort якщо знаходить елемент, що більше попереднього, то ми їх переставляємо, це ми робимо через третю змінну. 
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
    // У консолі ми б записали виклик вище перелічених функцій у такому порядку, щоб вони утворювали запропоновану формулу.
    console.log(); 