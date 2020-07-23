"use strict";


let calcDisplay;
let clickednum;
let previousdisplayvalue;
let evaluationstring;

let clickNum = () => {
  calcDisplay === "0"
    ? $(".maindisplay").text(clickednum)
    : $(".maindisplay").append(clickednum)
}

let clickBackspace = () => {
  $(".maindisplay").text().length === 1
    ? $(".maindisplay").text(0)
    : $(".maindisplay").text($(".maindisplay").text().slice(0, -1));
}

let clickClear = () => {
  $(".maindisplay").text(0);
  $('.littledisplay').text('');
}

let decimalclicked = () => {
  !$(".maindisplay").text().includes(".") && $(".maindisplay").append(".");
}

let addition = (operatorclicked) => {
  previousdisplayvalue = calcDisplay;
      $(".maindisplay").text(''); 
      $('.littledisplay').text(previousdisplayvalue + " " + operatorclicked);  
}

let operator = (e) => {
  switch(e) {
    case '+' : 
      console.log(e);
      addition(e);
    break;
    case '-' : 
      console.log(e);
      addition('-');
    break;
    case '×' : 
      console.log(e);
      addition('*')
    break;
    case '÷' : 
      console.log(e);
      addition('/')
    break;
    case '=' : 
      $('.maindisplay').text((eval($('.littledisplay').text() + calcDisplay)));
      $('.littledisplay').text($('.littledisplay').text() + calcDisplay);
    break;
  }
}

$(".decimal-btn").click(() => {
  decimalclicked();
});

$(".calc-btn-num").click((e)=> {
  calcDisplay = $(".maindisplay").text();
  clickednum = $(e.target).text();
  clickNum();
});

$(".back-calc-btn").click(() => {
  clickBackspace();
});


$(".clear-calc-btn").click(() => clickClear());

$(".calc-operator").on("click", (e)=> {
  calcDisplay = $(".maindisplay").text();
  let operatorclicked = $(e.target).text();
  operator(operatorclicked);
});




//keypad shit
$(window).keydown((e) => {
  let keypressed = e.which 
  keypressed === 8 ? clickBackspace() : switchkeypressed(keypressed);
});

let switchkeypressed = (e) => {
  calcDisplay = $(".maindisplay").text();
  switch(e) {
    case 48: clickednum = 0; clickNum();
    break;
    case 49: clickednum = 1; clickNum();
    break;
    case 50: clickednum = 2; clickNum();
    break;
    case 51: clickednum = 3; clickNum();
    break;
    case 52: clickednum = 4; clickNum();
    break;
    case 53: clickednum = 5; clickNum();
    break;
    case 54: clickednum = 6; clickNum();
    break;
    case 55: clickednum = 7; clickNum();
    break;
    case 56: clickednum = 8; clickNum();
    break;
    case 57: clickednum = 9; clickNum();
    break;
    case 107: clickednum = '+'; operator(clickednum);
    break;
    case 109: clickednum = '-'; operator(clickednum);
    break;
    case 106: clickednum = '×'; operator(clickednum);
    break;
    case 111: clickednum = '÷'; operator(clickednum);
    break;
    case 110: clickednum = '.'; decimalclicked();
    break;
    case 13: 
    case 187: clickednum = '='; operator(clickednum);
    break;
    case 12:
    case 67: clickClear();
    break;
  }
}