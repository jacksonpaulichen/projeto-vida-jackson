const botoes = document.querySelectorAll("botao");
const textox = docuent. querySelectorAll(".aba conteudo")

for (let i=0; i<botoes.length; i++) {
botoes[i].onclick = function() {

for (let j=0; j<botoes.length; j++) {
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
}

botoes[i].classList.add("ativo");
textos[j].classList.add("ativo");
}
}

const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("2024-07-05T00:00:00")

contadores [0].textContent = calularTempo (tempoObjetivo1)

function calcula (tempoObjetivo1){
    const tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = math.floor (tempoFinal/1000);
    let minutos = math.floor(segundos/60);
    let horas = math.floor(minutos/60);
    let dias = math.floor (horas/24);
    
    segundos %= 60
    minutos%= 60
    horas%= 24




}