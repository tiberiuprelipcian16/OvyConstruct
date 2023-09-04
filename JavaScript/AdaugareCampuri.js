//work_baie
let baie_actiuni_label = [];
let baie_actiuni_input = [];
baie_actiuni_label.push("act1", "act2", "act3", "act4", "act5", "act6");
baie_actiuni_input.push(100, 200, 300, 400, 500, 600);

let baie_cote_label = [];
let baie_cote_input = [];
baie_cote_label.push("Tencuiala", "Gresie", "Faianta", "Decopertare");

const addActiuni = document.getElementById("addActiuni");
const addCote = document.getElementById("addCote");

function costCalc(btn) {

    let last = btn.id.substr(btn.id.length - 1);
    let cost = document.getElementById("idInputCostCote" + last);
    let pret = (document.getElementById("idInputPretCote" + last).value * 1);
    let metri = (document.getElementById("idInputMetriCote" + last).value * 1);

    cost.value = pret * metri;
}

for (i = 0; i <= Math.max(baie_actiuni_label.length, baie_cote_label.length) - 1; i++) {


    if (baie_actiuni_label.length >= baie_cote_label.length) {
        if (i < baie_cote_label.length) {

            //create element cote
            const newDivCote = document.createElement("div");
            const newLabelCote = document.createElement("label");
            const newInputCote = document.createElement("input");
            const newInputCotePret = document.createElement("input");
            const newInputCoteCost = document.createElement("input");
            const switchButtCote = document.createElement("button");

            //create element actiuni
            const newDivActiuni = document.createElement("div");
            const newLabelActiuni = document.createElement("label");
            const newInputActiuni = document.createElement("input");
            const switchButtActiuni = document.createElement("button");

            //new div cote
            newDivCote.className = "divAdd";
            newDivCote.id = "idDivCote" + i;

            //new div actiuni
            newDivActiuni.className = "divAdd";
            newDivActiuni.id = "idDivActiuni" + i;

            //new label cote
            newLabelCote.id = "idLabelCote" + i;
            newLabelCote.className = "labelAdd";

            //new label actiuni
            newLabelActiuni.id = "idLabelActiuni" + i;
            newLabelActiuni.className = "labelAdd";

            //new input cote
            newInputCote.id = "idInputMetriCote" + i;
            newInputCote.type = "number";
            newInputCote.className = "inputAdd";
            newInputCote.placeholder = "Metri patrati";
            newInputCote.style.textAlign = "center";
            newInputCote.setAttribute("oninput", "costCalc(this)")

            //cote pret
            newInputCotePret.id = "idInputPretCote" + i;
            newInputCotePret.type = "number";
            newInputCotePret.placeholder = "Pret metru patrat";
            newInputCotePret.className = "inputAddPret";
            newInputCotePret.style.textAlign = "center";
            newInputCotePret.setAttribute("oninput", "costCalc(this)")

            //cote cost
            newInputCoteCost.id = "idInputCostCote" + i;
            newInputCoteCost.className = "inputAddCost";
            newInputCoteCost.setAttribute('disabled', ' ');
            newInputCoteCost.style.textAlign = "center";

            //new input actiuni
            newInputActiuni.id = "idInputActiuni" + i;
            newInputActiuni.type = "number";
            newInputActiuni.className = "inputAdd";

            //button dezactivare/activare cote
            switchButtCote.innerText = "Dezactiveaza";
            switchButtCote.setAttribute("style", "background: purple");
            switchButtCote.setAttribute("onclick", "dezactiveaza(this)");
            switchButtCote.setAttribute("class", "butt remove");
            switchButtCote.id = "Cote" + i;

            //button dezactivare/activare actiuni
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
            if (baie_cote_input[i] == undefined)
                newInputCote.value = '';
            else {
                newInputCote.value = baie_cote_input[i];
            }


            newLabelActiuni.innerText = baie_actiuni_label[i];
            if (baie_actiuni_input[i] == undefined)
                newInputActiuni.value = '';
            else {
                newInputActiuni.value = baie_actiuni_input[i];
            }

            console.log("PreElse" + i);
        } else {
            const newDivActiuni = document.createElement("div");
            const newLabelActiuni = document.createElement("label");
            const newInputActiuni = document.createElement("input");
            const switchButtActiuni = document.createElement("button");

            console.log("Else" + i);
            //new div
            newDivActiuni.className = "divAdd";

            newDivActiuni.id = "idDivActiuni" + i;

            //new label
            newLabelActiuni.id = "idLabelActiuni" + i;
            newLabelActiuni.className = "labelAdd";

            //new input 
            newInputActiuni.id = "idInputActiuni" + i;
            newInputActiuni.type = "number";
            newInputActiuni.className = "inputAdd";

            //button dezactivare/activare
            switchButtActiuni.innerText = "Dezactiveaza";
            switchButtActiuni.setAttribute("style", "background: purple");
            switchButtActiuni.setAttribute("onclick", "dezactiveaza(this)");
            switchButtActiuni.setAttribute("class", "butt remove");
            switchButtActiuni.id = "Actiuni" + i;

            addActiuni.appendChild(newDivActiuni);
            newDivActiuni.appendChild(newLabelActiuni);
            newDivActiuni.appendChild(newInputActiuni);
            newDivActiuni.appendChild(switchButtActiuni);


            newLabelActiuni.innerText = baie_actiuni_label[i];
            if (baie_actiuni_input[i] == undefined)
                newInputActiuni.value = '';
            else
                newInputActiuni.value = baie_actiuni_input[i];
        }
    }

    if (baie_cote_label.length > baie_actiuni_label.length) {
        if (i < baie_actiuni_label.length) {

            //create element cote
            const newDivCote = document.createElement("div");
            const newLabelCote = document.createElement("label");
            const newInputCote = document.createElement("input");
            const switchButtCote = document.createElement("button");

            //create element actiuni
            const newDivActiuni = document.createElement("div");
            const newLabelActiuni = document.createElement("label");
            const newInputActiuni = document.createElement("input");
            const switchButtActiuni = document.createElement("button");

            //new div cote
            newDivCote.className = "divAdd";
            newDivCote.id = "idDivCote" + i;

            //new div actiuni
            newDivActiuni.className = "divAdd";
            newDivActiuni.id = "idDivActiuni" + i;

            //new label cote
            newLabelCote.id = "idLabelCote" + i;
            newLabelCote.className = "labelAdd";

            //new label actiuni
            newLabelActiuni.id = "idLabelActiuni" + i;
            newLabelActiuni.className = "labelAdd";

            //new input cote
            newInputCote.id = "idInputCote" + i;
            newInputCote.type = "number";
            newInputCote.className = "inputAdd";

            //new input actiuni
            newInputActiuni.id = "idInputActiuni" + i;
            newInputActiuni.type = "number";
            newInputActiuni.className = "inputAdd";

            //button dezactivare/activare cote
            switchButtCote.innerText = "Dezactiveaza";
            switchButtCote.setAttribute("style", "background: purple");
            switchButtCote.setAttribute("onclick", "dezactiveaza(this)");
            switchButtCote.setAttribute("class", "butt remove");
            switchButtCote.id = "Cote" + i;

            //button dezactivare/activare actiuni
            switchButtActiuni.innerText = "Dezactiveaza";
            switchButtActiuni.setAttribute("style", "background: purple");
            switchButtActiuni.setAttribute("onclick", "dezactiveaza(this)");
            switchButtActiuni.setAttribute("class", "butt remove");
            switchButtActiuni.id = "Actiuni" + i;

            addCote.appendChild(newDivCote);
            newDivCote.appendChild(newLabelCote);
            newDivCote.appendChild(newInputCote);
            newDivCote.appendChild(switchButtCote);

            addActiuni.appendChild(newDivActiuni);
            newDivActiuni.appendChild(newLabelActiuni);
            newDivActiuni.appendChild(newInputActiuni);
            newDivActiuni.appendChild(switchButtActiuni);


            newLabelCote.innerText = baie_cote_label[i];
            if (baie_cote_input[i] == undefined)
                newInputCote.value = '';
            else {
                newInputCote.value = baie_cote_input[i];
            }


            newLabelActiuni.innerText = baie_actiuni_label[i];
            if (baie_actiuni_input[i] == undefined)
                newInputActiuni.value = '';
            else {
                newInputActiuni.value = baie_actiuni_input[i];
            }

            console.log("PreElse" + i);
        } else {
            const newDivCote = document.createElement("div");
            const newLabelCote = document.createElement("label");
            const newInputCote = document.createElement("input");
            const switchButtCote = document.createElement("button");

            console.log("Else" + i);
            //new div
            newDivCote.className = "divAdd";
            newDivCote.id = "idDivCote" + i;

            //new label
            newLabelCote.id = "idLabelCote" + i;
            newLabelCote.className = "labelAdd";

            //new input 
            newInputCote.id = "idInputCote" + i;
            newInputCote.type = "number";
            newInputCote.className = "inputAdd";

            //button dezactivare/activare
            switchButtCote.innerText = "Dezactiveaza";
            switchButtCote.setAttribute("style", "background: purple");
            switchButtCote.setAttribute("onclick", "dezactiveaza(this)");
            switchButtCote.setAttribute("class", "butt remove");
            switchButtCote.id = "Cote" + i;

            addCote.appendChild(newDivCote);
            newDivCote.appendChild(newLabelCote);
            newDivCote.appendChild(newInputCote);
            newDivCote.appendChild(switchButtCote);


            newLabelCote.innerText = baie_cote_label[i];
            if (baie_cote_input[i] == undefined)
                newInputCote.value = '';
            else
                newInputCote.value = baie_cote_input[i];
        }
    }
}