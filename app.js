var dayClass = document.getElementById("errorDay").classList;
var monthClass = document.getElementById("errorMonth").classList;
var yearClass = document.getElementById("errorYear").classList;

var box0 = document.querySelectorAll("input")[0].classList;
var box1 = document.querySelectorAll("input")[1].classList;
var box2 = document.querySelectorAll("input")[2].classList;
// ! Red msg
function redMsg() {
  dayClass.add("error1");
  monthClass.add("error1");
  yearClass.add("error1");
}
// ! remove red msg
function removeRedMsg() {
  dayClass.remove("error1");
  monthClass.remove("error1");
  yearClass.remove("error1");
}
//  ! add red msg for 0
function addRedMsg_for_0() {
  dayClass.add("error1");
  monthClass.remove("error1");
  yearClass.remove("error1");
}
//  ! add red msg for 1
function addRedMsg_for_1() {
  dayClass.remove("error1");
  monthClass.add("error1");
  yearClass.remove("error1");
}
//  ! add red msg for 2
function addRedMsg_for_2(){
  dayClass.remove("error1");
  monthClass.remove("error1");
  yearClass.add("error1");
}
//  ! add red msg for 0 & 1
function addRedMsg_for_0_1(){
  dayClass.add("error1");
  monthClass.add("error1");
  yearClass.remove("error1");
}
//  ! add red msg for 0 & 2
function addRedMsg_for_0_2(){
  dayClass.add("error1");
  monthClass.remove("error1");
  yearClass.add("error1");
}
//  ! add red msg for 1 & 2
function addRedMsg_for_1_2(){
  dayClass.remove("error1");
  monthClass.add("error1");
  yearClass.add("error1");
}

// ! Red Box  for 0
function addRedBox_for_0() {
  box0.add("invalid");
  box1.remove("invalid");
  box2.remove("invalid");
}
// ! Red Box  for 1
function addRedBox_for_1() {
  box0.remove("invalid");
  box1.add("invalid");
  box2.remove("invalid");
}
// ! Red Box  for 2
function addRedBox_for_2() {
  box0.remove("invalid");
  box1.remove("invalid");
  box2.add("invalid");
}
// ! Red Box  for 0 & 1
function addRedBox_for_0_1() {
  box0.add("invalid");
  box1.add("invalid");
  box2.remove("invalid");
}
// ! Red Box  for 0 & 2
function addRedBox_for_0_2() {
  box0.add("invalid");
  box1.remove("invalid");
  box2.add("invalid");
}
// ! Red Box  for 1 & 2
function addRedBox_for_1_2() {
  box0.remove("invalid");
  box1.add("invalid");
  box2.add("invalid");
}
function addRedBox(){
  box0.add("invalid");
  box1.add("invalid");
  box2.add("invalid");

}
function removeRedBox(){
  box0.remove("invalid");
  box1.remove("invalid");
  box2.remove("invalid");
}

  function test1(){
    var birthDay = parseInt(document.getElementById("day").value);
    var birthMonth = parseInt(document.getElementById("month").value);
    var birthYear = parseInt(document.getElementById("year").value);
    console.log(`${birthDay},${birthMonth},${birthYear}`);
    if (!(birthDay || birthMonth || birthYear)) {
      for (var i = 0; i < document.querySelectorAll(".error").length; i++) {
        document.querySelectorAll(".error")[i].textContent =
          "This field is empty";
      }
      addRedBox();
      redMsg();
      emptyAnswer();
    } else if (!birthMonth && !birthYear) {
      removeRedBox();
      removeRedMsg();
      document.querySelectorAll(".error")[0].textContent = "";
      document.querySelectorAll(".error")[1].textContent =
        "This field is empty";
      document.querySelectorAll(".error")[2].textContent =
        "This field is empty";
      addRedBox_for_1_2();
      addRedMsg_for_1_2();
      emptyAnswer();
    } else if (!birthDay && !birthMonth) {
      removeRedBox();
      removeRedMsg();
      document.querySelectorAll(".error")[0].textContent =
        "This field is empty";
      document.querySelectorAll(".error")[1].textContent =
        "This field is empty";
      document.querySelectorAll(".error")[2].textContent = "";
      addRedBox_for_0_1();
      addRedMsg_for_0_1();
      emptyAnswer();
    } else if (!birthDay && !birthYear) {
      removeRedBox();
      removeRedMsg();
      document.querySelectorAll(".error")[0].textContent =
        "This field is empty";
      document.querySelectorAll(".error")[1].textContent = "";
      document.querySelectorAll(".error")[2].textContent =
        "This field is empty";
      addRedBox_for_0_2();
      addRedMsg_for_0_2();
      emptyAnswer();
    } else if (!birthDay) {
      removeRedBox();
      removeRedMsg();
      document.querySelectorAll(".error")[0].textContent =
        "This field is empty";
      document.querySelectorAll(".error")[1].textContent = "";
      document.querySelectorAll(".error")[2].textContent = "";
      addRedBox_for_0();
      addRedMsg_for_0();
      emptyAnswer();
    } else if (!birthMonth) {
      removeRedBox();
      removeRedMsg();
      document.querySelectorAll(".error")[0].textContent = "";
      document.querySelectorAll(".error")[1].textContent =
        "This field is empty";
      document.querySelectorAll(".error")[2].textContent = "";
      addRedBox_for_1();
      addRedBox_for_1();
      emptyAnswer();
    } else if (!birthYear) {
      removeRedBox();
      removeRedMsg();
      document.querySelectorAll(".error")[0].textContent = "";
      document.querySelectorAll(".error")[1].textContent = "";
      document.querySelectorAll(".error")[2].textContent =
        "This field is empty";
      addRedBox_for_2();
      addRedMsg_for_2();
      emptyAnswer();
    } else {
      for (var i = 0; i < document.querySelectorAll(".error").length; i++) {
        document.querySelectorAll(".error")[i].textContent = "";
      }
      removeRedBox();
      removeRedMsg();
      var lYear = leapYear(birthYear);
      let bTrue = bValid(birthDay, birthMonth, lYear);
      let mTrue = mValid(birthMonth);
      let yTrue = yValid(birthYear);
      console.log(bTrue);

      errorMsg(bTrue, mTrue, yTrue, birthDay, birthMonth, birthYear);

      // testValid(birthDay, birthMonth, birthYear);
    }

  }
