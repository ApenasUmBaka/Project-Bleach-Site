
const buttonTrailer = document.querySelector(".content__buttonTrailer");

const modal = document.querySelector(".main__modal");

const close = document.querySelector(".modal__close");

const video = document.getElementById("video");

const buttonDetails = document.getElementById("btndetails__modal"); 

const home = document.getElementById("menu");

const modalDetails = document.querySelector(".details__modal")

const linkVideo = video.src;

function turnedModal() {
    modal.classList.toggle("--open");
}

function turnedDetails (){
    modalDetails.classList.toggle("--open");
}

buttonTrailer.addEventListener("click", () => {
    turnedModal();
    video.setAttribute("src", linkVideo); 
});

close.addEventListener("click", () => {
    turnedModal();
    video.setAttribute("src", "");
});

//Details Modal

buttonDetails.addEventListener("click", () =>{
    turnedDetails();
    document.getElementById("main__container").style.visibility = "hidden";
})

home.addEventListener("click", () => {
    modalDetails.classList.remove("--open");
    document.getElementById("main__container").style.visibility = "visible";
});