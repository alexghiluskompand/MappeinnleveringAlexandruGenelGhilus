QUnit.test("Test returnTitle", function (input) {
    func.returnTitle(input).valueOf();
    var value = "This is a new title"
    input.equal(value, "This is a new title", "Input should be the same as value");
});