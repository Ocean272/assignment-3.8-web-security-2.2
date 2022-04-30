const express  = require('express');
const cors = require('cors');
const app = express();
let corsOptions = {
    origin: "http://localhost:3031"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Supper Makan Apa"});

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${3001}.`);
});