import Product from '../../../models/product.js';
export default async function handler(req, res){
    let products = await Product.find()
    res.json(products)
};
