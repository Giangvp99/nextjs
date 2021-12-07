import User from '../../../models/users.js';
export default async function handler(req, res) {
    const user = {
        username: "1",
        password: "12",
        fullname: "11",
        age: 11,
        phone: "1111111111",
        email: "11111111@gmail.com",
        address: "11111-1111111-1",
        isAdmin: false
    }
    User.create(user, function(err, small) {
        if (err) return handleError(err);
        console.log("saved")
        // saved!
    });
    res.json(user)
};
