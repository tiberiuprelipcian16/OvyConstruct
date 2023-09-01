function addJson() {


    var jsonFile = null,
        makejsonFile = function(json) {
            var data = new Blob([json], { type: 'application/json' });

            if (jsonFile !== null) {
                window.URL.revokeObjectURL(jsonFile);
            }

            jsonFile = window.URL.createObjectURL(data);
            return jsonFile;
        };

    var create = document.getElementById('create'),
        textbox = document.getElementById('textbox'),
        textbox2 = document.getElementById('textbox2');

    create.addEventListener('click', function() {
        var link = document.getElementById('downloadlink');
        var arr = {
            "textbox_value": textbox.value,
            "another_textbox_value": textbox2.value,
            "textbox_value_again": textbox.value,
            "another_textbox_value_again": textbox2.value
        };
        link.href = makejsonFile(JSON.stringify(arr, null, 4));
        link.style.display = 'block';
        return false;
    }, false);

}