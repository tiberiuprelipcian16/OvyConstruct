"use strict";

//work_baie
var baie_actiuni_label = [];
var baie_actiuni_input = [];
baie_actiuni_label.push("act1", "act2", "act3", "act4", "act5", "act6");
baie_actiuni_input.push(100, 200, 300, 400, 500, 600);
var baie_cote_label = [];
var baie_cote_input = [];
baie_cote_label.push("Tencuiala", "Gresie", "Faianta", "Decopertare");
var addActiuni = document.getElementById("addActiuni");
var addCote = document.getElementById("addCote");

function costCalc(btn) {
  var last = btn.id.substr(btn.id.length - 1);
  var cost = document.getElementById("idInputCostCote" + last);
  var pret = document.getElementById("idInputPretCote" + last).value * 1;
  var metri = document.getElementById("idInputMetriCote" + last).value * 1;
  cost.value = pret * metri;
}

for (i = 0; i <= Math.max(baie_actiuni_label.length, baie_cote_label.length) - 1; i++) {
  if (baie_actiuni_label.length >= baie_cote_label.length) {
    if (i < baie_cote_label.length) {
      //create element cote
      var newDivCote = document.createElement("div");
      var newLabelCote = document.createElement("label");
      var newInputCote = document.createElement("input");
      var newInputCotePret = document.createElement("input");
      var newInputCoteCost = document.createElement("input");
      var switchButtCote = document.createElement("button"); //create element actiuni

      var newDivActiuni = document.createElement("div");
      var newLabelActiuni = document.createElement("label");
      var newInputActiuni = document.createElement("input");
      var switchButtActiuni = document.createElement("button"); //new div cote

      newDivCote.className = "divAdd";
      newDivCote.id = "idDivCote" + i; //new div actiuni

      newDivActiuni.className = "divAdd";
      newDivActiuni.id = "idDivActiuni" + i; //new label cote

      newLabelCote.id = "idLabelCote" + i;
      newLabelCote.className = "labelAdd"; //new label actiuni

      newLabelActiuni.id = "idLabelActiuni" + i;
      newLabelActiuni.className = "labelAdd"; //new input cote

      newInputCote.id = "idInputMetriCote" + i;
      newInputCote.type = "number";
      newInputCote.className = "inputAdd";
      newInputCote.placeholder = "Metri patrati";
      newInputCote.style.textAlign = "center";
      newInputCote.setAttribute("oninput", "costCalc(this)"); //cote pret

      newInputCotePret.id = "idInputPretCote" + i;
      newInputCotePret.type = "number";
      newInputCotePret.placeholder = "Pret metru patrat";
      newInputCotePret.className = "inputAddPret";
      newInputCotePret.style.textAlign = "center";
      newInputCotePret.setAttribute("oninput", "costCalc(this)"); //cote cost

      newInputCoteCost.id = "idInputCostCote" + i;
      newInputCoteCost.className = "inputAddCost";
      newInputCoteCost.setAttribute('disabled', ' ');
      newInputCoteCost.style.textAlign = "center"; //new input actiuni

      newInputActiuni.id = "idInputActiuni" + i;
      newInputActiuni.type = "number";
      newInputActiuni.className = "inputAdd"; //button dezactivare/activare cote

      switchButtCote.innerText = "Dezactiveaza";
      switchButtCote.setAttribute("style", "background: purple");
      switchButtCote.setAttribute("onclick", "dezactiveaza(this)");
      switchButtCote.setAttribute("class", "butt remove");
      switchButtCote.id = "Cote" + i; //button dezactivare/activare actiuni

      switchButtActiuni.innerText = "Dezactiveaza";
      switchButtActiuni.setAttribute("style", "background: purple");
      switchButtActiuni.setAttribute("onclick", "dezactiveaza(this)");
      switchButtActiuni.setAttribute("class", "butt remove");
      switchButtActiuni.id = "Actiuni" + i;
      addCote.appendChild(newDivCote);
      newDivCote.appendChild(newLabelCote);
      newDivCote.appendChild(newInputCote);
      newDivCote.appendChild(newInputCotePret);
      newDivCote.appendChild(newInputCoteCost);
      newDivCote.appendChild(switchButtCote);
      addActiuni.appendChild(newDivActiuni);
      newDivActiuni.appendChild(newLabelActiuni);
      newDivActiuni.appendChild(newInputActiuni);
      newDivActiuni.appendChild(switchButtActiuni);
      newLabelCote.innerText = baie_cote_label[i];
      if (baie_cote_input[i] == undefined) newInputCote.value = '';else {
        newInputCote.value = baie_cote_input[i];
      }
      newLabelActiuni.innerText = baie_actiuni_label[i];
      if (baie_actiuni_input[i] == undefined) newInputActiuni.value = '';else {
        newInputActiuni.value = baie_actiuni_input[i];
      }
      console.log("PreElse" + i);
    } else {
      var _newDivActiuni = document.createElement("div");

      var _newLabelActiuni = document.createElement("label");

      var _newInputActiuni = document.createElement("input");

      var _switchButtActiuni = document.createElement("button");

      console.log("Else" + i); //new div

      _newDivActiuni.className = "divAdd";
      _newDivActiuni.id = "idDivActiuni" + i; //new label

      _newLabelActiuni.id = "idLabelActiuni" + i;
      _newLabelActiuni.className = "labelAdd"; //new input 

      _newInputActiuni.id = "idInputActiuni" + i;
      _newInputActiuni.type = "number";
      _newInputActiuni.className = "inputAdd"; //button dezactivare/activare

      _switchButtActiuni.innerText = "Dezactiveaza";

      _switchButtActiuni.setAttribute("style", "background: purple");

      _switchButtActiuni.setAttribute("onclick", "dezactiveaza(this)");

      _switchButtActiuni.setAttribute("class", "butt remove");

      _switchButtActiuni.id = "Actiuni" + i;
      addActiuni.appendChild(_newDivActiuni);

      _newDivActiuni.appendChild(_newLabelActiuni);

      _newDivActiuni.appendChild(_newInputActiuni);

      _newDivActiuni.appendChild(_switchButtActiuni);

      _newLabelActiuni.innerText = baie_actiuni_label[i];
      if (baie_actiuni_input[i] == undefined) _newInputActiuni.value = '';else _newInputActiuni.value = baie_actiuni_input[i];
    }
  }

  if (baie_cote_label.length > baie_actiuni_label.length) {
    if (i < baie_actiuni_label.length) {
      //create element cote
      var _newDivCote = document.createElement("div");

      var _newLabelCote = document.createElement("label");

      var _newInputCote = document.createElement("input");

      var _switchButtCote = document.createElement("button"); //create element actiuni


      var _newDivActiuni2 = document.createElement("div");

      var _newLabelActiuni2 = document.createElement("label");

      var _newInputActiuni2 = document.createElement("input");

      var _switchButtActiuni2 = document.createElement("button"); //new div cote


      _newDivCote.className = "divAdd";
      _newDivCote.id = "idDivCote" + i; //new div actiuni

      _newDivActiuni2.className = "divAdd";
      _newDivActiuni2.id = "idDivActiuni" + i; //new label cote

      _newLabelCote.id = "idLabelCote" + i;
      _newLabelCote.className = "labelAdd"; //new label actiuni

      _newLabelActiuni2.id = "idLabelActiuni" + i;
      _newLabelActiuni2.className = "labelAdd"; //new input cote

      _newInputCote.id = "idInputCote" + i;
      _newInputCote.type = "number";
      _newInputCote.className = "inputAdd"; //new input actiuni

      _newInputActiuni2.id = "idInputActiuni" + i;
      _newInputActiuni2.type = "number";
      _newInputActiuni2.className = "inputAdd"; //button dezactivare/activare cote

      _switchButtCote.innerText = "Dezactiveaza";

      _switchButtCote.setAttribute("style", "background: purple");

      _switchButtCote.setAttribute("onclick", "dezactiveaza(this)");

      _switchButtCote.setAttribute("class", "butt remove");

      _switchButtCote.id = "Cote" + i; //button dezactivare/activare actiuni

      _switchButtActiuni2.innerText = "Dezactiveaza";

      _switchButtActiuni2.setAttribute("style", "background: purple");

      _switchButtActiuni2.setAttribute("onclick", "dezactiveaza(this)");

      _switchButtActiuni2.setAttribute("class", "butt remove");

      _switchButtActiuni2.id = "Actiuni" + i;
      addCote.appendChild(_newDivCote);

      _newDivCote.appendChild(_newLabelCote);

      _newDivCote.appendChild(_newInputCote);

      _newDivCote.appendChild(_switchButtCote);

      addActiuni.appendChild(_newDivActiuni2);

      _newDivActiuni2.appendChild(_newLabelActiuni2);

      _newDivActiuni2.appendChild(_newInputActiuni2);

      _newDivActiuni2.appendChild(_switchButtActiuni2);

      _newLabelCote.innerText = baie_cote_label[i];
      if (baie_cote_input[i] == undefined) _newInputCote.value = '';else {
        _newInputCote.value = baie_cote_input[i];
      }
      _newLabelActiuni2.innerText = baie_actiuni_label[i];
      if (baie_actiuni_input[i] == undefined) _newInputActiuni2.value = '';else {
        _newInputActiuni2.value = baie_actiuni_input[i];
      }
      console.log("PreElse" + i);
    } else {
      var _newDivCote2 = document.createElement("div");

      var _newLabelCote2 = document.createElement("label");

      var _newInputCote2 = document.createElement("input");

      var _switchButtCote2 = document.createElement("button");

      console.log("Else" + i); //new div

      _newDivCote2.className = "divAdd";
      _newDivCote2.id = "idDivCote" + i; //new label

      _newLabelCote2.id = "idLabelCote" + i;
      _newLabelCote2.className = "labelAdd"; //new input 

      _newInputCote2.id = "idInputCote" + i;
      _newInputCote2.type = "number";
      _newInputCote2.className = "inputAdd"; //button dezactivare/activare

      _switchButtCote2.innerText = "Dezactiveaza";

      _switchButtCote2.setAttribute("style", "background: purple");

      _switchButtCote2.setAttribute("onclick", "dezactiveaza(this)");

      _switchButtCote2.setAttribute("class", "butt remove");

      _switchButtCote2.id = "Cote" + i;
      addCote.appendChild(_newDivCote2);

      _newDivCote2.appendChild(_newLabelCote2);

      _newDivCote2.appendChild(_newInputCote2);

      _newDivCote2.appendChild(_switchButtCote2);

      _newLabelCote2.innerText = baie_cote_label[i];
      if (baie_cote_input[i] == undefined) _newInputCote2.value = '';else _newInputCote2.value = baie_cote_input[i];
    }
  }
}