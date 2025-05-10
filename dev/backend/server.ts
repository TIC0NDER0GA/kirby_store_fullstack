import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import userRoutes from '../routes/user_routes';
import productRoutes from '../routes/product_routes';
import orderRoutes from '../routes/order_routes';

const  corsOprtions = {
    origin:"*",
    optionsSuccessStatus: 200
};


const app: express.Express = express();
const port: number = 3000;

app.use(cors(corsOprtions));
app.use(bodyParser.json());
userRoutes(app);
productRoutes(app);
orderRoutes(app);

app.listen(port,  () => {
    console.log(`starting app on: ${port}`)
});

