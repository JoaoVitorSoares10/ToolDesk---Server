import express from 'express'; 
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './src/routes/routes';
import db  from './src/database/config';

const port = process.env.PORT || 8000;
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(db.url)
    .then(()=>{
      console.log('connected')
    })
    .catch((err)=>{
      console.log('connection error' + err)
    });

app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes);

app.listen(port, ()=>{
    console.log("listening on port " + port);
});