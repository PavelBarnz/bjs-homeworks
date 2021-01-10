/***************ЗАДАЧА 1*****************/
function getSolutions( a, b, c ) {
    let roots = [];
    
    let D = Math.pow(b, 2) - 4 * a * c;

    if(D === 0){
        let x1 = 0;
        roots.push(x1 = (-b / (2 * a)))
    } else if(D > 0){
        let x1 = 0, x2 = 0;
        roots.push(x1 = (-b - Math.sqrt(D) / (2 * a)));    
        roots.push(x2 = (-b + Math.sqrt(D) / (2 * a)));};
    
    return {D: D, roots: roots};
};


function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x^+${b}x+${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if(result.D < 0) {
        console.log("Уравнение не имеет вещественных корней.");
    } else if(result.D === 0) {
        console.log(`Уравнение имеет один корень х1 = ${result.roots}`);
    } else if(result.D > 0) {
        console.log(`Уравнение имеет два корня: х1 = ${result.roots[0].toFixed(1)}, x2 = ${result.roots[1].toFixed(1)}`);
    };
};


showSolutionsMessage(7, 20, -3);


/***************ЗАДАЧА 2*****************/
let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    peotry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
};

let getAverageMark = (marks) => {
    let result = marks.reduce(function(sum, current){
        return sum + current;
      });
      return result / marks.length;
};

function getAverageScore(data){
    let counter = 0;
    let average = 0;

    for(let key in data){
        counter++;
        if(data[key].length == 0) {
            data[key] = [0];
        };
        data[key] = getAverageMark(data[key]);
        average += data[key];
    };
    data.average = average / counter;
    return data;
};

getAverageScore(data);

console.log(data);



/***************ЗАДАЧА 3*****************/
let php = {
    aaa: 1,
    bbb: 1
};

let getDecodedValue = (secret) => {
   return secret === 0 ? "Родриго" : "Эмилио";
};

function getPersonData(secretData){
    return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};
};

let result = getPersonData(php);

console.log(r);