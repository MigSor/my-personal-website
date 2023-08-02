const animeForm = document.getElementById("animeForm");
const animeInput = document.getElementById("animeInput");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const smallMenu = document.querySelector(".nav-small-menu");
const searchResult = document.querySelector("#searchResult");
const mainCtn = document.querySelector("#main");
const darkBtn = document.querySelector("#dark-btn");
const contactCard = document.querySelector(".contact");

function fetchAnime(pokemonName = "Pokemon") {
  //clear previous results
  searchResult.innerHTML = "";
  //normal flow
  let imgLoading = document.createElement("img");
  imgLoading.style.width = "300px";
  imgLoading.src = "./images/whiteLoading.gif";
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
        a.target = "_blank";
        // console.log(item.url);
        img.src = item.images.jpg.image_url;
        img.alt = item.title;
        li.textContent = item.title;
        a.append(img);
        li.append(a);
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

menu.addEventListener("click", () => {
  smallMenu.classList.toggle("invi");
});
