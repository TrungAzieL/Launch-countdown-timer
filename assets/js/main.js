// Get time
const time = document.querySelectorAll(".page__time__box");
let day = document.querySelector(".page__time__day");
let hour = document.querySelector(".page__time__hour");
let minute = document.querySelector(".page__time__minute");
let second = document.querySelector(".page__time__second");

// Num of time
let dayNum = parseInt(day.childNodes[0].nodeValue);
let hourNum = parseInt(hour.childNodes[0].nodeValue);
let minuteNum = parseInt(minute.childNodes[0].nodeValue);
let secondNum = parseInt(second.childNodes[0].nodeValue);

// Fixed first
let dayStr = day.childNodes[0].nodeValue.trim();
day.childNodes[0].nodeValue = dayStr.padStart(2, "0");
let hourStr = hour.childNodes[0].nodeValue.trim();
hour.childNodes[0].nodeValue = hourStr.padStart(2, "0");
let minuteStr = minute.childNodes[0].nodeValue.trim();
minute.childNodes[0].nodeValue = minuteStr.padStart(2, "0");
let secondStr = second.childNodes[0].nodeValue.trim();
second.childNodes[0].nodeValue = secondStr.padStart(2, "0");

// Minus day
const changeDay = () => {
    flipLayer(day);
    dayNum--;
    day.childNodes[0].nodeValue = dayNum;
    let res = day.childNodes[0].nodeValue;
    day.childNodes[0].nodeValue = res.padStart(2, "0");
};
// Minus hour
const changeHour = () => {
    flipLayer(hour);
    hourNum--;
    if (hourNum <= 0) {
        changeDay();
        hourNum = 23;
    }
    hour.childNodes[0].nodeValue = hourNum;
    let res = hour.childNodes[0].nodeValue;
    hour.childNodes[0].nodeValue = res.padStart(2, "0");
};
// Minus minute
const changeMinute = () => {
    flipLayer(minute);
    minuteNum--;
    if (minuteNum <= 0) {
        changeHour();
        minuteNum = 59;
    }
    minute.childNodes[0].nodeValue = minuteNum;
    let res = minute.childNodes[0].nodeValue;
    minute.childNodes[0].nodeValue = res.padStart(2, "0");
};

// Auto minus second
setInterval(() => {
    secondNum--;
    if (secondNum <= 0) {
        changeMinute();
        secondNum = 59;
    }
    second.childNodes[0].nodeValue = secondNum;
    let res = second.childNodes[0].nodeValue;
    second.childNodes[0].nodeValue = res.padStart(2, "0");
    setTimeout(() => {
        flipLayer(second);
    }, 690)
}, 1000)

const flipLayer = (e) => {
    e.childNodes[3].style.display = 'block';
    setTimeout(() => {
        e.childNodes[3].style.display = 'none';
    }, 300)
}