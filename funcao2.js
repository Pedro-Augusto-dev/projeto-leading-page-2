var setadireita = window.document.getElementById("seta-direita")
var setaesquerda = window.document.getElementById("seta-esquerda")
var Bruna = window.document.getElementById("bruna")
var leonaro = window.document.getElementById("leonarde")
var samantha = window.document.getElementById("samantha")


function Right() {
    setaesquerda.style = "display:flex";
    setadireita.style = "display:none";
    Bruna.style = "display:none";
    samantha.style ="display:flex"
}

function Left(){
    setaesquerda.style = "display:none";
    setadireita.style = "display:flex";
    Bruna.style = "display:flex";
    samantha.style ="display:none"
}