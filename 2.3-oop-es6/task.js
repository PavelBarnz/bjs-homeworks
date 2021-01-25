///////////////ЗАДАНИЕ 1////////////////////////////////////
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    fix(){
        this.state += this.state / 2;
    };

    set status(num){
        if(num >= 100){
            this.state = 100;
        } else  if (num <= 0) {
            this.state = 0;
        } else {
            this.state = num;
        };
    };

    get status(){
        return `Состояние книги = ${this.state}%`;
    };
  };


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "Magazine";
    };
};


class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "Book"
    };
};


class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "Novel"
    };
};

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "Detective"
    };
};

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "Fantastic"
    };
};

const book = new FantasticBook("Дом странных детей", 2015, 432, "Риггс Рэнсом");

console.log(`Автор: ${book.author}. Название: ${book.name}. Кол-во страниц: ${book.pagesCount}. Год издания: ${book.releaseDate}. Жанр: ${book.type}`);
book.status = 53;
console.log(book.status);
console.log(`Починим чутка`);
book.fix();
console.log(book.status);




////////////////////////////////////////////////////////////
///////////////ЗАДАНИЕ 2////////////////////////////////////

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    };

    addBook(book){
        if(book.state <= 30){
            return console.log(`Почините книгу`);
        } else {
            this.books.push(book);
        };
    };

    findBookBy(type, value){ 
        for(let i = 0; i < this.books.length; i++){
            if(value == this.books[i][type]){
               return console.log(this.books[i]);
            };
        };

        return console.log(null);
    };

    giveBookByName(nameBook){
        for(let i = 0; i < this.books.length; i++){
            if(nameBook == this.books[i].name){
                let result = this.books.splice(i, 1);
                return result[0];
            };
        };
        return console.log(null);
    };
};

const permLibrary = new Library("Местная библиотека");

permLibrary.addBook(new FantasticBook("Империя ангелов", 2001, 448, "Бернард Вербер"));
permLibrary.addBook(new DetectiveBook("Там где лес не растет", 2003, 384, "Мария Семенова"));
permLibrary.addBook(new NovelBook("Дом странных детей", 1919, 522, "Риггс Рэнсом"));
permLibrary.addBook(new FantasticBook("Мастер и Маргарита", 1991, 952, "Михаил Булгаков"));

permLibrary.findBookBy("releaseDate", 1919); //Нашли книгу 1919 года выпуска;

//Получили книгу.
let getBook = permLibrary.giveBookByName("Мастер и Маргарита");
console.log(getBook);
console.log(permLibrary.books);

//Испортили книгу
getBook.status = 64;
console.log(getBook.status);

//Починили книгу
getBook.fix();
console.log(getBook.status);

//Вернули книгу
permLibrary.addBook(getBook);
console.log(permLibrary.books);



////////////////////////////////////////////////////////////
///////////////ЗАДАНИЕ 3////////////////////////////////////

class StudentLog {
    constructor(studentName){
        this.studentName = studentName;
        this.math = [5, 3, 2];
        this.algebra = [2, 3, 5];
        this.geometry = [4, 5, 4];
    };

    get getName(){
        return console.log(this.studentName);
    }

    addGrade(grade, subject){
        if(grade <= 0 || grade > 5){
            console.log(`Вы пытались поставить оценку ${grade}, по предмету ${subject}. Допускаются только числа от 1 до 5`);
            return console.log(this[subject].length);
        };

        this[subject].push(grade);
        return console.log(`Кол-во оценок по предмету ${subject} равно ${this[subject].length}`);
    };

    getAverageBySubject(subject){
        if(this[subject] === undefined){
            return console.log(0);
        } else {
            let result = this[subject].reduce(function(sum, item){
                return sum += item;
            });
            return console.log(result / this[subject].length);
        };
    };

    getTotalAverage(){
        let average = this.math.reduce(function(sum, item){
            return sum += item;
        });

        average += this.algebra.reduce(function(sum, item){
            return sum += item;
        });

        average += this.geometry.reduce(function(sum, item){
            return sum += item;
        });

        let counter = this.math.length + this.geometry.length + this.algebra.length;

        return console.log(average / counter);
    }
};

let a = new StudentLog("Павел");

a.addGrade(1, "math");

a.getAverageBySubject("math");
a.getTotalAverage();
console.log(a.studentName)