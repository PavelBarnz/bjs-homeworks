//////////////ЗАДАНИЕ 1/////////////////////
function parseCount(num) {
    const result = parseInt(num);
    if(isNaN(result)){
        throw new Error("Невалидное значение");
    } else {
        return result;
    };
};

function validateCount(number) {
    try {
        return parseCount(number)
    } catch (error) {
        return error;
    };
};


/////////////ЗАДАНИЕ 2////////////////////////
class Triangle {
    constructor(a, b, c){
        if(a + b <= c ||
            a + c <= b ||
            b + c <= a) {
                throw new Error("Треугольник с такими сторонами не существует")
        };

        this.a = a;
        this.b = b;
        this.c = c;
        
        };

    getPerimeter(){
        return this.a + this.b + this.c;
    };

    getArea(){
        const p = this.getPerimeter() / 2;
        const s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
        return +s.toFixed(3);
    };
};


function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter(){return "Ошибка! Треугольник не существует"},
            getArea(){return "Ошибка! Треугольник не существует"}
        };
    };
}