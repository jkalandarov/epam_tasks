class Converter {
    constructor (input){
        this.input = input
    }

    stringToNumber (input) {
        console.log(Number(input));
    }

    numberToString (input) {
        console.log(String(input))
    }

    datesToNumber (input) {
        console.log(Number(input))
    }

    dateToString (input) {
        console.log(input.toString())
    }

    booleanToNumber (input) {
        console.log(Number(input))
    }
}
let conv = new Converter()
var d = new Date('January 17, 2022')

conv.stringToNumber('44')       // Output 44, type integer/number
conv.stringToNumber('44.56')    // Output 44, type float/number
conv.stringToNumber('44.56a')   // Output NaN, type number
conv.numberToString(22)         // Output 22, type string
conv.datesToNumber(d)           //Output 1642359600000, type integer/number
conv.dateToString(d)            //Output Mon Jan 17 2022 00:00:00 GMT+0500 (Uzbekistan Standard Time), type string
conv.booleanToNumber(true)      //Output 1, type integer/number