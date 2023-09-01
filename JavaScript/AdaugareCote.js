clickCountCote = 0;

function adaugaCote() {

    const adaugateCote = document.getElementById("adaugateCote");
    const actiuneCote = document.getElementById("actiuneCote").value;
    const metriCote = document.getElementById("metriCote").value;
    const pretCote = document.getElementById("pretCote").value;

    const newDivCote = document.createElement("div");

    const newLabelCote = document.createElement("label");
    const newInputMetriCote = document.createElement("input");
    const newInputPretCote = document.createElement("input");
    const newInputCostCote = document.createElement("input");
    const removeButtCote = document.createElement("button");

    //new div
    newDivCote.className = "divAdd"
    newDivCote.id = "RemoveDivAddCote" + clickCountCote;

    //label actiune
    newLabelCote.id = "LabelAddCote" + clickCountCote;

    //input metri
    newInputMetriCote.setAttribute("type", "number");
    newInputMetriCote.id = "InputAddMetriCote" + clickCountCote;
    newInputMetriCote.setAttribute("disabled", "true");

    //input pret
    newInputPretCote.setAttribute("type", "number");
    newInputPretCote.id = "InputAddPretCote" + clickCountCote;
    newInputPretCote.setAttribute("disabled", "true");

    //input cost
    newInputCostCote.setAttribute("type", "text");
    newInputCostCote.id = "InputAddCostCote" + clickCountCote;
    newInputCostCote.setAttribute("disabled", "true");

    //remove butt
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
        newInputCostCote.value = "Pret: " + (pretCote * metriCote) + " EUR";
    }
}

function stergeAdaugare(btn) {
    document.getElementById("RemoveDiv" + btn.id).remove();
}