$(function () {

    ///Add tab elements (tasks)

    $("#settings").click(function () {
        $("#add-task").toggle();
        $("#delete-task").toggle();
    });

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

            var setContent = function (input) {
                var content = "<div class='tab-element'>" +
                    "<div class='frame'></div>" +
                    "<p>" + input + "</p>" +
                    "</div>";
                return content;
            }

            if (userInput == "") {
                $("#to-do-content").append(setContent("Empty task"))
            } else {
                $("#to-do-content").append(setContent(userInput));
            };


            /// Draggable tab-elements

            $(".tab-content").sortable({
                revert: true,
                helper: "clone",
                appendTo: 'body',
                scroll: false,
            });
            $(".tab-element").draggable({
                connectToSortable: ".tab-content"
            });
            $(".tab-content").droppable();

            $("#create-task").css("display", "none");
        });
    });

    $("#delete-task").click(function () {

        if ($(".tab-element").length == 0) {
            alert("There are no created tasks");
        } else {
            $(".frame").css("background-color", "#FF5354")
        }

        if ($(".frame").css("background-color", "#FF5354")) {
            $(".frame").click(function () {
                $(this).parent().css("display", "none")
                $(".frame").css({'background-color':''})
            })
        }
    })
});
