$(document).ready( function() {
    $('#data-table').dataTable({
        "order": [],
        aLengthMenu: [
            [25, 50, 100, 200, -1],
            [25, 50, 100, 200, "All"]
        ],
        iDisplayLength: -1
    });
})

document.addEventListener('DOMContentLoaded', function () {
    function addDigitSeparators() {
        var table = document.getElementById('data-table');
        var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

        for (var i = 0; i < rows.length; i++) {
            var cell = rows[i].getElementsByTagName('td')[1];
            var number = parseInt(cell.textContent.replace(/,/g, ''), 10);
            cell.textContent = number.toLocaleString();
        }
    }
    addDigitSeparators();
});
