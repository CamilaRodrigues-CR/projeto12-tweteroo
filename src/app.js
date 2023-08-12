import express from "express";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [{
    username: "Fulaninha", 
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS998lvY2EbqPDkBSY6JrDdctsdfmuhxFAvjO7-M&s"
},
{
    username: "Siclano", 
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bPppzDXokIGZH5SNFz1YEIx0DtQK0GVC8X4fc67mX9Dovsze2_1irNxQUcyVA7hcfvc&usqp=CAU" 
}];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const usuario = {
        username: req.body.username, 
        avatar: req.body.avatar 
    }
    usuarios.push(usuario);
    res.send('OK');

});

app.post('/tweets', (req, res) => {
    const {username} = req.body;
    const user = usuarios.some(usuario => usuario.username === username)
    if (user){
        const tweet = {
            username: req.body.username,
            tweet: req.body.tweet
        }
        tweets.push(tweet)
        res.send('OK')
    } else {
        res.send('UNAUTHORIZED')
    }

   
});

app.get('/tweets', (req, res) => {

    const tweet = [
        {
            username: req.body.username,
            avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
            tweet: req.body.tweet
        }
    ]
   res.send(tweet);
} );

app.listen(5000, () => console.log("Running server on port 5000"));