 document.querySelectorAll("[data-scroll]").forEach(botao => {
    botao.addEventListener("click", () => {
      const destino = document.querySelector(botao.dataset.scroll);
      if(destino) destino.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if(destino) {
      e.preventDefault(); // impede comportamento padrão
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("botao-cv").addEventListener("click", () => {
  window.open("/img/Profile.pdf", "_blank");
});