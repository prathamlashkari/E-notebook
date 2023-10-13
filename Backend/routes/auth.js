const express = require('express')
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const Jwt_seceret = "Yashisagoodboy"
// End point /api/auth/createuser for creating the user with no login
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ minLength: 8 })
], async (req, res) => {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Checking if the user available or not
        let user = await User.findOne({ email: req.body.email });
        if (user) {

            return res.status(400).json({ success, error: "Sorry, a user with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);
        //Create a new user
        user = await User.create({
            name: req.body.name,
            password: secpass,
            email: req.body.email,
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, Jwt_seceret)
        // console.log(authtoken)
        success = true;
        return res.json({ success, authtoken });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Server error' });
    }
});

// End point /api/auth/login for login the user with no login

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password can not be blank').exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ success, errors: "Please enter correct credentials " })
        }
        const passwrodcmp = await bcrypt.compare(password, user.password)
        if (!passwrodcmp) {

            res.status(400).json({ success, errors: "Please enter correct credentials " })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, Jwt_seceret)
        success = true
        res.send({ success, authtoken })

    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Server error' });
    }
})
// End point /api/auth/getuser for getuser the user with no login

router.post('/getuser', fetchuser, async (req, res) => {

    try {
        userid = req.user.id;
        const user = await User.findById(userid).select("-password");
        res.status(200).json({ user });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Server error' });
    }
})
module.exports = router
