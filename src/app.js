import express from "express";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [];
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
    const { username } = req.body;
    const user = usuarios.some(usuario => usuario.username === username)
    if (user) {
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
     const avatarTweets = tweets.map ((t) => {
        const user = usuarios.find((user) => user.username === t.username);
        return {...t , avatar : user ? user.avatar : ""};
     })

    
     if (tweets) {
        const tweetsList = avatarTweets.slice(-10)
        res.send(tweetsList);
        

    } else {
        
            res.send(tweets);
            console.log('limitList', limitList)
       
    }
   
});


app.listen(5000, () => console.log("Running server on port 5000"));