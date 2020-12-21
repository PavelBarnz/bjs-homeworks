"use strict"

function getResult(a,b,c){
    let result = [];

    let D = Math.pow(b, 2) - 4 * a * c;

    if(D > 0){
       let x1 = (-b - Math.sqrt(D)) / (2 * a);
       result.push(x1);
       let x2 = (-b + Math.sqrt(D)) / (2 * a);
       result.push(x2);
    } else if(D === 0) {
        let x = (2 * a) / -b;
        result.push(x);
    };

     return result;
}

function getAverageMark(marks){
    let averageMark = 0;

    if(marks.length == 0) {
        return 0;
    }else if(marks.length == 5){
        for(let i = 0; i < marks.length; i++) {
            averageMark += marks[i];
        };
        averageMark = averageMark / marks.length;
    }else if(marks.length > 5) {
        console.log("Оценок больше 5");
        marks.splice(5);
        let i = 0;
        while(true){
          averageMark += marks[i];
          i++;
          if(i == 5) {break};
        };
        averageMark = averageMark / marks.length;
    };
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;
    if (age < 18) {
       result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }else {
        result = `Не желаете ли олд-фэшн, ${name}?`
    }
    console.log(result);
     return result;
}