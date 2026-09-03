# Portal Acadêmico DevOps 🚀

> Projeto desenvolvido durante a disciplina de DevOps para exemplificar práticas colaborativas de versionamento com Git, GitHub, branches temáticas, Pull Requests e publicação contínua via GitHub Pages.

---

## 🎯 Objetivo do Projeto
Evoluir um portal web acadêmico existente por meio de trabalho colaborativo em equipe. O foco principal consistiu em simular cenários reais de manutenção evolutiva: recepção de demandas de clientes, criação de Issues, desenvolvimento em branches isoladas, revisão cruzada de código via Pull Requests e resolução de conflitos.

---

## 🔗 Links Úteis
* **Página Publicada (GitHub Pages):** [https://eduardocutalo.github.io/portal-devops/](https://eduardocutalo.github.io/portal-devops/) 
* **Repositório do Projeto:** [https://github.com/EduardoCutalo/portal-devops](https://github.com/EduardoCutalo/portal-devops)

---

## 👥 Integrantes e Papéis da Equipe

| Integrante | Papel no Projeto | Responsabilidades Principais |
| :--- | :--- | :--- |
| **Eduardo Cutalo Moreira Borges**| Líder / Integrador | Gestão do repositório, aprovação de PRs, *merges* na `main` e publicação no GitHub Pages. |
| **Maria Eduarda Caetana da Silva** | Dev. Estrutura (HTML) | Reorganização das seções, campos de formulário, footer e tags semânticas. |
| **João Pedro Sousa Martinho** | Dev. Interface (CSS) | Estilização, responsividade, modo escuro, novos componentes e botões. |
| **Abner Gustavo Ribeiro Brito** | Dev. Funcionalidades (JS) | Integração do FullCalendar, validação de formulários, notificações Toast e alternância de temas. |
| **Beatriz Barros de Azevedo** | Revisor / Documentador | Revisão cruzada de Pull Requests, abertura de Issues e redação do README.md. |

---

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica da aplicação.
* **CSS3:** Estilização responsiva, CSS Grid, Flexbox e suporte a Modo Escuro via variáveis e classes.
* **JavaScript (ES6+):** Lógica interativa, manipulação de DOM, validações e persistência com `localStorage`.
* **FullCalendar API:** Biblioteca de calendário interativo integrada via CDN.
* **Git & GitHub:** Controle de versão distribuído, branches, Issues, Pull Requests e GitHub Pages.

---

## 🔄 Fluxo de Trabalho e Branches

A equipe adotou uma estratégia de ramificação por funcionalidade (*Feature Branch Workflow*):

* `main`: Branch principal e protegida que armazena a versão estável e integrada da aplicação publicada.
* `feature/estrutura`: Modificações na estrutura HTML.
* `feature/interface`: Implementações visuais e ajustes no CSS.
* `feature/funcionalidades`: Lógicas de interação em JS e componentes dinâmicos.
* `feature/documentacao`: Atualizações de documentação e manuais.
* `feature/ajustes-cliente`: Ajustes finos decorrentes da Rodada 2 de feedback.

---

## 📝 Resumo das Mudanças Implementadas

### 📌 Rodada 1 (Evolução v1.1 - 8 Requisitos)
1. **Estrutura (HTML):**
   * Adicionados novos campos no formulário de contato: *Sobrenome*, *Matrícula* e botão para *Anexo de Documentos*.
2. **Interface (CSS):**
   * Reorganização do container de serviços em uma grade de cards.
   * Implementação completa de estilos para o **Modo Escuro (Dark Mode)** e inclusão do botão tema flutuante.
3. **Funcionalidades (JS):**
   * Integração da biblioteca FullCalendar e renderização da lista de próximos eventos.
   * Validação de campos obrigatórios do formulário com notificação visual via componente **Toast**.
4. **Usabilidade / Conteúdo:**
   * Adicionado suporte a anexos com validação de extensão e limite de tamanho de 5MB.
5. **Documentação:**
   * Estruturação inicial da documentação do repositório.


## 📊 Histórico e Rastreabilidade
Para examinar como a equipe colaborou, revise as seguintes seções no GitHub:
1. **Issues:** Registro formal dos requisitos iniciais e do feedback do cliente.
2. **Pull Requests:** Discussões, comentários de revisão e aprovações de código.
3. **Commits:** Histórico detalhado da evolução do código com mensagens descritivas.
