
type OrderQueryRequest = {
    query : string,
    token : string,
    filters  : {
        id: number,
        name: string,
        stars: number,
        description: string,
        quantity: number,
        user_id: number,
        product_id: number,
        order_id: number
    };
}

type ProductQueryRequest = {
    query : string,
    token : string,
    filters  : {
        id: number,
        name: string,
        price: number,
        category: string,
    };
}



type OrderDetails = {
    user_id:number,
    order_id:number,
    product_id: number,
    name: string,
    stars: number,
    path: string,
    quantity: number,
    total_price: number
}


export type {OrderQueryRequest, ProductQueryRequest, OrderDetails}