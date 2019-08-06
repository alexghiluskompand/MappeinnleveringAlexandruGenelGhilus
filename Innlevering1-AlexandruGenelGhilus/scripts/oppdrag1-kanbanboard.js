$(function () {
    /// Draggable tab-elements

    $(".tab-content").sortable({
        revert: true
    });
    $(".tab-element").draggable({
        connectToSortable: ".tab-content",
        scroll: "false"
    });
    $(".tab-content").droppable();

    ///Add tab elements (tasks)

    $("#add-task").click(function () {
        $("#create-task").html(
            "<h3>Add task</h3>" +
            "<textarea id='task-input'></textarea>" +
            "<button id='confirm-task' class='task-button'>Confirm</button>" +
            "<button id='cancel-task' class='task-button'>Cancel</button>"
        ).css({
            "display": "block",
            "height": "300px",
            "margin-bottom": "10px"
        });

        $("#cancel-task").click(function () {
            $("#create-task").css("display", "none");
        });

        $("#confirm-task").click(function () {

            var userInput = $("#task-input").val();

            $("#to-do-content").append(
                "<div class='tab-element'>" +
                "<div class='priority'></div>" +
                "<p>" + userInput + "</p>" +
                "</div>"
            )
            $(".tab-content").sortable({
                revert: true
            });
            $(".tab-element").draggable({
                connectToSortable: ".tab-content"
            });
            $(".tab-content").droppable();

            ;

            $("#create-task").css("display", "none");
        });
    });
});
