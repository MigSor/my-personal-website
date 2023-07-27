const animeForm = document.getElementById("animeForm");
const animeInput = document.getElementById("animeInput");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const searchResult = document.querySelector("#searchResult");
const mainCtn = document.querySelector("#main");
const darkBtn = document.querySelector("#dark-btn");
const contactCard = document.querySelector(".contact");

function fetchAnime(pokemonName = "Pokemon") {
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
  console.log(menu.classList.contains("invi"));
});

// Dark mode???
darkBtn.addEventListener("click", () => {
  mainCtn.classList.toggle("dark");
  mainCtn.classList.toggle("light");
  if (darkBtn.textContent === "DARK") {
    darkBtn.textContent = "LIGHT";
    darkBtn.classList.toggle("dark-btn");
    darkBtn.classList.toggle("light-btn");
  } else {
    darkBtn.textContent = "DARK";
    darkBtn.classList.toggle("dark-btn");
    darkBtn.classList.toggle("light-btn");
  }
});
