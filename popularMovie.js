const url = `https://api.themoviedb.org/3/movie`;
const searchUrl = `https://api.themoviedb.org/3/search/movie`;
const imgUrl = `https://image.tmdb.org/t/p/original`

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmMyZGZhZDQ3YThlZDRmMWUwYWQxYjc1MGVhMzBhMSIsInN1YiI6IjY1MzA5NGQ3YWVkZTU5MDE0YzM4MDBjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6qLqVKcX12Lxl8WUe5P3sDfhlIdJ44DaMgj0Dvuq1M'
  	}
};

const searchOptions = {
	method: 'GET',
	headers: {
	  	accept: 'application/json',
	  	Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmMyZGZhZDQ3YThlZDRmMWUwYWQxYjc1MGVhMzBhMSIsInN1YiI6IjY1MzA5NGQ3YWVkZTU5MDE0YzM4MDBjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F6qLqVKcX12Lxl8WUe5P3sDfhlIdJ44DaMgj0Dvuq1M'
	}
  };

  //영화 리스트
fetch(`${url}/popular`, options)
	.then(response => response.json())
	.then(response => {

		response.results.map((res) => {
			let postImg = `${imgUrl}/${res.poster_path}`
			let movieTitle = res.title;
			let voteAverage = res.vote_average;
			let overView = res.overview;

			const movieCard = document.createElement('div');
			movieCard.className = 'movieCard';
			movieCard.addEventListener('click', () => alert(`Movie id : ${res.id}`))
			movieCard.innerHTML = `<div class="moviePoster">
										<img src=${postImg} alt="">
									</div>
									<div class="movieTitle">${movieTitle}</div>
									<div class="voteAverage">${voteAverage}</div>
									<div class="overView">${overView}</div>`

			return document.querySelector("#movieList").appendChild(movieCard);
		})

  	})
  	.catch(err => console.error(err));


const clearCard = () => {
	const cardList = document.querySelectorAll(`.movieCard`)
	cardList.forEach(element => {
		element.remove()
	});
}

// 영화 검색
const searchQuery = () => {
	let searchParams = document.querySelector('#search').value;
	clearCard()

	findMovie(searchParams)
}



const findMovie = (searchParams) => {
	fetch(`${searchUrl}?query=${searchParams}&include_adult=false&language=en-US&page=1`, searchOptions)

		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

}