document.querySelector(".button-circle").addEventListener("click", function () {
  test1();
  // find leap year feb error
});
function testValid(bDay, bMonth, bYear) {
  var born = new Date(`${bYear}/${bMonth}/${bDay}`);

  if (Object.prototype.toString.call(born) === "[object Date]") {
    // it is a date
    if (isNaN(born)) {
      document.querySelectorAll(".error")[0].textContent =
        "Must be a valid day";
      document.querySelectorAll(".error")[1].textContent =
        "Must be a valid month";
      document.querySelectorAll(".error")[2].textContent = "Must be a past";
      // d.getTime() or d.valueOf() will also work
    } else {
      calAge(born.getFullYear(), born.getMonth(), born.getDate());
    }
  } else {
    console.log("not a date object");
    document.querySelectorAll(".error")[0].textContent = "Must be a valid day";
    document.querySelectorAll(".error")[1].textContent =
      "Must be a valid month";
    document.querySelectorAll(".error")[2].textContent = "Must be a past";
  }
}

function calAge(year, month, day) {
  var currentDate = new Date();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();
  console.log(currentDay);

  var ageByYears = currentYear - year;
  // * find the ageByMonth
  var ageByMonths;
  console.log("currentMOnth" + currentMonth + " " + currentDay + "" + day);
  if (currentMonth > month) {
    ageByMonths = currentMonth - month;
  } else if (currentMonth < month) {
    ageByYears--;
    ageByMonths = 12 + currentMonth - month;
  } else if (currentMonth == month && currentDay == day) {
    ageByMonths = currentMonth - month;
    ageByMonths++;
  }
  // * find the age by Day:
  var ageByDays;
  var monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (currentDay > day) {
    ageByDays = currentDay - day;
  } else if (currentMonth == month && currentDay == day) {
    ageByMonths--;
    ageByDays = currentDay - day;
  } else {
    ageByMonths--;
    console.log(ageByMonths);
    ageByDays = monthsDays[month] + currentDay - day;
  }
  console.log(ageByDays, ageByMonths, ageByYears);

  document.querySelector(".ageByYears").textContent = ageByYears;
  document.querySelector(".ageByMonths").textContent = ageByMonths;
  document.querySelector(".ageByDays").textContent = ageByDays;
}

