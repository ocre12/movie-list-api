const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuration de l'API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Définition de la liste de films
const movies = [
    {
        id: "1",
        name: "Titanic",
        year: 1997,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg",
        duration: 194,
        like: false
    },
    {
        id: "2",
        name: "Avatar",
        year: 2009,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg",
        duration: 162,
        like: true
    },
    {
        id: "4",
        name: "Forrest Gump",
        year: 1994,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        duration: 142,
        like: false
    },
    {
        id: "5",
        name: "The Dark Knight",
        year: 2008,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
        duration: 152,
        like: true
    },
    {
        id: "6",
        name: "Inception",
        year: 2010,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
        duration: 148,
        like: false
    },
    {
        id: "7",
        name: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Fellowship_Of_The_Ring.jpg",
        duration: 178,
        like: true
    },
    {
        id: "8",
        name: "Pulp Fiction",
        year: 1994,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        duration: 154,
        like: false
    },
    {
        id: "9",
        name: "The Matrix",
        year: 1999,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        duration: 136,
        like: true
    },
    {
        id: "10",
        name: "Interstellar",
        year: 2014,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        duration: 169,
        like: false
    },
    {
        id: "11",
        name: "Joker",
        year: 2019,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8e/Joker_%282019_film%29_poster.jpg",
        duration: 122,
        like: false,
    },
    {
        id: "12",
        name: "The Shawshank Redemption",
        year: 1994,
        imageUrl: "https://www.imdb.com/title/tt0111161/mediaviewer/rm3877281024/",
        duration: 142,
        like: false
    },
    {
        id: "13",
        name: "The Godfather",
        year: 1972,
        imageUrl: "https://www.imdb.com/title/tt0068646/mediaviewer/rm1072990721/",
        duration: 175,
        like: false
    },
    {
        id: "14",
        name: "The Godfather: Part II",
        year: 1974,
        imageUrl: "https://www.imdb.com/title/tt0071562/mediaviewer/rm3051372544/",
        duration: 202,
        like: false
    },
    {
        id: "15",
        name: "12 Angry Men",
        year: 1957,
        imageUrl: "https://www.imdb.com/title/tt0050083/mediaviewer/rm2449755648/",
        duration: 96,
        like: false
    },
    {
        id: "16",
        name: "Schindler's List",
        year: 1993,
        imageUrl: "https://www.imdb.com/title/tt0108052/mediaviewer/rm2915824384/",
        duration: 195,
        like: false
    },
    {
        id: "17",
        name: "The Lord of the Rings: The Return of the King",
        year: 2003,
        imageUrl: "https://www.imdb.com/title/tt0167260/mediaviewer/rm1703269376/",
        duration: 201,
        like: false
    },
    {
        id: "19",
        name: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        imageUrl: "https://www.imdb.com/title/tt0120737/mediaviewer/rm2354352128/",
        duration: 178,
        like: false
    },
];


// Route pour récupérer la liste des films
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});

// Route pour modifier le statut "like" d'un film
app.patch('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const movieIndex = movies.findIndex(f => f.id == movieId);

    if (movieIndex < 0) {
        res.status(404).send("Film non trouvé");
    } else {
        movies[movieIndex].like = !movies[movieIndex].like;
        res.status(200).json(movies[movieIndex]);
    }
});

// Démarrage de l'API
app.listen(3000, () => {
    console.log('API démarrée sur le port 3000');
});
