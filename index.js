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
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        duration: 194,
        like: false
    },
    {
        id: "2",
        name: "Avatar",
        year: 2009,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        duration: 162,
        like: true
    },
    {
        id: "4",
        name: "Forrest Gump",
        year: 1994,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        duration: 142,
        like: false
    },
    {
        id: "5",
        name: "The Dark Knight",
        year: 2008,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        duration: 152,
        like: true
    },
    {
        id: "6",
        name: "Inception",
        year: 2010,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        duration: 148,
        like: false
    },
    {
        id: "7",
        name: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        duration: 178,
        like: true
    },
    {
        id: "8",
        name: "Pulp Fiction",
        year: 1994,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        duration: 154,
        like: false
    },
    {
        id: "9",
        name: "The Matrix",
        year: 1999,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        duration: 136,
        like: true
    },
    {
        id: "10",
        name: "Interstellar",
        year: 2014,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        duration: 169,
        like: false
    },
    {
        id: "11",
        name: "Joker",
        year: 2019,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY4096_.jpg",
        duration: 122,
        like: false,
    },
    {
        id: "12",
        name: "The Shawshank Redemption",
        year: 1994,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTM0NjUxMDk5MF5BMl5BanBnXkFtZTcwNDMxNDY3Mw@@._V1_FMjpg_UX1800_.jpg",
        duration: 142,
        like: false
    },
    {
        id: "13",
        name: "The Godfather",
        year: 1972,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY4281_.jpg",
        duration: 175,
        like: false
    },
    {
        id: "14",
        name: "The Godfather: Part II",
        year: 1974,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQyMDc0ODY1OV5BMl5BanBnXkFtZTgwMDI4NjIwMjE@._V1_.jpg",
        duration: 202,
        like: false
    },
    {
        id: "15",
        name: "12 Angry Men",
        year: 1957,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNTNjOWI4ODYtODhjZC00NDk1LThlM2ItZDNiNDMzOTI5YWI5XkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_.jpg",
        duration: 96,
        like: false
    },
    {
        id: "16",
        name: "Schindler's List",
        year: 1993,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTgwNzg3MDkxM15BMl5BanBnXkFtZTcwMzA2MDAxMw@@._V1_FMjpg_UX2048_.jpg",
        duration: 195,
        like: false
    },
    {
        id: "17",
        name: "The Lord of the Rings: The Return of the King",
        year: 2003,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNTg3Mzk3NDI0NF5BMl5BanBnXkFtZTcwNDU2MTk2Mw@@._V1_FMjpg_UY2048_.jpg",
        duration: 201,
        like: false
    },
    {
        id: "19",
        name: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjQ4NDg5MTQwNl5BMl5BanBnXkFtZTgwNTQwMTk2MTI@._V1_FMjpg_UX1920_.jpg",
        duration: 178,
        like: false
    },
];


// Route pour récupérer la liste des films
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});

// Route pour modifier le statut "like" d'un film
app.patch('/movies/like/:id', (req, res) => {
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
