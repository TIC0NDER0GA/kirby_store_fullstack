import express, { Request, Response } from 'express';
import OrderTableModel from '../models/order_model';
import { Order, OrderDetails } from '../models/store_types';
import { OrderQueryRequest } from '../backend/query_types';

const ordersTable = OrderTableModel;


const {
    TOKEN_SECRET
} = process.env;





const create = async (req: Request, res: Response) => {
    const {query, filters, token} : OrderQueryRequest = req.body;




    try {

        const inputOrder: Order = {
            user_id: filters.user_id,
            status: filters.description,
        }


        const order: Order | undefined = await ordersTable.create(inputOrder);

        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(400);
        res.json(err);
    }
}




const show = async (req: Request, res : Response) => {
    const {query, filters} : OrderQueryRequest = req.body;
    
    try {
        const userId : number = filters.user_id;
         // @ts-ignore
        const order : Order = await ordersTable.showProductByUser(userId);
        res.json(order);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}




const addProducts = async (req: Request, res: Response) => {
    const {query, filters} : OrderQueryRequest = req.body;

    try {

        const inputOrder: Order = {
            user_id: filters.user_id,
            status: "Active",
            quantity : filters.quantity,
            order_id: filters.order_id,
            product_id: filters.product_id
        }

         // @ts-ignore
        const order : Array<Order> = await ordersTable.addProducts(inputOrder);
        res.json(order);

    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

const updateProducts = async (req: Request, res: Response) => {
    const {query, filters} : OrderQueryRequest = req.body;

    try {

        const inputOrder: Order = {
            user_id: filters.user_id,
            status: "Active",
            quantity : filters.quantity,
            product_id: filters.product_id,
            order_id: filters.order_id
        }

         // @ts-ignore
        const order : Array<Order> = await ordersTable.updateOrder(inputOrder);
        res.json(order);

    } catch (err) {
        res.status(400);
        res.json(err);
    }
}



const deleteOrder = async (req: Request, res: Response) => {
    const {query, filters} : OrderQueryRequest = req.body;
    try {
        const inputOrder: Order = {
            user_id: filters.user_id,
            status: "Active",
            quantity : filters.quantity,
            product_id: filters.product_id,
            order_id: filters.order_id
        }

        const childOrders : Array<Order> = await ordersTable.deleteOrderProducts(inputOrder);
        const parentOrder : Array<Order> = await ordersTable.deleteOrder(inputOrder);
        parentOrder[0].status = "Canceled";

        res.json(parentOrder.concat(childOrders));
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}


const completeOrder = async (req: Request, res: Response) => {
    const {query, filters} : OrderQueryRequest = req.body;
    try {
        const inputOrder: Order = {
            user_id: filters.user_id,
            status: "complete",
            quantity : filters.quantity,
            product_id: filters.product_id,
            order_id: filters.order_id
        }

        const completeOrder : Array<Order> = await ordersTable.completeOrder(inputOrder);
        const orderDetails : Array<OrderDetails> = await ordersTable.getOrderChildren(inputOrder);
        orderDetails.forEach((order) => {
            order.stars = order.quantity * order.stars;
        })

        res.json({'completeOrder': completeOrder, 'orderDetails': orderDetails});
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}




const orderRoutes = (app: express.Application) => {
    app.post('/orders', create);
    app.patch('/orders', completeOrder);
    app.get('/orders/:id', show);
    app.delete('/orders/:id', deleteOrder);
    app.post('/orders/:id/products', addProducts);
    app.patch('/orders/:id/products', updateProducts);
}



export default orderRoutes;