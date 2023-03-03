## Movie list API

A basic API for Mediashow's technical test. 
Note that this API is not linked to any database, the datas are not persistent.

### Build & Run

Run this to build the docker image
```bash
$ docker build -t movie-list .
```

Then run this to run the docker image
```bash
$ docker run -p 3000:3000 movie-list
```

### Usage

Once it runs, the API is exposed on `localhost:3000`

Two requests are available :

_GET_ ``/movies`` to retrieve the list of movies.

_PATCH_ ``/movies/:id`` (where the parameter `id` must be the id of a movie) to toggle the value of `like` in the corresponding movie.

