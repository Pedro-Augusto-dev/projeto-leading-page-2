const arrowLeft = document.querySelector("#seta-esquerda");
const NextArrow = document.querySelector("#seta-direita");

function toggleSlide() {
    let imgEl = document.querySelector('#seta-direita');
    imgEl.style.display = "none";

    let imgEl2 = document.querySelector("#seta-esquerda");
    imgEl2.style.display = "flex";

    let imgsEl = document.querySelector("#bruna");
    let imgsEL2 = document.querySelector("#samantha");
    imgsEl.style.display = "none";
    imgsEL2.style.display = "flex";

}

function toggleSlide2() {
    let imgEl1 = document.querySelector('#seta-esquerda');
    let imgEl2 = document.querySelector('#seta-direita');
    let imgsEl1 = document.querySelector('#bruna');
    let imgsEl2 = document.querySelector('#samantha');

    imgEl1.style.display = "none"
    imgEl2.style.display = "flex"
    imgsEl1.style.display = "flex"
    imgsEl2.style.display = "none"
}

NextArrow.addEventListener("click", toggleSlide)
arrowLeft.addEventListener("click", toggleSlide2)