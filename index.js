var setaDireita = window.document.getElementById("seta_direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta_esquerda")


function RolarParaDireita() {
    bruna.style = "display:flex"
    leonardo.style = "display:none"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:60px"
}

function RolarParaEsquerda() {
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}