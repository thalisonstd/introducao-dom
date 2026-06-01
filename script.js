const titulo = document.getElementById("titulo")

titulo.textContent = "Olá Mundo"

const mensagem = document.getElementById("mensagem")

mensagem.textContent = "Minha primeira modificação!"

const btn = document.getElementById("btn")


btn.addEventListener("click", () => {
  titulo.style.color = "red"
  if (titulo.textContent === "Olá Thalison") {
    titulo.textContent = "Você clicou no botão!"
  } else {
    titulo.textContent = "Olá Thalison"
  }

})