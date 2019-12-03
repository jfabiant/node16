const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');

/* CREATE EXPRESS APP */

const app = express();
app.use(cors());
app.use(bodyParser.json());

/* DECLARE JWT-secret */

const JWT_Secret = 'tecsup2019';

var testUser = { email: 'tecsup@mai.com', password: '123456'};

app.post('/api/authentication', (req, res) => {
    if(req.body){
        var user = req.body;
        console.log(user);
        
        if(testUser.email == req.body.email && testUser.password == req.body.password){
            var token = jwt.sign(user, JWT_Secret);
            res.status(200).send({
                signed_user: user,
                token
            });

        } else {

            res.status(403).send({
                errorMessage: 'Authorization is required! '
            });

        }
    }
});
