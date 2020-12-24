"use strict"

function getResult(a,b,c){
    let result = [];

    let D = Math.pow(b, 2) - 4 * a * c;

    if(D > 0){
        result.push((-b - Math.sqrt(D)) / (2 * a));
        result.push((-b + Math.sqrt(D)) / (2 * a));
    } else if(D === 0) {
        result.push(-b / (2 * a));
    };

     return result;
}

function getAverageMark(marks){
    let averageMark = 0;

    if(marks.length == 0) {
        return 0;
    }else if(marks.length > 5) {
      marks.splice(5);
    };
    for (let i = 0; i < marks.length; i++) {
      averageMark += marks[i];
    };
        
    return averageMark / marks.length;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age < 18) {
       return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }else {
        return `Не желаете ли олд-фэшн, ${name}?`
    }
}