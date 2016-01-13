
/*
Jquery solution
$(document).ready(function() {

  $("form").on("submit", function(event) {
    var $form = $(this),
        numerator = +$form.find("#numerator").val(),
        denominator = +$form.find("#denominator").val(),
        operator = $form.find("#operator").val(),
        result = 0;
    
    event.preventDefault();

    if (operator === "+") {
      result = numerator + denominator;
    } 
    if (operator == "-") {
      result = numerator - denominator
    }
    if (operator === "*") {
      result = numerator * denominator;
    }
    if (operator === "/") {
      result = numerator / denominator;
    }

    $("h1").text(result);
    console.log(result);
  });
});

*///

function $(id_selector) {
  return document.getElementById(id_selector);
}

window.onload = function() {
  $("calculator").onsubmit = function(event) {
    event.preventDefault();
    var numerator = +$("numerator").value,
        denominator = +$("denominator").value,
        operator = $("operator").value,
        result = 0;

    if (operator === "+") {
      result = numerator + denominator;
    } 
    if (operator == "-") {
      result = numerator - denominator
    }
    if (operator === "*") {
      result = numerator * denominator;
    }
    if (operator === "/") {
      result = numerator / denominator;
    }

    $("result").innerHTML = result;

  };
};