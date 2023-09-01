//work_baie
const baie_act = [];
const baie_cost = [];
const baie_cote_label = [];
baie_act.push("act1", "act2", "act3", "act4", "act5", "act6");
baie_cost.push(100, 200, 300, 400, 500, 600);
baie_cote_label.push("Metrii patrati tencuiala", "Metri patrati gresie");

const addAuto = document.getElementById("addAuto");
const addCote = document.getElementById("addCote");

adauga(baie_cost, baie_act, addAuto, "idDivAuto", "idInputAuto", "idLabelAuto", "idButtAuto");
dezactiveaza(btn, "idInputAuto");
activeaza(btn, "idInputAuto");

adauga(4, baie_cote_label, addCote, "idDivCote", "idInputCote", "idLabelCote", "idButtCote");
dezactiveaza(btn, "idInputCote");
activeaza(btn, "idInputCote");

function adauga(x, y, z, denDiv, denInput, denLabel, denButt) {
    // x - preturi
    // y - denumire
    // z - unde se afiseaza

    for (i = 0; i <= y.length - 1; i++) {
        const newDiv = document.createElement("div");
        const newLabel = document.createElement("label");
        const newInput = document.createElement("input");
        const switchButt = document.createElement("button");

        switchButt.innerText = "Dezactiveaza";
        switchButt.setAttribute("style", "background: purple");
        switchButt.setAttribute("onclick", "dezactiveaza(this)");
        switchButt.setAttribute("class", "butt remove");
        switchButt.id = denButt + i;
        newDiv.className = "divAdd";
        newDiv.id = denDiv + i;
        newLabel.id = denLabel + i;
        newInput.id = denInput + i;
        newInput.type = "text";
        newInput.className = "inputAdd";
        newLabel.className = "labelAdd";

        z.appendChild(newDiv);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        newDiv.appendChild(switchButt);

        newLabel.innerText = y[i];
        newInput.value = x[i];
    }
}

function dezactiveaza(btn, denInput) {
    document.getElementById(btn.id).setAttribute("style", "background: grey");
    document.getElementById(btn.id).innerText = "Activeaza";
    document.getElementById(btn.id).setAttribute("onclick", "activeaza(this)");
    document.getElementById(denInput + btn.id).setAttribute("disabled", "");
    document.getElementById(denInput + btn.id).setAttribute("style", "background-color: lightgrey");
}

function activeaza(btn, denInput) {
    document.getElementById(btn.id).innerText = "Dezactiveaza";
    document.getElementById(btn.id).setAttribute("style", "background: purple");
    document.getElementById(btn.id).setAttribute("onclick", "dezactiveaza(this)");
    document.getElementById(denInput + btn.id).removeAttribute("disabled", "");
    document.getElementById(denInput + btn.id).setAttribute("style", "background-color: transparent");
}


/*
let x = JSON.stringify(baie_act);
document.getElementById("json").innerHTML = JSON.stringify(x, undefined, 1);*/