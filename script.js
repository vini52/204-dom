const yudi = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("main img");
const chico = document.querySelector("main aside img");
const msgChicoH1 = document.querySelector("main aside h1");

function abrirMenu(){
    // if(!lista.classList.contains("ativo")){
    //     lista.classList.add("ativo");
    // }
    // else{
    //     lista.classList.remove("ativo");
    // }
    lista.classList.toggle("ativo");
}
function rodarRoleta(){
    roleta.classList.toggle("rodarRoleta");
}
function msgChico(){
    chico.src = "img/chico.png";
    msgChicoH1.innerHTML = "Você é um fracassado!";
}

yudi.onclick = abrirMenu;
roleta.onclick = rodarRoleta;
chico.onclick = msgChico;