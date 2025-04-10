//  Product
// id
// name
// price
// [OPTIONAL] category

type Product = {
    id? : number,
    name : string,
    path : string,
    price : number,
    category? : string
}

// User
// id
// firstName
// lastName
// password

type User = {
    id? : number,
    username : string,
    firstname : string,
    lastname : string,
    password : string
}

// Orders
// id
// id of each product in the order
// quantity of each product in the order
// user_id
// status of order (active or complete)



export type {Product, User};