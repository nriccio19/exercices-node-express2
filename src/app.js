// import de express
import express from 'express'

// definition de notre app
const app = express()
const router = express.Router()

// Créer une programme app.js qui utilise express. Cette application devra tourner sur votre ip locale et le port 7777. Avec votre navigateur en se connectant sur en http à votre ip locale sur le port 7777 on devra récupérer le message 'Exercices express partie 2' Pour cela il faudra créer une route qui manage le path /
const IP = '192.168.1.23'
const PORT = 7777

app.get('/', (req, res) => {
    res.send('Exercices express partie 2')
})

// Ajouter une route /get_current_time qui retournera à l'utilisateur la date du serveur sur lequel s'exécute app.js
// app.get(`/get_current_time`, (req, res) => {
//     const date = new Date()
//     const log = `${date.toUTCString()}`
//     res.send(`Nous somme le : ${log}`)
// })

// Ajouter une route /how_pass_data qui retourne à l'utilisateur un message qui lui explique comment on passe des données d'un handler/middleware à un autre sur express
// app.get('/how_pass_data', (req, res) => {
//     res.send(`Voir le cours`)
// })

const timer = (req, res, next) => {
    const date = new Date()
    req.requestDate = date.toUTCString()
    res.send(req.requestDate)
    next()
}

app.use('/get_current_time', timer)

const useMiddleware = (req, res, next) => {
    res.send(
        `<a href="https://expressjs.com/fr/guide/using-middleware.html">Utilisation de middleware</a>
        <p>Pour passer des données d'un middleware à l'autre nous utilisons la variable nommé next. Exemple : <div><code>var app = express();

        app.use(function (req, res, next) {
          console.log('Time:', Date.now());
          next();
        });</code></div></p>
        `
    )
    next()
}

app.use('/how_pass_data', useMiddleware)

//Number 5 = echec
/*router.get(`/`, function (req, res) {
    res.sendFile(
        path.join(
            '/mnt/c/Users/nricc/desktop/projets/exercices-node-express2/src' +
                '/index.html'
        )
    )
})

router.get(`/get_current_time`, function (req, res) {
    res.sendFile(
        path.join(
            '/mnt/c/Users/nricc/desktop/projets/exercices-node-express2/src' +
                '/get_current_time'
        )
    )
})

router.get(`/how_pass_data`, function (req, res) {
    res.sendFile(path.join('/src/' + '/how_pass_data.html'))
})*/

app.use('/', router)
app.listen(PORT, IP, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log(`Example app listening at http://${IP}:${PORT}`)
})
