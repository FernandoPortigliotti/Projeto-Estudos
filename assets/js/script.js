const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const containe = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    containe.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    containe.classList.remove("sign-up-mode");
});