let animeForm = document.getElementById("animeForm");
let animeInput = document.getElementById("animeInput");
let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let searchResult = document.querySelector("#searchResult");

function fetchAnime(pokemonName = "Pokemon") {
  let imgLoading = document.createElement("img");
  imgLoading.src = "./images/loading.gif";
  searchResult.append(imgLoading);
  fetch(`https://api.jikan.moe/v4/anime?q=${pokemonName}`)
    .then((response) => response.json())
    .then((results) => {
      searchResult.removeChild(imgLoading);
      // console.log(results.data);
      let animeList = results.data;

      for (let item of animeList) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let a = document.createElement("a");
        a.href = item.url;
        a.alt = item.title;
        // console.log(item.url);
        img.src = item.images.jpg.image_url;
        li.textContent = item.title;
        li.append(img);
        searchResult.append(li);
        // console.log(item.title);
        // console.log(item.images.jpg.image_url);
      }
    });
}

animeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  fetchAnime(animeInput.value);
  animeInput.value = "";
});

window.addEventListener("resize", function (event) {
  let newWidth = window.innerWidth;
  if (newWidth <= 900) {
    nav.classList.add("invi");
    menu.classList.remove("invi");
  } else {
    nav.classList.remove("invi");
    menu.classList.add("invi");
  }
});

menu.addEventListener("click", () => {
  nav.classList.toggle("nav-small");
});
