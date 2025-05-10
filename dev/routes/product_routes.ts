import express, { Request, Response } from 'express';
import ProductTableModel from '../models/product_model';
import { Product } from '../models/store_types';
import jwt from 'jsonwebtoken';
import { ProductQueryRequest } from '../backend/query_types';

const productsTable = ProductTableModel;
const {
    TOKEN_SECRET
} = process.env;





const create = async (req: Request, res: Response) => {
    const {query, filters, token} : ProductQueryRequest = req.body;


    try {
        // @ts-ignore
        jwt.verify(token, TOKEN_SECRET);
    } catch (err) {
        res.status(401);
        res.json(`Invalid token ${err}`);
        return
    }

    try {


        const inputProduct: Product = {
            name: filters.name,
            path:'',
            stars: filters.price,
            description: filters.category
        }


        const product: Product | undefined = await productsTable.create(inputProduct);

        res.json(product);
    } catch (err) {
        console.log(err);
        res.status(400);
        res.json(err);
    }
}




const show = async (req: Request, res : Response) => {
    
    try {
        const product_id : number = (req.params['id'] as unknown) as number;
        const product : Product = await productsTable.show(product_id);
        res.json(product);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}



const index = async (req: Request, res : Response) => {
    try {
        const products : Array<Product> = await productsTable.index();
        res.json(products);

    } catch (err) {
        console.error(err);
        res.status(400);
        res.json(err);
    }
}


const productRoutes = (app: express.Application) => {
    app.post('/products', create);
    app.get('/products', index);
    app.get('/products/:id', show);
}



export default productRoutes;