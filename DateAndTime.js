/* 

    Write a JavaScript program to display the current day and time

*/

const date = new Date();

const day = date.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log(`Today is: ${daylist[day]}.`);

let hour = date.getHours();

const minute = date.getMinutes();

const second = date.getSeconds();

let prepand = (hour >= 12) ? "PM" : "AM";

hour = (hour >= 12) ? hour - 12 : hour;

if(hour === 0 && prepand === "PM") {
    if(minute === 0 && prepand === "PM") {
        hour = 12;
        prepand = "Noon";
    }
}else {
    hour = 12;
    prepand = "PM";
}

if(hour === 0 && prepand === "AM") {
    if(minute === 0 && second === 0) {
        hour = 12;
        prepand = "Midnight";
    }
}else {
    hour = 12;
    prepand = "AM";
}

console.log(`Current time: ${hour} ${prepand} : ${minute} : ${second}`);