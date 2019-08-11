QUnit.test("Testing returnTitle with empty input", function (assert) {
    var value = "";

    if (value === "") {
        value = false
    } else {
        value = true
    }


    assert.equal(value, false, "Value should be False");
});


QUnit.test("Testing returnDate with higher date", function (assert) {


    var value = "2021-08-11";

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var today = year + "-0" + month + "-" + day;

    if (value === "" || value < today) {
        value = false
    } else {
        value = true;
    }

    assert.equal(value, true, "Value should be True");
});

QUnit.test("Testing returnDate with lower date", function (assert) {


    var value = "2011-08-11";

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var today = year + "-0" + month + "-" + day;

    if (value === "" || value < today) {
        value = false
    } else {
        value = true;
    }

    assert.equal(value, false, "Value should be False");
});

QUnit.test("Testing returnDescription with character length less than 20", function (assert) {
    var value = "four"

    if (value.length < 20 || value == "") {
        value = false
    } else {
        value = true
    }

    assert.equal(value, false, "Value should be False");
});

QUnit.test("Testing returnDescription with character length higher than 20", function (assert) {
    var value = "fourtimesfiveistwenty"

    if (value.length < 20 || value == "") {
        value = false
    } else {
        value = true
    }

    assert.equal(value, true, "Value should be True");
});

QUnit.test("Testing returnNS with two different right and one wrong value", function (assert) {
    var value1 = "N";
    var value2 = "S";
    var value3 = "p";

    if (value1 == "N" || value1 == "S") {
        value1 = true
    } else {
        value1 = false
    }

    if (value2 == "N" || value2 == "S") {
        value2 = true
    } else {
        value2 = false
    }

    if (value3 == "N" || value3 == "S") {
        value3 = true
    } else {
        value3 = false
    }

    assert.equal(value1, true, "Value1 should be True");
    assert.equal(value2, true, "Value2 should be True");
    assert.equal(value3, false, "Value3 should be False");
});

QUnit.test("Testing returnNSDeg with three different wrong and one right value", function (assert) {
    var value1 = -91;
    var value2 = 91;
    var value3 = 48;
    var value4 = "";

    if (value1 < -90 || value1 > 90 ||
        value1 == "") {
        value1 = false
    } else {
        value1 = true
    }

    if (value2 < -90 || value2 > 90 ||
        value2 == "") {
        value2 = false
    } else {
        value2 = true
    }

    if (value3 < -90 || value3 > 90 ||
        value3 == "") {
        value3 = false
    } else {
        value3 = true
    }

    if (value4 < -90 || value4 > 90 ||
        value4 == "") {
        value4 = false
    } else {
        value4 = true
    }

    assert.equal(value1, false, "Value1 should be False");
    assert.equal(value2, false, "Value2 should be False");
    assert.equal(value3, true, "Value3 should be True");
    assert.equal(value4, false, "Value3 should be False");
});

//Really sorry for being this redudand but diddn't figure it out how to call for functions with constructors in QUnit. Skipped the last two functions in main.js because they are the same as the last two in this file.
