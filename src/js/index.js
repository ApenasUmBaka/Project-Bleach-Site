
const buttonTrailer = document.querySelector(".content__buttonTrailer");

const modal = document.querySelector(".main__modal");

const close = document.querySelector(".modal__close");

const video = document.getElementById("video");

const linkVideo = video.src;

function turnedModal() {
    modal.classList.toggle("--open");
}

buttonTrailer.addEventListener("click", () => {
    turnedModal();
    video.setAttribute("src", linkVideo); 
});

close.addEventListener("click", () => {
    turnedModal();
    video.setAttribute("src", "");
});


