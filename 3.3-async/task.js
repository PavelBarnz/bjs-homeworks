class AlarmClock {
    constructor() {
        this.alarmCollection = [];
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
        let date;
        if(new Date().getHours() < 10){
            return date = "0" + `${new Date().getHours()}:${new Date().getMinutes()}`;
          } else {
            return date = `${new Date().getHours()}:${new Date().getMinutes()}`;
          };
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

    start(){
        let checkClock = (call) => {
           let thisTime = this.getCurrentFormattedTime();
           if(thisTime == call.time){
               call.callback();
           }; 
        };
        
        if(this.timerId === null){
            this.timerId = setInterval(
                () => {
                    this.alarmCollection.forEach((item, index) => {
                        checkClock(this.alarmCollection[index]);
                    });
                }, 30000);
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

};

function testCase(){
    let bububu = new AlarmClock();
    bububu.addClock(`${new Date().getHours()}:${new Date().getMinutes()}`, () => console.log("Я первый будильник!"), 1);

    bububu.addClock(`${new Date().getHours()}:${new Date().getMinutes() + 1}`, () => {
        console.log("Я второй будильник!"); 
        bububu.removeClock(2);
    }, 2);

    bububu.addClock(`${new Date().getHours()}:${new Date().getMinutes() + 2}`, () => {
        console.log("Я третий будильник!");
        bububu.stop();
        bububu.clearAlarms();
    }, 3);

    console.log(bububu.alarmCollection);

    bububu.start();
};

testCase();