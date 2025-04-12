//  Product
// id
// name
// price
// [OPTIONAL] category

type Product = {
    id? : number,
    name : string,
    path : string,
    stars : number,
    description? : string
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
type Order = {
    id? : number,
    user_id : number,
    product_id? : number,
    quantity? : number
    status? : string,
    order_id?: number
}



export type {Product, User, Order};