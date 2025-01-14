const express = require('express');

const app = express();


const port = 5000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:true}));

app.use(express.static('public'));

app.get('/', (req,res) => { 
res.render('index');

});

app.listen(port, () => { 
   console.log(`Server is running ${port}.`);
})
