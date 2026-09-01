document.addEventListener("DOMContentLoaded", () => {
  const botaoDestaque = document.querySelector("#botaoDestaque");
  const botaoTema = document.querySelector("#botaoTema");
  const servicos = document.querySelector("#servicos");
  const formContato = document.querySelector("#formContato");
  const resposta = document.querySelector("#resposta");
  const arquivoAnexo = document.querySelector("#arquivoAnexo");
  const botaoAnexar = document.querySelector("#botaoAnexar");


  if (botaoDestaque && servicos) {
    botaoDestaque.addEventListener("click", () => {
      servicos.scrollIntoView({ behavior: "smooth" });
    });
  }


  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        botaoTema.textContent = "Modo Claro";
      } else {
        botaoTema.textContent = "Modo Escuro";
      }
    });
  }


  if (botaoAnexar && arquivoAnexo) {
    botaoAnexar.addEventListener("click", () => {
      arquivoAnexo.click();
    });
  }


  if (formContato) {
    formContato.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const nome = document.querySelector("#nome").value;

      if (arquivoAnexo && arquivoAnexo.files.length > 0) {
        const nomeArquivo = arquivoAnexo.files[0].name;
        resposta.textContent = `Obrigado pelo contato, ${nome}! Seu arquivo ("${nomeArquivo}") foi anexado com sucesso.`;
      } else {
        resposta.textContent = `Obrigado pelo contato, ${nome}!`;
      }
    });
  }
});
