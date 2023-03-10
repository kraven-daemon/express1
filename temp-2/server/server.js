'use strict';
/* https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs */

// libs
import express from 'express';
import morgan from 'morgan'; // a logger
import helmet from 'helmet'; // quick safe header params {...}
import cors from 'cors'; // cross origin policy middleware handler

// local
import contactRoute from './routes.js';
import { connect } from './database.js';

// env/var  ,should be .env or else i guess
const DEV=1;
const PORT = 5173;
const DB_NAME = 'contacts';
const CONN = 'mongodb://127.0.0.1:27017/' + DB_NAME;

// start with async connection to the database
connect(CONN);
const app = express();

// extra conveniences for devmode
if(DEV){
    app.use(morgan('dev'));
    app.use(cors(
        { origin: '*' }
    ));
}else{
    app.use(helmet(
        {
            contentSecurityPolicy: false, // js not working otherwise
        }
    ));
}

// the client app
app.use(express.static('../client/dist'));

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array());

// external route
app.use('/contacts' , contactRoute);

// Accessing any other undefined routes
app.get('*', (req, res) => {
  res.redirect('https://http.cat/404')
});

// https://expressjs.com/en/guide/error-handling.html
// ERRORS - `throw` propagate to the last `use` middleware... gotta catch them all.. :)
app.use((err, req , res,  next ) => {
    console.error('💥 \n', err)
});

export default function App(){
    // launch here with an initial log for the port.
    app.listen(PORT, function () {
    console.log(`\x1B[41;30m[ Listening on port ${PORT} 🤞 ]\x1B[0m`);
    });
}

