if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config('')
    console.log("i am correct")
}
console.log(process.env.DATABASE_URL);


const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose')
const indexRouter = require('./routes/index');
const firstRouter = require('./routes/first')
const signup = require('./routes/signup')
const entertainment = require('./routes/entertainment')
const help = require('./routes/help')
const sports = require('./routes/sports')
const musicRouter = require('./routes/music')


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/',indexRouter)
app.use('/first', firstRouter)
app.use('/entertainment', entertainment)
app.use('/signup', signup)
app.use('/help', help)
app.use('/sport', sports)
app.use('/musicNews', musicRouter)

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
})
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))

//app.use('/', indexRouter)

app.listen(process.env.PORT || 5500,()=>(console.log("server started at port 5500")));
