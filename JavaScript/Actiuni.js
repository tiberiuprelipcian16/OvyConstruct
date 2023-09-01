//work_baie
const baie_act = [];
const baie_cost = [];
const baie_cote_label = [];
baie_act.push("act1", "act2", "act3", "act4", "act5", "act6");
baie_cost.push(100, 200, 300, 400, 500, 600);
baie_cote_label.push("Metrii patrati tencuiala", "Metri patrati gresie");

const addActiuni = document.getElementById("addActiuni");
const addCote = document.getElementById("addCote");

adauga(baie_cost, baie_act, addActiuni, baie_act.length - 1, "idDivAuto", "idInputAuto", "idLabelAuto", "idButtAuto");

adauga(0, baie_cote_label, addCote, baie_cote_label - 1, "idDivCote", "idInputCote", "idLabelCote", "idButtCote");


function adauga(x, y, z, nr, denDiv, denInput, denLabel) {
    // x - preturi
    // y - denumire
    // z - unde se afiseaza

    for (i = 0; i <= nr; i++) {
        const newDiv = document.createElement("div");
        const newLabel = document.createElement("label");
        const newInput = document.createElement("input");
        const switchButt = document.createElement("button");
        const span = document.createElement("span");

        switchButt.innerText = "Dezactiveaza";
        switchButt.setAttribute("style", "background: purple");
        switchButt.setAttribute("onclick", "dezactiveaza(this)");
        switchButt.setAttribute("class", "butt remove");
        switchButt.id = i;
        span.id = i;
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
        if (x[i] == undefined)
            newInput.value = '';
        else
            newInput.value = x[i];
    }
}

function dezactiveaza(btn) {
    const denInput = "idInputAuto";
    document.getElementById(btn.id).setAttribute("style", "background: grey");
    document.getElementById(btn.id).innerText = "Activeaza";
    document.getElementById(btn.id).setAttribute("onclick", "activeaza(this)");
    document.getElementById(denInput + btn.id).setAttribute('disabled', ' ');
    document.getElementById(denInput + btn.id).setAttribute("style", "background-color: lightgrey");
}

function activeaza(btn) {
    const denInput = "idInputAuto";
    document.getElementById(btn.id).innerText = "Dezactiveaza";
    document.getElementById(btn.id).setAttribute("style", "background: purple");
    document.getElementById(btn.id).setAttribute("onclick", "dezactiveaza(this)");
    document.getElementById(denInput + btn.id).removeAttribute("disabled", "");
    document.getElementById(denInput + btn.id).setAttribute("style", "background-color: transparent");
}


/*
let x = JSON.stringify(baie_act);
document.getElementById("json").innerHTML = JSON.stringify(x, undefined, 1);*/


baie_cote_label.push("Metri patrati tencuiala", "Metri patrati gresie", "Metri patrati tencuiala", "Metri patrati gresie", "Metri patrati tencuiala", "Metri patrati gresie", "Metri patrati tencuiala", "Metri patrati gresie");



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
            //new div
            newDiv.className = "divAdd";
            newDiv.id = "idDivActiuni" + i;

            //new label
            newLabel.id = "idLabelActiuni" + i;
            newLabel.className = "labelAdd";

            //new input
            newInput.id = "idInputActiuni" + i;
            newInput.type = "number";
            newInput.className = "inputAdd";

            //button dezactivare/activare
            switchButt.innerText = "Dezactiveaza";
            switchButt.setAttribute("style", "background: purple");
            switchButt.setAttribute("onclick", "dezactiveaza(this)");
            switchButt.setAttribute("class", "butt remove");
            switchButt.id = i;

            addActiuni.appendChild(newDiv);
            newDiv.appendChild(newLabel);
            newDiv.appendChild(newInput);
            newDiv.appendChild(switchButt);


            newLabel.innerText = baie_actiuni_label[i];
            if (baie_actiuni_input[i] == undefined)
                newInput.value = '';
            else
                newInput.value = baie_actiuni_input[i];*/