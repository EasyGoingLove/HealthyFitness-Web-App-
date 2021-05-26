import express from 'express';
import db from './db/db.js';
import path from 'path';
import hbs from 'hbs';
import { fileURLToPath } from 'url';
import router from './routes/pages.js';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Connect 
db.connect((err) => {
   if(err) throw err;
    console.log("Connectiong is good.")
});

const app = express();
const publicDir = path.join(__dirname , './public');

hbs.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.static(publicDir));
app.set('view engine' , 'hbs');


//Parse URl- encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended:false}));
//Parse JSON bodies (as sent by API client)
app.use(express.json());
//Parse the cookies (Parse the send / set cookie)
app.use(cookieParser());

//Define Routes
app.use('/', router);
app.use('/login', router);
app.use('/auth', authRouter);
app.use('/register', router);


app.listen('5000' , ()=> {
    console.log('Server listening on port 3000!');
})

//Dont forget process .env port 