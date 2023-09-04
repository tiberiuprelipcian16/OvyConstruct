"use strict";

function stergeAdaugare(btn) {
  document.getElementById("RemoveDiv" + btn.id).remove();
}

function dezactiveaza(btn) {
  if (btn.id.charAt(0) == 'C') {
    document.getElementById("idInputMetri" + btn.id).setAttribute('class', 'inputAddDisabled');
    document.getElementById("idInputPret" + btn.id).setAttribute('class', 'inputAddDisabled');
    document.getElementById("idInputMetri" + btn.id).setAttribute('disabled', ' ');
    document.getElementById("idInputPret" + btn.id).setAttribute('disabled', ' ');
  } else {
    document.getElementById("idInput" + btn.id).setAttribute('class', 'inputAddDisabled');
    document.getElementById("idInput" + btn.id).setAttribute('disabled', ' ');
  }

  document.getElementById(btn.id).setAttribute("style", "background: grey");
  document.getElementById(btn.id).innerText = "Activeaza";
  document.getElementById(btn.id).setAttribute("onclick", "activeaza(this)");
  document.getElementById("idLabel" + btn.id).setAttribute('class', 'labelAddDisabled');
  document.getElementById("idDiv" + btn.id).setAttribute("style", "background-color: lightgrey");
}

function activeaza(btn) {
  if (btn.id.charAt(0) == 'C') {
    document.getElementById("idInputMetri" + btn.id).setAttribute('class', 'inputAdd');
    document.getElementById("idInputPret" + btn.id).setAttribute('class', 'inputAdd');
    document.getElementById("idInputMetri" + btn.id).removeAttribute('disabled', ' ');
    document.getElementById("idInputPret" + btn.id).removeAttribute('disabled', ' ');
  } else if (btn.id.charAt(0) == 'A') {
    document.getElementById("idInput" + btn.id).setAttribute('class', 'inputAdd');
    document.getElementById("idInput" + btn.id).removeAttribute('disabled', ' ');
  }

  document.getElementById(btn.id).innerText = "Dezactiveaza";
  document.getElementById(btn.id).setAttribute("style", "background: purple");
  document.getElementById(btn.id).setAttribute("onclick", "dezactiveaza(this)");
  document.getElementById("idLabel" + btn.id).setAttribute('class', 'labelAdd');
  document.getElementById("idDiv" + btn.id).setAttribute("style", "background-color: transparent");
}