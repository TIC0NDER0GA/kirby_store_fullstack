import ProductTableModel from "../models/product_model";
import { Product } from "../models/store_types";
// @ts-ignore
import client from "../backend/database";


describe("Product Model tests", () => {
    const table =  ProductTableModel;
    let productId: number;
    
    const testProduct1 : Product = {
        id : undefined,
        name : "Orange",
        path : '',
        stars : 3.99,
        description : "fruit"
    };
    const testProduct2 : Product = {
        id : undefined,
        name : "Strawberry",
        path : '',
        stars : 1.50,
        description : "fruit"
    };
    const testProduct3 : Product = {
        id : undefined,
        name : "GameBoyAdvance",
        path : '',
        stars : 100.00,
        description : "electronics"
    };

    beforeAll(async () => {
        // @ts-ignore
        const conn = await client.connect();
        await conn.query("DELETE FROM products"); // Clean up the table before running tests
        conn.release();
    });

    it("should create a new product", async () => {
        const createdProduct = await table.create(testProduct1);
        expect(createdProduct).toBeDefined();
        expect(createdProduct.name).toBe(testProduct1.name);
        expect(createdProduct.stars).toBe(testProduct1.stars);
        productId = createdProduct.id!;
    });

    it("should return a list of products", async () => {
        const products = await table.index();
        await table.create(testProduct2);
        await table.create(testProduct3);
        expect(products.length).toBeGreaterThan(0);
    });

    it("should return a single product by ID", async () => {
        const product = await table.show(productId);
        expect(product).toBeDefined();
        expect(product.id).toBe(productId);
    });

    });