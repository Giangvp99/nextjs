import Sale from '../../../models/sale.js';
export default async function handler(req, res) {
    let sales = await Sale.find()
    res.json(sales)
};
