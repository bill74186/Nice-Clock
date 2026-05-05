const formatBtn = document.querySelector(".btn");
const lightBtn = document.getElementById("light");
const hideBtn = document.getElementById("hide");

const gh = document.querySelector(".gh");
const set = document.querySelector(".set");
const menu = document.querySelector("menu");

formatBtn.addEventListener("click", () => {
    formatBtn.classList.toggle("active");
    formatBtn.dataset.f = formatBtn.dataset.f == 12 ? 24 : 12;
});

lightBtn.addEventListener("click", () => {
    lightBtn.classList.toggle("active");
    document.body.classList.toggle("light");
});

hideBtn.addEventListener("click", () => {
    hideBtn.classList.toggle("active");
    gh.classList.toggle("hide");
    set.classList.toggle("hide");
});

function clock() {
    const t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();
    let ap = "AM";

    if (h >= 12) ap = "PM";
    if (formatBtn.dataset.f == 12) h = h % 12 || 12;

    h = h.toString().padStart(2, "0");
    m = m.toString().padStart(2, "0");
    s = s.toString().padStart(2, "0");

    document.querySelector(".h").textContent = h;
    document.querySelector(".m").textContent = m;
    document.querySelector(".ap").textContent = ap;
    document.querySelector(".s").textContent = s;
}

setInterval(clock, 1000);
clock();

const today = new Date();
document.getElementById("y").textContent = today.getFullYear();
document.getElementById("mo").textContent = today.toLocaleString("default", { month: "short" });
document.getElementById("da").textContent = today.getDate();
document.getElementById("w").textContent = today.toLocaleString("default", { weekday: "long" });

set.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".set, .item")) {
        menu.classList.remove("active");
    }
});
