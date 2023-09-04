"use strict";

clickCountCote = 0;

function adaugaCote() {
  var adaugateCote = document.getElementById("adaugateCote");
  var actiuneCote = document.getElementById("actiuneCote").value;
  var metriCote = document.getElementById("metriCote").value;
  var pretCote = document.getElementById("pretCote").value;
  var newDivCote = document.createElement("div");
  var newLabelCote = document.createElement("label");
  var newInputMetriCote = document.createElement("input");
  var newInputPretCote = document.createElement("input");
  var newInputCostCote = document.createElement("input");
  var removeButtCote = document.createElement("button"); //new div

  newDivCote.className = "divAdd";
  newDivCote.id = "RemoveDivAddCote" + clickCountCote; //label actiune

  newLabelCote.id = "LabelAddCote" + clickCountCote;
  newLabelCote.className = "labelAdd"; //input metri

  newInputMetriCote.setAttribute("type", "number");
  newInputMetriCote.id = "InputAddMetriCote" + clickCountCote;
  newInputMetriCote.setAttribute("disabled", "true"); //input pret

  newInputPretCote.setAttribute("type", "number");
  newInputPretCote.id = "InputAddPretCote" + clickCountCote;
  newInputPretCote.setAttribute("disabled", "true"); //input cost

  newInputCostCote.setAttribute("type", "number");
  newInputCostCote.id = "InputAddCostCote" + clickCountCote;
  newInputCostCote.setAttribute("disabled", "true");
  newInputCostCote.className = "inputAdd"; //remove butt

  removeButtCote.innerText = "Sterge";
  removeButtCote.setAttribute("style", "background: red");
  removeButtCote.setAttribute("onclick", "stergeAdaugare(this)");
  removeButtCote.setAttribute("class", "butt remove");
  removeButtCote.id = "AddCote" + clickCountCote;
  clickCountCote++;

  if (actiuneCote != '') {
    adaugateCote.appendChild(newDivCote);
    newDivCote.appendChild(newLabelCote);
    newDivCote.appendChild(newInputMetriCote);
    newDivCote.appendChild(newInputPretCote);
    newDivCote.appendChild(newInputCostCote);
    newDivCote.appendChild(removeButtCote);
    document.getElementById("actiuneCote").setAttribute("style", "background: white");
  } else {
    document.getElementById("actiuneCote").setAttribute("style", "background: #ff000059");
    document.getElementById("actiuneCote").setAttribute("placeholder", "Introdu un text");
  }

  newLabelCote.innerText = actiuneCote;

  if (pretCote == '' || metriCote == '') {
    newInputPretCote.value = 0;
    newInputMetriCote.value = 0;
  } else {
    newInputPretCote.value = pretCote;
    newInputMetriCote.value = metriCote;
    newInputCostCote.value = pretCote * metriCote;
  }
}