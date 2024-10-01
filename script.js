let pular = document.getElementById("pular");
let pergunta = document.getElementById("pergunta");
let sim = document.getElementById("sim");
let nao = document.getElementById("nao");
let index_pergunta = 0

pular.addEventListener("click", resposta_pular);
sim.addEventListener("click", resposta_sim);
nao.addEventListener("click", resposta_nao);

const perguntas = [
  "Você gosta da música \"Minha História\" do youtuber Enaldinho?",
  "Dois trens, Trem A e Trem B, partem simultaneamente da Estação A e da Estação B. A Estação A e a Estação B estão a 252,5 milhas de distância uma da outra. O Trem A está se movendo a 124,7 mph em direção à Estação B, e o Trem B está se movendo a 253,5 mph em direção à Estação A. Eu creio que se ambos os trens partiram às 10:00 da manhã e agora são 10:08, será 32.049 minutos quando ambos os trens passem um pelo outro. Você acha que estou certo?",
  "A bankai da Rukia é a Hakka no Togame?",
  "O nome do Trenchbleeder que aparece que aparece na parte final de Pressure é Rose?",
  "Você já contou pro seus pais que tu é gay?",
  "Esse foi o quiz."
]

const sims = [
    "sim1",
    "Eu também, sei que você tem cultura.",
    "Errou, seu burro.",
    "Você tem o selo verificado de otaku fudido.",
    "Errou seu tchola, o nome dela é Lucy.",
    "Boa mano, eles também tem que saber."
]

const naos = [
  "nao1",
  "O seu gosto musical deve ser extremamente péssimo.",
  "E você está certo, os trens passaram um pelo outro em 32.058 minutos.",
  "Não assistiu Bleach? Herege.",
  "Correto nerdola, o nome dela é Lucy.",
  "Tem que contar mano, não esconda isso deles."
]

function resposta_pular() {
  pergunta.innerText = perguntas[index_pergunta % perguntas.length];
  index_pergunta++
  sim.classList.remove("hidden")
  nao.classList.remove("hidden")
  pular.classList.add("hidden")
  if (pergunta.innerText == "Esse foi o quiz.") {
    sim.classList.add("hidden")
    nao.classList.add("hidden")
    pular.classList.add("hidden")
  }
}

function resposta_sim(){
  pergunta.innerText = sims[index_pergunta % sims.length];
  sim.classList.add("hidden")
  nao.classList.add("hidden")
  pular.classList.remove("hidden")

}
function resposta_nao(){
    pergunta.innerText = naos[index_pergunta % naos.length];
    sim.classList.add("hidden")
    nao.classList.add("hidden")
    pular.classList.remove("hidden")
}