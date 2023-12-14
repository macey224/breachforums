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
