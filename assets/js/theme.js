// assets/js/theme.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("O script de tema foi carregado!"); // Teste 1

  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Verifica se o botão realmente existe
  if (!toggleButton) {
    console.error(
      "ERRO: O botão com id 'theme-toggle' não foi encontrado no HTML.",
    );
    return; // Para o código aqui se não achar o botão
  }

  // 1. Carregar tema salvo
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    console.log("Tema escuro carregado da memória.");
  }

  // 2. Evento de clique
  toggleButton.addEventListener("click", () => {
    console.log("Botão clicado!"); // Teste 2
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
