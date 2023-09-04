const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

function suma(x) {
    let sm = 0;
    for (i = 0; i <= x.length - 1; i++) {
        sm += x[i];
    }
    return sm;
}

function downloadAsExcel() {

    let nameCustomer = document.getElementById('nameCustomer').value;
    let addressCostomer = document.getElementById('addressCostomer').value;
    let date = document.getElementById('date').value;

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
        if (cst[i] == '')
            cst[i] = 0
        else
            cst[i] = parseInt(data[i].cost);
        console.log(cst[i]);
    }



    data[document.getElementsByClassName("labelAdd").length + 2] = {
            actiune: "Total",
            cost: suma(cst)
        }
        /*
            const data = [{
                    "Actiune": nameCustomer,
                    "Cost": nameCustomer,
                },
                {
                    "Actiune": nameCustomer,
                    "Cost": nameCustomer,
                },
                {
                    "Actiune": nameCustomer,
                    "Cost": nameCustomer,
                }
            ];
            //document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 3);*/

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = {
        Sheets: {
            'data': worksheet
        },
        SheetNames: ['data']
    };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAsExcel(excelBuffer, nameCustomer + "_" + addressCostomer + "_" + date);
}

function saveAsExcel(buffer, filename) {
    const data = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, filename + EXCEL_EXTENSION);
}