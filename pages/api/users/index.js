import User from '../../../models/users.js';
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            let users = await User.find()
            res.json(users)
        // case 'POST':
            // res.json(req.body)
    }
};
