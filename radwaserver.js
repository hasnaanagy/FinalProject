import express  from 'express';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
mongoose.connect(process.env.mongoConnectionUrl);
   


const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use('/',userRoutes);



app.listen(process.env.port,() => {
    console.log(
        'Started the application on http://localhost:${process.env.port}');
});
 