// leap year

function leapYear(year) {
  if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

function bValid(birthDay, birthMonth, leapYear) {
  if (leapYear && birthMonth == 2 && birthDay < 29) {
    return false;
  } else if (leapYear && birthMonth == 2 && birthDay < 28) {
    return false;
  } else if (birthDay > 31 || birthDay < 1) {
    return false;
  } else {
    return true;
  }
}
function mValid(birthMonth) {
  if (birthMonth > 12 || birthMonth < 1) {
    return false;
  } else {
    return true;
  }
}
function yValid(birthYear) {
  var testYear = new Date();
  if (birthYear > testYear.getFullYear() || 100 > birthYear) {
    // document.querySelectorAll(".error")[2].textContent = "Must be a past";
    return false;
  } else {
    return true;
  }
}

function errorMsg(bTrue, mTrue, yTrue, birthDay, birthMonth, birthYear) {
  if (!bTrue && !mTrue && !yTrue) {
    document.querySelectorAll(".error")[0].textContent = "Must be a valid day";
    document.querySelectorAll(".error")[1].textContent =
      "Must be a valid month";
    document.querySelectorAll(".error")[2].textContent = "Must be a past";
    redMsg();
    addRedBox();
    emptyAnswer();
  } else if (!mTrue && !yTrue) {
    removeRedBox();
    removeRedMsg();
    document.querySelectorAll(".error")[0].textContent = "";
    document.querySelectorAll(".error")[1].textContent =
      "Must be a valid month";
    document.querySelectorAll(".error")[2].textContent = "Must be a past";
    addRedBox_for_1_2();
    addRedMsg_for_1_2();
    emptyAnswer();
  } else if (!bTrue && !yTrue) {
    removeRedBox();
    removeRedMsg();
    document.querySelectorAll(".error")[0].textContent = "Must be a valid day";
    document.querySelectorAll(".error")[1].textContent = "";
    document.querySelectorAll(".error")[2].textContent = "Must be a past";
    addRedBox_for_0_2();
    addRedMsg_for_0_2();
    emptyAnswer();
  } else if (!bTrue && !mTrue) {
    removeRedBox();
    removeRedMsg();
    document.querySelectorAll(".error")[0].textContent = "Must be a valid day";
    document.querySelectorAll(".error")[1].textContent =
      "Must be a valid month";
    document.querySelectorAll(".error")[2].textContent = "";
    addRedBox_for_0_1();
    addRedMsg_for_0_1();
    emptyAnswer();
  } else if (!bTrue) {
    removeRedBox();
    removeRedMsg();
    document.querySelectorAll(".error")[0].textContent = "Must be a valid day";
    addRedBox_for_0();
    addRedMsg_for_0();
    emptyAnswer();
  } else if (!mTrue) {
    removeRedBox();
    removeRedMsg();
    document.querySelectorAll(".error")[1].textContent =
      "Must be a valid month";
      addRedBox_for_1();
      addRedMsg_for_1();
    emptyAnswer();
  } else if (!yTrue) {
    removeRedBox();
    removeRedMsg();
    document.querySelectorAll(".error")[2].textContent = "Must be a past";
    addRedBox_for_2();
    addRedMsg_for_2();
    emptyAnswer();
  } else {
    document.querySelectorAll(".error")[0].textContent = "";
    document.querySelectorAll(".error")[1].textContent = "";
    document.querySelectorAll(".error")[2].textContent = "";
    removeRedBox();
    removeRedMsg();
    testValid(birthDay, birthMonth, birthYear);
  }
}

function emptyAnswer() {
  // empty the answer if wrong
  document.querySelector(".ageByYears").textContent = "--";
  document.querySelector(".ageByMonths").textContent = "--";
  document.querySelector(".ageByDays").textContent = "--";
}

document.addEventListener("keydown",function(e){
  
  if (e.key === "Enter"){
    test1();
  }
})