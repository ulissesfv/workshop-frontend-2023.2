const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 700}px)`;
}

setInterval(carrossel, 1800);

fetch("https://swapi.dev/api/people/4/")
    .then((r) => {
        return r.json();
    })
    .then((corpo) => {
        document.getElementById("nome").innerHTML = corpo.name;
        document.getElementById("mass").innerHTML = corpo.mass;
        document.getElementById("hairColor").innerHTML = corpo.hair_color;
        document.getElementById("skinColor").innerHTML = corpo.skin_color;
        document.getElementById("eyeColor").innerHTML = corpo.eye_color;
        document.getElementById("birthYear").innerHTML = corpo.birth_year;
        document.getElementById("gender").innerHTML = corpo.gender;
    });
