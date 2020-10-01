import express from 'express'

const app = express()

const IP_LOCAL = '192.168.1.23'
const PORT = 7777

const handler1 = (req, res, next) => {
    console.log('The response will be sent by the next function')
    next()
}

const smessage = (req, res, next) => {
    req.message = 'Bienvenue à notre site'

    next()
}

app.use(smessage)

app.get('/', handler1, (req, res) => {
    res.send(`Exercises express partie 2.Message to the user: ${req.message}`)
})

app.get('/get_current_time', (req, res) => {
    const date = new Date()
    const datereel = date.toUTCString()
    res.send(`Current date is:${datereel}. Message to the user: ${req.message}`)
})

app.get('/how_pass_data', (req, res) => {
    res.send(
        `<a href="https://expressjs.com/fr/guide/using-middleware.html">Utilisation de middleware</a>
        <p>Pour passer des données d'un middleware à l'autre nous utilisons la variable nommé next. Exemple : <div><code>var app = express();

        app.use(function (req, res, next) {
          console.log('Time:', Date.now());
          next();
        });</code></div></p>
        Message to the user:${req.message}`
    )
})

app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})
