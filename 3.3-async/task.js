function sayHi(){
    console.log("Привет!!!");
};

class AlarmClock {
    constructor() {
        this.alarmCollection = [{id: 1, callback: sayHi, time: "14:30"}];
        this.timerId = null;
    };

    addClock(time, fn, id){
        if(id === undefined){
            throw new Error("Идентификатор звонка не передан")
        };

        let result = this.alarmCollection.find((item, index) => {
            return id === this.alarmCollection[index].id;
        });
        
        if(typeof result === "object"){
            console.error("Такой будильник уже есть!");
        } else {
            this.alarmCollection.push({id: id, callback: fn, time: time});
        };
    };
    
    getCurrentFormattedTime(){
        return `${new Date().getHours()}:${new Date().getMinutes()}`;
    };

    removeClock(id){
        let resultDelete;
        this.alarmCollection.forEach((item, index) => {
            if(id === this.alarmCollection[index].id){
                this.alarmCollection.splice(index, 1);
                return resultDelete = true;
            }else {
                return resultDelete = false;
            };
        });
        return resultDelete;
    };


    printAlarms(){
        this.alarmCollection.forEach((item, index) => {
            console.log(`Будильник id: ${this.alarmCollection[index].id}, время: ${this.alarmCollection[index].time}`); 
        });
    };


    /*Мне кажется что в методе start что то не так работает как задумывалось атором ДЗ, просто setInterval будет работать постоянно пока не запустят метод stop или clearAlarms. А это ведь нагрузит браузер. Напишите мне пожалусйта по поводу этого пункта, мне очень важно это понять!*/
    start(){
        function checkClock(call){
           let thisTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
           if(thisTime == call.time){
               call.callback();
           }; 
        };
        
        if(this.timerId === null){
            this.timerId = setInterval(
                function(){
                    this.alarmCollection.forEach((item, index) => {
                        checkClock(this.alarmCollection[index]);
                    });
                }, 60000);
        };
    };

    stop(){
        if(this.timerId !== undefined || this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        };
    }

    clearAlarms(){
        clearInterval(this.timerId);
        this.alarmCollection = [];
    };

}

let bububu = new AlarmClock();
bububu.start();