clickCount = 0;

function adauga() {

    const adaugate = document.getElementById("adaugate");
    const cost = document.getElementById("cost").value;
    const actiune = document.getElementById("actiune").value;

    const newDiv = document.createElement("div");
    const newLabel = document.createElement("label");
    const newInput = document.createElement("input");
    const removeButt = document.createElement("button");

    removeButt.innerText = "Sterge";
    removeButt.setAttribute("style", "background: red");
    removeButt.setAttribute("onclick", "stergeAdaugare(this)");
    removeButt.setAttribute("class", "butt remove");
    newInput.setAttribute("type", "number");
    newInput.id = "InputAdd" + clickCount;
    newLabel.id = "LabelAdd" + clickCount;
    removeButt.id = "Add" + clickCount;
    newDiv.className = "divAdd"
    newDiv.id = "RemoveDivAdd" + clickCount;
    clickCount++;


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
    if (cost == '')
        newInput.value = 0;
    else
        newInput.value = cost;


}

function stergeAdaugare(btn) {
    document.getElementById("RemoveDiv" + btn.id).remove();
}