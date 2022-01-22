//1.Perform addition of various types (string + boolean, string + number, number + boolean)
const math = (input1, input2, operator) => {
    switch (operator) {
        case 'add':
            console.log( input1 + input2 )
            break
        case 'minus':
            console.log( input1 - input2 )
            break
        case 'multiply':
            console.log( input1 * input2 )
            break
        case 'divide':
            console.log( input1 / input2 )
            break
        default:
            console.log( 'Please enter inputs' )
            break;
    }
    
}

//Addition
math('text', true, 'add')       // string + boolean: output texttrue, type string
math('text', 123, 'add')        // string + number: output text123, type string
math(123, false, 'add')         // number + boolean: output 123, type integer/number

//string - boolean
math('text', true, 'minus')     // string - boolean: output NaN, type number
math('text', 123, 'minus')      // string - number: output NaN, type number
math(123, false, 'minus')       // number - boolean: output 123, type integer/number

//string * boolean
math('text', true, 'multiply') // string * boolean: output NaN, type number
math('text', 123, 'multiply')  // string * number: output NaN, type number
math(123, true, 'multiply')    // number * boolean: output 123, type integer/number

//string / boolean
math('text', true, 'divide')   // string / boolean: output NaN, type number
math('text', 2, 'divide')      // string / number: output NaN, type number
math(1020, false, 'divide')    // number / boolean: output Infinity, type Infinity