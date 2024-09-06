// const axios=require("axios");
async function fetchMovies() {
    try {

        const response = await fetch("https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/recommendations/19995 ", {
            headers: {
                // "x-rapidapi-host": "advance-movie-api.p.rapidapi.com",
                // "x-rapidapi-key": "c57e132b8bmsh3c263f40de72d98p10aca5jsn5e5e2a0229dc"
                // "X-RapidAPI-Proxy-Secret": "4d633e10-2ff4-11ef-a338-672c018612df",
                "x-rapidapi-host": "advance-movie-api.p.rapidapi.com",
                "x-rapidapi-key": "386595c107msh74d0a4306921b59p1c6613jsnc8a84fd0371f"
            },
            method: "get",
        });

        const res = await response.json();
        const data = res.result.data
        for (let i = 0; i < data.length; i++) {

            console.log(data[i]);
            console.log(data[i].Title);
            console.log(data[i].Rating);
            console.log(data[i].Thumbnail)
            console.log(data[i].Watch)
            const title = data[i].Title;
            const rating = data[i].Rating;
            const poster = data[i].Thumbnail;
            const trailer = data[i].Watch;

            createMovieCard(trailer, poster, rating, title)

        }
    }
    catch (error) {
        console.log("error while making api request", error)
    }
}
fetchMovies()

function createMovieCard(urlTrailer, imageSrc, rating, movieName) {
    const movieImage = document.createElement('img');
    movieImage.className = 'movie-image';
    movieImage.src = imageSrc;
    movieImage.alt = movieName;

    const movieImageBox = document.createElement('div');
    movieImageBox.className = 'movie-imagebox';

    movieImageBox.appendChild(movieImage);

    const iElement = document.createElement('i');
    iElement.className = 'fa-solid fa-star';

    const h4Element = document.createElement('h4');
    h4Element.textContent = rating;
    //need too append into moviedetailbox
    const ratingDesignBox = document.createElement('div');
    ratingDesignBox.className = 'rating-design';
    ratingDesignBox.appendChild(iElement);
    ratingDesignBox.appendChild(h4Element);

    const movieTitle = document.createElement('div');
    movieTitle.className = 'movie-title';

    const h3Element = document.createElement('h4');
    h3Element.textContent = movieName;
    movieTitle.appendChild(h3Element);

    const movieDetailBox = document.createElement('div');
    movieDetailBox.className = 'movie-detailbox';

    movieDetailBox.appendChild(ratingDesignBox);
    movieDetailBox.appendChild(movieTitle);

    const watchlistDesign = document.createElement('div');
    watchlistDesign.className = 'Watchlist-design';

    const watchlistButton = document.createElement('button');
    watchlistButton.className = 'watchlist-button';
    watchlistButton.innerHTML = '<i class="fa-solid fa-plus"></i> Add to Watchlist';
    watchlistDesign.appendChild(watchlistButton);

    movieDetailBox.appendChild(watchlistDesign);

    const urlTrailerDesign = document.createElement('div');
    urlTrailerDesign.className = 'Trailer-design';

    const urlTrailerButton = document.createElement('button');
    urlTrailerButton.className = 'trailer-button';
    urlTrailerButton.innerHTML = `<i class="fa-solid fa-play"></i>  <a href= ${urlTrailer} > Watch Trailer</a>`;
    urlTrailerDesign.appendChild(urlTrailerButton);

    movieDetailBox.appendChild(urlTrailerDesign);


    const movieCard = document.createElement('div')
    movieCard.className = 'movie-card';

    movieCard.appendChild(movieImageBox);
    movieCard.appendChild(movieDetailBox);

    document.getElementsByClassName('box-design')[0]

        .appendChild(movieCard);

    const Element = document.querySelectorAll('box-design')
    console.log(Element);

}
// createMovieCard()

