const func = {
    errors: 1,
    title: "",
    date:"",
    description:"",
    NS:"",
    NSDeg: "",
    EW:"",
    EWDeg:"",

    returnTitle(input) {
        if (input.val() === "") {
            alert("Please fill in the title of the mission");
            func.errors++;
        } else {
            title = input.val();
        }
    },

    returnDate(input) {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let today = year + "-0" + month + "-" + day;

        if (input.val() === "" || input.val() < today) {
            alert("Please fill a valid date");
            func.errors++;
        } else {
            return input.val();
        }
    },

    returnDescription(input) {
        if (input.val().length < 20 || input.val() === "") {
            alert("Please enter a vaild description (Min 20 characters)");
            func.errors++;
        } else {
            return input.val();
        }
    },

    returnNS(input) {
        if (input.val() == "N" || input.val() == "S") {
            return input.val();
        } else {
            alert("Please enter a valid logitude")
            func.errors++;
        }
    },

    returnNSDeg(input) {
        if (input.val() < -90 || input.val() > 90
        || input.val() == "") {
            alert("Enter a valid longitude value");
            func.errors++;
        } else {
            return input.val();
        }
    },

    returnEW(input) {
        if (input.val() == "E" || input.val() == "W") {
            return input.val();
        } else {
            alert("Please enter a valid latitude")
            func.errors++;
        }
    },

    returnEWDeg(input) {
        if (input.val() < -180 || input.val() > 180 
        || input.val() == "") {
            alert("Enter a valid latitude value");
            func.errors++;
        } else {
            return input.val();
        }
    }
}

$(function () {

    $("#add-new-mission").click(function () {
        $("#create-mission").toggle();
    });

    $("#cancel").click(function () {
        $("#create-mission").css("display", "none")
    })

    $("#check").click(function () {
        func.errors = 0;
        func.returnTitle($("#mission-title"));
        func.returnDate($("#mission-date"));
        func.returnDescription($("#mission-description"));
        func.returnNS($("#longitude"));
        func.returnNSDeg($("#longitude-value"));
        func.returnEW($("#latitude"));
        func.returnEWDeg($("#latitude-value"));

        if(func.errors == 0) {
            $("#check").css("display", "none");
            $("#confirm").css("display", "inline");
        }

        else {
            alert("Please correct all the errors before proceeding");
            func.errors=1;
        }
    });
});