import express, { Request, Response } from 'express';
import OrderTableModel from '../models/order_model';
import { Order } from '../models/store_types';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { OrderQueryRequest } from '../backend/query_types';

const ordersTable = OrderTableModel;
dotenv.config();
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




const orderRoutes = (app: express.Application) => {
    app.post('/orders', create);
    app.get('/orders/:id', show);
    app.post('/orders/:id/products', addProducts);
    app.patch('/orders/:id/products', updateProducts);
}



export default orderRoutes;