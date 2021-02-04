// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    let table = document.createElement('table');
    table.setAttribute('id', 'myTable');
    document.getElementById('target').appendChild(table);

    for (i = 0; i < 1; i++) {
        let row = document.createElement('tr');
        row.setAttribute('id', 'myRow');
        document.getElementById('myTable').appendChild(row);
    }

    for (i = 0; i < 1; i++) {
        let column = document.createElement('td');
        document.getElementById('myRow').appendChild(column);
    }

})();
