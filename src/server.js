let express = require('express');
let app = express();
const path = require('path');

app.listen(3000, ()=>{
    console.log("Puerto 3000 corriendo")
});

app.get('/cart', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/cart.html'))
});

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));