// initial state of iceCreamShop flavors    

// let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip", "Raspberry"]

// organized the flavors based on the types and assign a price
// transform the string in object type so you have access to flavors types and prices
let iceCreamFlavors = [
    {name: "Chocolate", type: "Chocolate", price: 2 },
    {name: "Strawberry", type: "Strawberry", price: 1 },
    {name: "Vanilla", type: "Vanilla", price: 2 },
    {name: "Pistachio", type: "Pistachio", price: 1.5 },
    {name: "Neapolitan", type: "Neapolitan", price: 2 },
    {name: "Mint Chip", type: "Mint Chip", price: 1.5 },
    {name: "Raspberry", type: "Raspberry", price: 1 }
]

// client simulation
// create a transaction array to track transactions

let transactions = []

// add three different scenarios 
transactions.push({ scoops: ["Chocolate", "Vanilla", "Mint Chip"], total: 5.5 })
transactions.push({ scoops: ["Raspberry", "StrawBerry"], total: 2 })
transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 })


// analyze the result and calculate the total
const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log(`You've made ${total} $ today`); // You've made 11.5 $ today

// to find out the quantity sold for each flavour
let flavorDistribution = transactions.reduce((acc, curr) => {
    curr.scoops.forEach(scoop => {
      if (!acc[scoop]) {
        acc[scoop] = 0;
      }
      acc[scoop]++;
    })
    return acc;
  }, {}) // { Chocolate: 1, Vanilla: 3, Mint Chip: 1, Raspberry: 1, StrawBerry: 1 }
