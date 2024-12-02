import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes.js';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://kd2020rt:YIduvPqtjdNiQIcD@cluster0.99ath.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// serving static files
app.use(express.static('public'));


routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on post ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
