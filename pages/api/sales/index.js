import Sale from '../../../models/sale';
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            let sales = await Sale.find()
            res.json(sales)
        case 'POST':
            const { user, cart } = req.body
            let now = new Date();
            // var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
            // var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            const date = [now.getFullYear(), now.getMonth(), now.getDate()];
            const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
            let info = {
                time: [...date, ...time],
                name: user.fullname,
                phone: user.phone,
                age: user.age,
                gender: user.gender ? true : false,
                mail: user.mail,
                products: {
                    ...cart.reduce((obj, item) => {
                        return {
                            ...obj, [item._id]: item.total
                        }
                    }, {})
                }
            }
            Sale.create(info, (err, small) => {
                if (err)
                    console.log(err)
                else console.log("saved")
            })
            res.json(info)

    }
};
