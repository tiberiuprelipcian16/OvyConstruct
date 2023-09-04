"use strict";

clickCountActiuni = 0;

function adaugaActiuni() {
  var adaugate = document.getElementById("adaugate");
  var cost = document.getElementById("cost").value;
  var actiune = document.getElementById("actiune").value;
  var newDiv = document.createElement("div");
  var newLabel = document.createElement("label");
  var newInput = document.createElement("input");
  var removeButt = document.createElement("button");
  removeButt.innerText = "Sterge";
  removeButt.setAttribute("style", "background: red");
  removeButt.setAttribute("onclick", "stergeAdaugare(this)");
  removeButt.setAttribute("class", "butt remove");
  removeButt.id = "Add" + clickCountActiuni;
  newInput.setAttribute("type", "number");
  newInput.id = "InputAdd" + clickCountActiuni;
  newInput.className = "inputAdd";
  newLabel.id = "LabelAdd" + clickCountActiuni;
  newLabel.className = "labelAdd";
  newDiv.className = "divAdd";
  newDiv.id = "RemoveDivAdd" + clickCountActiuni;
  clickCountActiuni++;

  if (actiune != '') {
    adaugate.appendChild(newDiv);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    newDiv.appendChild(removeButt);
    document.getElementById("actiune").setAttribute("style", "background: white");
  } else {
    document.getElementById("actiune").setAttribute("style", "background: #ff000059");
    document.getElementById("actiune").setAttribute("placeholder", "Introdu un text");
  }

  newLabel.innerText = actiune;
  if (cost == '') newInput.value = 0;else newInput.value = cost;
}