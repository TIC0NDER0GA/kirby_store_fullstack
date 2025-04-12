
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


export type {OrderQueryRequest}