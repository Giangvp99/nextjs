import Sale from '../../../models/sale'
export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            const { user, cart } = req.body
            let now = new Date();
            // var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
            // var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            const date = [ now.getFullYear(),now.getMonth(), now.getDate()];
            const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
            let info = {
                time: [...date, ...time],
                title: "???",
                name: user.fullname ? "a" : "b",
                phone: user.phone ? "a" : "b",
                age: user.age ? 0 : 1,
                gender: user.gender ? true : false,
                mail: user.mail ? "a" : "b",
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
}
