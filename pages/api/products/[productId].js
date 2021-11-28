import Product from '../../../models/product.js';
export default async function handler(req, res){
    const {productId} = req.query
    let product = await Product.findById(productId)
    res.json(product)
};
