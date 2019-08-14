function sumTwoSmallestNumbers(numbers) {
    var num1 = 1000000000000
    var num2 = 1000000000000

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < num1) {
            num1 = numbers[i]
        }
    }
    for (var k = 0; k < numbers.length; k++) {
        if ((numbers[k] !== num1) && (numbers[k] < num2)) {
            num2 = numbers[k]
        }
    }
    return num1 + num2
}
