$(function() {
    $(".tab-content").sortable({
        revert: true
    });
    $(".tab-element").draggable({connectToSortable: ".tab-content"});
    $(".tab-content").droppable();
            
});