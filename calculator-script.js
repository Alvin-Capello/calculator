$(document).ready(function() {;
  var a;
  var b;
  var c;

  function add(a,b) {
    return a + b;
  }

  function subtract(a,b) {
    return a - b;
  }

  function multiply(a,b) {
    return a * b;
  }

  function divide(a,b) {
    return a / b;
  }

 $("#1").on("click", function() {
   $("#screen").append(1)
 });

  $("#2").on("click", function() {
   $("#screen").append(2)
 });

  $("#3").on("click", function() {
   $("#screen").append(3)
 });

  $("#4").on("click", function() {
   $("#screen").append(4)
 });

  $("#5").on("click", function() {
   $("#screen").append(5)
 });

  $("#6").on("click", function() {
   $("#screen").append(6)
 });

  $("#7").on("click", function() {
   $("#screen").append(7)
 });

  $("#8").on("click", function() {
   $("#screen").append(8)
 });

  $("#9").on("click", function() {
   $("#screen").append(9)
 });

  $("#0").on("click", function() {
   $("#screen").append(0)
 });

$(".sym").on("click", function() {
  a = parseInt($("#screen").text());
  c = $(this).text();
  $("#screen").text(" ");
});

$("#equ").on("click", function() {
  b = parseInt($("#screen").text());
  if (c === "+") {
    $("#screen").text(add(a,b));
  } else if (c === "-"){
    $("#screen").text(subtract(a,b));
  } else if (c === "*") {
    $("#screen").text(multiply(a,b));
  } else if (c === "/") {
    $("#screen").text(divide(a,b));
  }
});

$("#clear").on("click", function() {
  $("#screen").text(" ");
})
});