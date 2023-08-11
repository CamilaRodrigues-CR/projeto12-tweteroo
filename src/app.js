import express from "express";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json())

const usuarios = []

app.post('/sign-up', (req, res) => {
    const usuario = {
        username: req.body.username, 
        avatar: req.body.avatar 
    }
    usuarios.push(usuario);
    res.send('OK');

})

app.get('/tweets', (req, res) => {
    res.send('deu certo!');
} );

app.listen(5000, () => console.log("Running server on port 5000"));