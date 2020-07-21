"use strict";


let calcDisplay;
let clickednum;
let previousdisplayvalue;
let evaluationstring;


let clickNum = () => {
  calcDisplay === "0"
    ? $(".calcdisplay").text(clickednum)
    : $(".calcdisplay").append(clickednum)
}


let clickBackspace = () => {
  $(".calcdisplay").text().length === 1
    ? $(".calcdisplay").text(0)
    : $(".calcdisplay").text($(".calcdisplay").text().slice(0, -1));
}


let clickClear = () => {
  $(".calcdisplay").text(0);
}


let decimalclicked = () => {
  !$(".calcdisplay").text().includes(".") && $(".calcdisplay").append(".");
}


let operator = (e) => {
  switch(e) {
    case '+' : 
      console.log('plus');
      previousdisplayvalue = calcDisplay;
      $(".calcdisplay").text('');
    break;
    case '-' : console.log('minus');
    break;
    case '×' : console.log('times');
    break;
    case '÷' : console.log('devided');
    break;
    case '=' : 
      console.log('equals');
      console.log(typeof(previousdisplayvalue), typeof(calcDisplay));
      break;
  }
}



let switchkeypressed = (e) => {
  calcDisplay = $(".calcdisplay").text();
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
    case 67: clickClear();
    break;
  }
}


$(".decimal-btn").click(() => {
  decimalclicked();
});

$(".calc-btn-num").click((e)=> {
  calcDisplay = $(".calcdisplay").text();
  clickednum = $(e.target).text();
  clickNum();
});

$(".back-calc-btn").click(() => {
  clickBackspace();
});

$(".clear-calc-btn").click(() => clickClear());

$(".calc-operator").on("click", (e)=> {
  calcDisplay = $(".calcdisplay").text();
  let operatorClicked = $(e.target).text();
  operator(operatorClicked);
});

$(window).keydown((e) => {
  let keypressed = e.which 
  keypressed === 8 ? clickBackspace() : switchkeypressed(keypressed);
});





/* 
let numberclickevent = (e) => {
  let calcdisplayvalue = $(".calcdisplay").text();
  let clickednum = $(e.target).text();
  calcdisplayvalue === "0"
    ? $(".calcdisplay").text(clickednum)
    : $(".calcdisplay").append(clickednum);
}

let performOperation = (e) => {
  let previousdisplayvalue;
  let calcdisplayvalue = $(".calcdisplay").text();
  console.log(calcdisplayvalue);
  $(".calcdisplay").text("");
  if ($(e.target).text() === "+") {
    previousdisplayvalue = calcdisplayvalue;
  }
};




$(".calc-btn-num").click(numberclickevent);

$(".clear-calc-btn").click(() => $(".calcdisplay").text(0));

$(".back-calc-btn").click(() => {
  $(".calcdisplay").text().length === 1
    ? $(".calcdisplay").text(0)
    : $(".calcdisplay").text($(".calcdisplay").text().slice(0, -1));
});



$(".calc-operator").on("click", performOperation);
 
$(".plus-calc-btn").click(performOperation);

$(window).on('keydown', (e) => {
  let calcdisplayvalue = $(".calcdisplay").text();
  if (e.which === 49) {
    let clickednum = 1; 
    calcdisplayvalue === "0"
    ? $(".calcdisplay").text(clickednum)
    : $(".calcdisplay").append(clickednum);
  } else { 
    console.log(e.which)
  }
});
 */