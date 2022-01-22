// Create a car object, add a color property to it with the value equals 'black'
const car = new Object()

// Change the color property of the car object to 'green'
car.color = 'green'

//Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function (){ console.log('Horse power: 665')}
car.power()

// Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
const incomingInventory = (pear, apple) => {
    return console.log(pear + " pcs of pears and " + apple + " pcs of apples accepted into warehouse!")
}
incomingInventory(3,2)

// Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
const checkName = name => {
    const names = ['michael', 'pam', 'jim', 'dwight', 'angela', 'kelly', 'ryan', 'creed', 'kevin', 'stanley', 'phyllis']
    
    if(!names.includes(name.toLowerCase())) console.log('There is no such name!')
    else console.log('Hello ' + name.toLowerCase().split('')[0].toUpperCase() + name.toLowerCase().slice(1, name.length))
}

checkName('jiM')

// Write a function for calculating the type of argument and type output to the console
const checkType = input => {
    console.log('The input is: ' + input)
    console.log('Type of input is: ' + typeof input)
}
checkType(false)

//Write a function that determines whether a number is prime or not
const checkPrimeNumber = input => {
    isPrime = true
    if (input == 1) console.log('Neither prime nor composite')
    else if (input > 1) {
        for (var i = 2; i < input; i++){
            if (input % i == 0){
                isPrime = false
                break
            }
        }
        if (isPrime) console.log(input + ' PRIME')
        else console.log(input + ' NOT PRIME')
    }
    else console.log('Please enter a number greater than 1')
}
checkPrimeNumber(0)