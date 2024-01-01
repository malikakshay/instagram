require('dotenv').config();

const PORT = process.env.PORT || 5002;

const app = require('./app');


//create route
app.listen(PORT, () =>{
    console.log(`Server is listening at http://localhost:${PORT}`);
});