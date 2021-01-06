function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict"
    
    if(isNaN(parseInt(percent))){
        return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`
    } else {
        percent = parseInt(percent);
    };

    if(isNaN(parseInt(contribution))){
        return `Параметр <Начальный взнос> содержит неправильное значение <${contribution}>`
    } else {
        contribution = parseInt(contribution);
    };

    if(isNaN(parseInt(amount))){
        return `Параметр <Общая стоимость> содержит неправильное значение <${amount}>`
    } else {
        amount = parseInt(amount);
    };

    let creditBody = amount - contribution;
    let months = (date.getFullYear() - new Date().getFullYear()) * 12;
    let percentPay = (percent / 100) / 12;
    let monthPayment = creditBody * (percentPay + percentPay / (Math.pow((1 + percentPay), months) - 1));

    let totalAmount = +(monthPayment * months).toFixed(2);
    console.log(months);
    return totalAmount;
}

function getGreeting(name) {
    let greeting;
    if(typeof name != "string" || name == "" || name == " "){
        name = "Аноним";
        console.log(greeting = `Привет мир! Меня зовут ${name}`);
        return greeting = `Привет мир! Меня зовут ${name}`;
    } else {
        console.log(greeting = `Привет мир! Меня зовут ${name}`);
        return greeting = `Привет мир! Меня зовут ${name}`;
    };
};