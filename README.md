# Galeria de Jogos — Programação Frontend I

Este repositório contém uma página web simples, desenvolvida com **HTML5, CSS e JavaScript puro**, que funciona como uma **galeria/carrossel de jogos** desenvolvidos por alunos da Unidade Curricular **Programação Frontend I**.

Cada item do carrossel apresenta uma imagem da tela inicial de um jogo (clone de Atari) e, ao clicar, o usuário é redirecionado para o **jogo hospedado externamente**, em uma nova aba.

---

## 🎯 Objetivo didático

- Servir como **vitrine coletiva** dos trabalhos finais da UC;
- Demonstrar uma aplicação web simples, organizada e extensível;
- Reforçar boas práticas básicas:
  - separação de responsabilidades (HTML / CSS / JS);
  - uso de dados estruturados em JavaScript;
  - links externos seguros (`noopener noreferrer`);
  - responsividade e acessibilidade básica.

---

## 🗂 Estrutura do projeto


- `index.html`  
  Estrutura da página e pontos de ancoragem do carrossel.

- `css/styles.css`  
  Estilos visuais, layout responsivo e tema do site.

- `js/app.js`  
  Lógica do carrossel e lista de jogos (dados).

- `assets/thumbs/`  
  Imagens (thumbnails) da tela inicial de cada jogo.

---

## 🎮 Cadastro dos jogos

Os jogos são definidos diretamente no arquivo:

```js
js/app.js
