// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    let table = document.createElement('table');
    table.setAttribute('id', 'myTab');

    document.getElementById('target').appendChild(table);

    for (i = 0; i < 10; i++) {
        let row = document.createElement('tr');
        document.getElementById('myTab').appendChild(row);

        for (e = 0; e < 10; e++) {
            let column = document.createElement('td');
            row.appendChild(column);

            let text = document.createTextNode('cell');
            column.appendChild(text);
        }
    }

})();
