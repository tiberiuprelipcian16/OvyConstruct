const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';



function downloadAsExcel() {

    let nameCustomer = document.getElementById('nameCustomer').value;
    let addressCostomer = document.getElementById('addressCostomer').value;
    let date = document.getElementById('date').value;



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
    //document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 3);

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