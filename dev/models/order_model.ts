import { Order, OrderDetails } from "./store_types";
// @ts-ignore
import client from "../backend/database";




const OrderTableModel = {


      // Create a new order
      create : async (order : Order) : Promise<Order> => {
        try {
            // @ts-ignore
            const conn = await client.connect();
            const sql = "INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *";
            const result = await conn.query(sql, [order.user_id, order.status]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not add new order. Error: ${err}`);
        }
    },

    show : async (user_id : number) : Promise<Array<Order> | null> => {
        try {
        // @ts-ignore
        const conn = await client.connect();
        const sql = "SELECT * FROM orders WHERE user_id = $1 AND status = 'active' ";
        const result = await conn.query(sql, [user_id]);
        conn.release();
        return result.rows;
        } catch (err) {
            console.log(err);
        }
        return null;
    },

    addProducts : async (order: Order) : Promise<Order> => {
        try {
             // @ts-ignore
            const conn = await client.connect();
            const sql = "INSERT INTO order_products (order_id, user_id, product_id, quantity) VALUES($1, $2, $3, $4) RETURNING *";
            const result = await conn.query(sql, [order.order_id, order.user_id, order.product_id, order.quantity]);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not add product to order ${order.order_id}: ${err}`)
        }
    },

    updateOrder : async (order: Order) : Promise<Order> => {
        try {
             // @ts-ignore
            const conn = await client.connect();
            const sql = "UPDATE order_products WHERE user_id = $1 AND product_id = $2 SET quantity = $3";
            const result = await conn.query(sql, [order.user_id, order.product_id, order.quantity]);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not add product to order ${order.order_id}: ${err}`)
        }
    },

    showProductByUser : async (user_id: number) : Promise<Array<Order>> => {
        try {
            // @ts-ignore
           const conn = await client.connect();
           const sql = "SELECT  op.id AS id, op.user_id, op.product_id, op.quantity, o.status, op.order_id" + 
           " FROM Order_Products op INNER JOIN Orders o ON op.order_id = o.id WHERE op.user_id = $1";
           const result = await conn.query(sql, [user_id]);
           return result.rows;
       } catch (err) {
           throw new Error(`Could not get order: ${err}`)
       }
    },


    deleteOrder : async (order: Order) : Promise<Array<Order>> => {
        try {
            // @ts-ignore
            const conn = await client.connect();
            const sql = "DELETE * FROM orders WHERE user_id = $1 AND order_id = $2 RETURNING *";
            const result = await conn.query(sql, [order.user_id, order.order_id]);
            return result.rows;
        } catch (err) {
            throw new Error(`Could not delete parent order: ${err}`);
        }
    },

    deleteOrderProducts : async (order: Order) : Promise<Array<Order>> => {
        try {
            // @ts-ignore
            const conn = await client.connect();
            const sql = "DELETE * FROM orders_products WHERE user_id = $1 AND order_id = $2 RETURNING *";
            const result = await conn.query(sql, [order.user_id, order.order_id]);
            return result.rows;
        } catch (err) {
            throw new Error(`Could not delete child orders: ${err}`);
        }
    },

    completeOrder : async (order: Order) : Promise<Array<Order>> => {
        try {
            // @ts-ignore
            const conn = await client.connect();
            const sql = "UPDATE orders WHERE order_id = $1 SET status = 'Complete' RETURNING *";
            const result = await conn.query(sql, [order.order_id]);
            return result.rows;
        } catch (err) {
            throw new Error(`Could not complete parent order: ${err}`);
        }
    },

    getOrderChildren : async (order: Order) : Promise<Array<OrderDetails>> => {
        try {
            // @ts-ignore
            const conn = await client.connect();
            const sql = "SELECT p.name AS name, p.description as description, op.quantity AS quantity, p.stars AS stars " +
            "FROM order_products AS op JOIN products AS p ON op.product_id = p.id " +  
            "WHERE op.order_id = $1";
            const result = await conn.query(sql, [order.order_id]);
            return result.rows;
        } catch (err) {
            throw new Error(`Could not get order children: ${err}`);
        }
    }
};


export default OrderTableModel;