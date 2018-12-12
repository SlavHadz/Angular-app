const {Router} = require('express');
const router = new Router();
const jwt = require('jsonwebtoken');
const Team = require('./../models/team');

const mongoose = require('mongoose');
const db = 'mongodb://slavhadz:9epyweqrpt@ds121834.mlab.com:21834/teams';

mongoose.connect(db, (err) => {
    if(err) {
        console.error(err)
    } else {
        console.log('connected to mongodb');
    }
});

router.get('/', (req, res) => {
    res.send('Send from API');
});

module.exports = router;