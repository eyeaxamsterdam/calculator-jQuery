"use strict";

let performOperation = (e) => {
  let previousdisplayvalue;
  let calcdisplayvalue = $(".calcdisplay").text();
  console.log(calcdisplayvalue);
  $(".calcdisplay").text("");
  if ($(e.target).text() === "+") {
    previousdisplayvalue = calcdisplayvalue;
  }
};

$(".calc-btn-num").click((e) => {
  let calcdisplayvalue = $(".calcdisplay").text();
  let clickednum = $(e.target).text();
  calcdisplayvalue === "0"
    ? $(".calcdisplay").text(clickednum)
    : $(".calcdisplay").append(clickednum);
});

$(".clear-calc-btn").click(() => $(".calcdisplay").text(0));

$(".back-calc-btn").click(() => {
  $(".calcdisplay").text().length === 1
    ? $(".calcdisplay").text(0)
    : $(".calcdisplay").text($(".calcdisplay").text().slice(0, -1));
});

$(".decimal-btn").click(() => {
  !$(".calcdisplay").text().includes(".") && $(".calcdisplay").append(".");
});

/* $(".calc-operator").on("click", performOperation);
 */
$(".plus-calc-btn").click(performOperation);
