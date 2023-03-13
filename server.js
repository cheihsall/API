express = require('express');
path = require('path');
mongoose = require('mongoose');
createError = require('http-errors')
cors = require('cors');
bodyParser = require('body-parser');
const app = express();


const http = require('http');
const server = http.createServer(app);




//Here we will avoid Mongoose warming (strictQuery will be 'false')
mongoose.set('strictQuery', true);

//Here we are connecting to data base mongoDb by mongoose
mongoose.connect('/*lien de votre base de donnee*/',
    
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à à la base de donnee réussie !'))
    .catch(() => console.log('Connexion à la base de donnee échoué verifier votre connexion internet !'));

//Here are adding the constant 'app' using express
/**/





//Here are managing body requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//Here are managing CORS sécurity
app.use(cors({ origin: "*" }));


//Here we are managing endpoint for access to user model
const userRoute = require('./routes/user.route');
app.use('/All', userRoute);

//Here we are managing server's port (using which are giving by the system or 3000)
const port = process.env.PORT || 2000;


app.use((req, res, next) => {
    next((404))
});

app.get('/', (req, res) => {
    res.send('invalid endpoint')
});

app.use((err, req, res, next) => {
    if (!err.statusCode) ErrorEvent.statusCode = 500;
    res.status(err.statutsCode).send(err.message);
});

app.listen(port)



