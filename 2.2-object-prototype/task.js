//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function (){
    let arr = this.toLowerCase().split(" ");
  
    let str = arr.reduce(function(sum, item, i){
      return sum += item;
    });
  
    let arr2 = str.split("");
  
    let str2 = arr2.reverse().join("");
  
    return str == str2 ? true : false;
  };


function getAverageMark(marks) {
    if(marks.length === 0) {
        return 0;
    };

    let averge = marks.reduce(function (sum, item, i){
        return sum + item;
    }, 0)

    return Math.round(averge = averge / marks.length)
}

function checkBirthday(birthday) {
    
};