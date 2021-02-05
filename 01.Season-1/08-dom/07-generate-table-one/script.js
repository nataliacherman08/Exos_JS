// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    let table = document.createElement('table');
    table.setAttribute('id', 'myTab');

    document.getElementById('target').appendChild(table);

    for (i = 0; i < 10; i++) {
        let row = document.createElement('tr');
        document.getElementById('myTab').appendChild(row);

        for (e = 0; e < 1; e++) {
            let column = document.createElement('td');
            row.appendChild(column);
        }
    }

})();
