const titulo = document.getElementById("titulo")

titulo.textContent = "Contador"

const mensagem = document.getElementById("mensagem")

mensagem.textContent = "Contagem regressiva!"

let contador1 = 0

const num = document.getElementById("contador")
num.textContent = contador1




const aum = document.getElementById("aumentar")
const dim = document.getElementById("diminuir")

aum.addEventListener("click", () => {
  contador1++
  num.textContent = contador1
})

dim.addEventListener("click", () => {
  contador1--
  num.textContent = contador1
})