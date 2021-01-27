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

    set state(num){
        if(num >= 100){
            this.status = 100;
        } else  if (num <= 0) {
            this.status = 0;
        } else {
            this.status = num;
        };
    };

    get state(){
        console.log(`Состояние книги = ${this.status}%`);
        return this.status;
    };
  };

  class Magazine extends PrintEditionItem {
      constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);  
        this.type = "magazine";
      };
  };

  class Book extends PrintEditionItem {
      constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book"
      };
  };

  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    };
  };

  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    };
  };

  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    };
  };



///////////////////////////////////////////////////////////////
////////////////////////ЗАДАНИЕ 2//////////////////////////////
class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    };

    addBook(book){
        if(book.state >= 30){
            this.books.push(book);
        }else {
            console.log("Почините книгу и приносите снова!");
        };
    };

    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i++){
            if(value == this.books[i][type]){
                console.log(this.books[i]);
                return this.books[i];
            };
        };
        console.log(null);
        return null;
    };

    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i++){
            if(bookName == this.books[i].name){
                let returnBook = this.books.splice(i, 1);
                return returnBook[0];
            };
        };
        return null;
    };
};




///////////////////////////////////////////////////////////////
////////////////////////ЗАДАНИЕ 3//////////////////////////////
class StudentLog{
    constructor(studentName){
        this.studentName = studentName;
    };

    getName(){
        return this.studentName;
    };

    addGrade(grade, subject){
        if(!(this.hasOwnProperty(subject))){
            this[subject] = [];
          };

        if(grade <= 0 || grade > 5){
            console.log(`Вы пытались поставить оценку ${grade}, по предмету ${subject}. Допускаются только числа от 1 до 5`);

            console.log(this[subject].length);
            return this[subject].length;

        } else {
            this[subject].push(grade);
            console.log(this[subject].length);
            return this[subject].length;
        };
    };

    getAverageBySubject(subject){
        let average = this[subject].reduce(function(sum, item){
            return sum + item;
        });
        return average / this[subject].length;
    };

    getTotalAverage(){
        let totalAverage = 0;
        let counter = 0;
        let subjects = Object.keys(this);
        subjects.splice(0, 1);
        console.log(subjects);

        for(let i = 0; i < subjects.length; i++){
            totalAverage += this[subjects[i]].reduce(function(sum, item){
                return sum + item;
            });

            counter += this[subjects[i]].length;
        };

        return totalAverage / counter;
    };
};