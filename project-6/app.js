const BASE_URL = "https://api.themoviedb.org/3";
const MOVIE = "movie";
const TV = "tv";
const POPULAR = "popular";
const API_KEY = "376a7b56bf7b28c1457c230c2ebbd63a";
const showCards = document.querySelector(".showCards");
const movieCards = document.querySelector(".movieCards");
const toggleShow = document.querySelector('#toggleShow')
const toggleMovie = document.querySelector('#toggleMovie')


const popularShows = async (number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${TV}/${POPULAR}?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log("Popular Shows Data:", data); // Debugging log
    const showList = data.results.slice(0,number)
      .map(
        (item) =>
          `<div class="cards relative h-[350px] cursor-pointer" data-show-name="${
            item.original_name
          }">
          <img
          id="cardImg"
            src="https://image.tmdb.org/t/p/w500/${item.poster_path}"
            alt="${item.original_name}"
            class="w-full h-[80%] object-cover"
          />

          <div class="ratings absolute top-1 right-2 flex items-center gap-2 bg-black px-2 py-1 rounded-xl">
          <i class="fa-solid fa-star text-amber-400"></i>
          <div>
            <p class="text-xs font-semibold text-white" >${item.vote_average.toFixed(
              1
            )}/10</p>
          </div>
          </div>
          
          <div class="bio absolute px-2 w-full bottom-0">
            <div class="flex justify-between items-center mb-2">
              <p class="text-white bg-gray-500 inline rounded-lg px-2 py-1 text-xs">${
                item.original_language
              }</p>
              <p class="text-white text-xs">${item.first_air_date}</p>
            </div>
            <p class="text-white text-left font-bold text-amber-400">${
              item.original_name
            }</p>
          </div>
        </div>`
      )
      .join("");

    showCards.innerHTML = showList;

    // showCards.addEventListener("click", (event) => {
    //   const card = event.target.closest(".cards");
    //   if (card) {
    //     const shoeName = card.getAttribute("data-show-name");
    //     alert(shoeName);
    //   }
    // });


  } catch (error) {
    console.error("Error fetching popular shows:", error);
  }
};

const popularMovies = async (number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${MOVIE}/${POPULAR}?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log("Popular Movies Data:", data); // Debugging log
    const movieList = data.results.slice(0,number)
      .map(
        (item) =>
          `<div class="cards relative h-[350px] cursor-pointer" data-movie-name="${
            item.original_title
          }">
          <img
          id="cardImg"
            src="https://image.tmdb.org/t/p/w500/${item.poster_path}"
            alt="${item.original_title}"
            class="w-full h-[80%] object-cover"
          />

          <div class="ratings absolute top-1 right-2 flex items-center gap-2 bg-black px-2 py-1 rounded-xl">
          <i class="fa-solid fa-star text-amber-400"></i>
          <div>
            <p class="text-xs font-semibold text-white" >${item.vote_average.toFixed(
              1
            )}/10</p>
          </div>
          </div>
          
          <div class="bio absolute px-2 w-full bottom-0">
            <div class="flex justify-between items-center mb-2">
              <p class="text-white bg-gray-500 inline rounded-lg px-2 py-1 text-xs">${
                item.original_language
              }</p>
              <p class="text-white text-xs">${item.release_date}</p>
            </div>
            <p class="text-white text-left font-bold text-amber-400">${
              item.original_title
            }</p>
          </div>
        </div>`
      )
      .join("");

    movieCards.innerHTML = movieList;

    movieCards.addEventListener("click", (event) => {
      const card = event.target.closest(".cards");
      if (card) {
        const movies = card.getAttribute("data-movie-name");
        alert(movies);
      }

    });
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
};

let viewAllShow = false;
toggleShow.addEventListener('click' , ()=>{
  if(viewAllShow == false){
    popularShows(17);
    viewAllShow = true;
    toggleShow.innerHTML = "View Less"
  }else{
    popularShows(6);
    viewAllShow = false;
    toggleShow.innerHTML = "View All"
  }
})

let viewAllMovie = false
toggleMovie.addEventListener('click' , ()=>{
  if(viewAllMovie == false){
    popularMovies(16);
    viewAllMovie = true;
    toggleMovie.innerHTML = "View Less"
  }else{
    popularMovies(6);
    viewAllMovie = false;
    toggleMovie.innerHTML = "view All"
  }
})
popularShows(6);

popularMovies(6);


const menu = document.querySelector("#menu");
const mobileNav = document.querySelector("#mobileNav");
menu.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display == "none" ? "block" : "none";
});
