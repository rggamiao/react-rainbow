let newInventoryCarModels = ['S1', 'S1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]





// Perhaps you've just learned that "T1" and "S1" types are nearly identical. Try changing the original array and change the "T1" types to "S1" and run the code again. Does it now print "Number of S1 Cars is: 4"?
// Write another loop but this time use a for loop. Remember, we are just using the loops to iterate through an array. We can use either type and accomplish the same objective.
// Outside of this second loop, make a variable called lorrieCount. Create an if statement inside of your for loop that checks if the Car Model is "Lorrie". After the loop is closed, print out how many lorries you found.
// Stop and check: Did you get three "Lorries"?

// let typeS1Count = 0
// let i = 0;

// while (i < newInventoryCarModels.length) {
//     if (newInventoryCarModels[i] === 'S1'){
//         typeS1Count++;
//     }
//     i++

// }

// console.log(`Number of S1 Cars is: ${typeS1Count}`)

let lorrieCount = 0
let i = 0;

for (let i = 0; i < newInventoryCarTypes.length; i++) {
    if (newInventoryCarTypes[i] === 'Lorrie'){
        lorrieCount++;
    }
    

}

console.log(`Number of Lorries is: ${lorrieCount}`)