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
            newInputCote.id = "idInputCote" + i;
            newInputCote.type = "number";
            newInputCote.className = "inputAdd";
            newInputCote.placeholder = "Metri patrati";
            newInputCote.style.textAlign = "center";
            //cote pret
            newInputCotePret.id = "idInputCotePret" + i;
            newInputCotePret.type = "number";
            newInputCotePret.placeholder = "Pret metru patrat";
            newInputCotePret.className = "inputAddPret";
            newInputCotePret.style.textAlign = "center";
            //cote cost
            newInputCoteCost.id = "idInputCoteCost" + i;
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

function dezactiveaza(btn) {
    document.getElementById(btn.id).setAttribute("style", "background: grey");
    document.getElementById(btn.id).innerText = "Activeaza";
    document.getElementById(btn.id).setAttribute("onclick", "activeaza(this)");
    document.getElementById("idInput" + btn.id).setAttribute('class', 'inputAddDisabled');
    document.getElementById("idLabel" + btn.id).setAttribute('class', 'labelAddDisabled');
    document.getElementById("idInput" + btn.id).setAttribute('disabled', ' ');
    document.getElementById("idDiv" + btn.id).setAttribute("style", "background-color: lightgrey");
}

function activeaza(btn) {
    document.getElementById(btn.id).innerText = "Dezactiveaza";
    document.getElementById(btn.id).setAttribute("style", "background: purple");
    document.getElementById(btn.id).setAttribute("onclick", "dezactiveaza(this)");
    document.getElementById("idInput" + btn.id).setAttribute('class', 'inputAdd');
    document.getElementById("idLabel" + btn.id).setAttribute('class', 'labelAdd');
    document.getElementById("idInput" + btn.id).removeAttribute("disabled", "");
    document.getElementById("idDiv" + btn.id).setAttribute("style", "background-color: transparent");
}


/*
let x = JSON.stringify(baie_act);
document.getElementById("json").innerHTML = JSON.stringify(x, undefined, 1);
*/



/*
jsonData.users.push({
    name: "James Den",
    email: "james.den@example.com"
});
*/

let data = [{
    actiune: {},
    cost: {}
}];


let cst = [];
for (i = 0; i < document.getElementsByClassName("labelAdd").length; i++) {

    let act = document.getElementsByClassName("labelAdd")[i].textContent;
    cst[i] = document.getElementsByClassName("inputAdd")[i].value;
    data[i] = {
        actiune: act,
        cost: cst[i]
    }
}

console.log(data);
console.log(JSON.parseInt(data));