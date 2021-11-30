import User from '../../../models/users.js';
export default async function handler(req, res) {
    let users = await User.find()
    res.json(users)
};
