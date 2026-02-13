let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let size = 1;

noBtn.addEventListener("click", () => {
    size +=0.2;
    yesBtn.style.transform = `scale(${size})`;
});

yesBtn.addEventListener("click", () => {
    alert("I knew you'd say yes 🫂❤️‍🔥");
})