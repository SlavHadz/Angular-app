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

router.post('/register', (req, res) => {
    let teamData = req.body;
    let team = new Team(teamData);

    team.save((error, registratedTeam) => {
        if(error) {
            console.log(error);
        } else {
            let payload = { subject: registratedTeam._id}
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token});
        }
    });
})

module.exports = router;