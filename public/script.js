
const solarSystem = document.querySelector(".solar-system");
const popup = document.getElementById("planetPopup");
const infoBox = document.querySelector(".info");
const nameBox = document.getElementById("planetName");
const imageBox = document.getElementById("planetImage");

planets.forEach(p => {

let orbit = document.createElement("div");
orbit.className = "orbit";
orbit.style.width = p.orbit + "px";
orbit.style.height = p.orbit + "px";
orbit.style.marginLeft = -p.orbit/2 + "px";
orbit.style.marginTop = -p.orbit/2 + "px";
orbit.style.animationDuration = p.speed + "s";

let planet = document.createElement("div");
planet.className = "planet";
planet.style.width = p.size + "px";
planet.style.height = p.size + "px";
planet.style.background = "white";

planet.onclick = () => showPlanet(p);

orbit.appendChild(planet);
solarSystem.appendChild(orbit);

});

function showPlanet(p) {
popup.classList.remove("hidden");
nameBox.innerText = p.name;
imageBox.src = p.image;

infoBox.innerHTML = `
<p><strong>Mass:</strong> ${p.mass}</p>
<p><strong>Gravity:</strong> ${p.gravity}</p>
<p><strong>Temperature:</strong> ${p.temperature}</p>
<p><strong>Atmosphere:</strong> ${p.atmosphere}</p>
<p><strong>Distance:</strong> ${p.distance}</p>
<p><strong>Human Survival Chance:</strong> ${p.survival}%</p>
`;
}

document.getElementById("closePopup").onclick = () => {
popup.classList.add("hidden");
};

document.getElementById("themeToggle").onclick = () => {
document.body.classList.toggle("light");
};

// Stars
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 300; i++) {
stars.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
r: Math.random() * 2,
s: Math.random() * 0.5
});
}

function animateStars() {
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";
stars.forEach(star=>{
ctx.beginPath();
ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);
ctx.fill();
star.y+=star.s;
if(star.y>canvas.height) star.y=0;
});
requestAnimationFrame(animateStars);
}
animateStars();
