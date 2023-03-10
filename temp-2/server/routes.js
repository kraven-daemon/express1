import { Router } from 'express';
import {
    getContacts,
    getIndexes,
    getById
} from './handlers.js';

const contactRoute = Router()

//middleware
contactRoute.use((req, res, next) => {
  console.log('___ route')
  next()
})

// starting initial payload with 10
contactRoute.get('/', getContacts)
contactRoute.get('/indexes', getIndexes)
contactRoute.get('/:id', getById)
// all post
contactRoute.post('*', (req,res)=>{
    console.log(req.body.mami)
    res.sendStatus(200)
})

export default contactRoute;
