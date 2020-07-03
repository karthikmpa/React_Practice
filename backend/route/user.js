const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./user.model');

const router = express.Router();

router.post('/signup', (req, res, next) => {
    bcrypt.hash( req.body.password, 10)
        .then( hash => {
            const user = new User({
                email : req.body.email,
                password: hash
            });

            user.save()
                .then( result => {
                    res.status(201).json({
                    message: 'Registered Successfully!!'
                    });
                })
                .catch( err => {
                    res.status(500).json({
                        message : 'Error creation user!!',
                        error: err
                    });
                });
        });
});

router.post('/login', (req, res) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
    .then( user => {
        if(!user){
            return res.status(401).json({
                message: "Auth Failed 0!!"
            });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
    .then( result => {
        if(!result){
            return res.status(401).json({
                message: "Auth Failed 1 !!"
            });
        }
        res.status(200).json({
            message: 'success',
            userId : fetchedUser._id,
            userName : fetchedUser.email
        });

    })
    .catch( err => {
        return res.status(401).json({
            message: "Auth Failed 2!!",
            error: err
        });        
    })
});


module.exports = router;