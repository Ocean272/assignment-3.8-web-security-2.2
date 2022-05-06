const express  = require('express');
const sequelize = require('./database');
const PORT = 3000;
const User = require('./user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bodyParser = require('body-parser');

sequelize.sync({ force: true } ).then(() => console.log("db is ready"));

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Supper Makan Apa"});

});

app.post('/users', (req, res) => {
    User.create(req.body).then(() => {
    const plainText = User.password;
        bcrypt.hash(plainText, saltRounds, function(err, hash){
    
            // A callback function called after hash() completes.    
            if(err){
                console.error(err);
                return;
            }
            console.log(hash);
        
            const hashedValue = hash;
            newUser.hash = hashedValue;
            bcrypt.compare(plainText, hashedValue, function(err, result){
                console.log(`compare ${plainText} against ${hashedValue}`);
                if(err){
                    console.error(err);
                    return;
                }
                
                console.log(result);

            });
  
        });
                      
   
        res.send("user is inserted!");


    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});