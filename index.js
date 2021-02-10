import express from 'express'

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router/UserRoutes.js'
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/user',router)
app.use('/Post',router)


const Connection='mongodb+srv://React:Nodejs@cluster0.8tzhk.mongodb.net/<Tutor>?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;
mongoose.connect(Connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);