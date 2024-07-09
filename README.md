# Projeto: WEB DEVELOPER CHALLENGE
👋 Bem-vinda(o) ao meu projeto! 

_Projeto desenvolvido para o Desafio Técnico da Buildbox

➡️ Acesse à aplicação por este link: [Projeto Web Developer Challenge](https://web-developer-challenge-ij1d.vercel.app/)

### ➤ Contexto
Este projeto consiste em uma aplicação front-end que exibe postagens através de um feed,
permitindo o usuário criar seu próprio post e também visualizar os já existentes.

---
### ➤ Instalação
Pré-requisitos:

 - Ter instalado em sua máquina o Node e o Yarn
 
 No terminal da sua máquina digite a seguinte sequência de comandos:

     git clone git@github.com:renatapnunes/web-developer-challenge.git
     cd web-developer-challenge
     yarn install
     yarn dev
Após isso, você pode clicar no link que aparece no terminal, ou acessar diretamente no seu browser:
`http://localhost:5173/`

---
### ➤ Aplicação

![Aplicação](https://github.com/renatapnunes/web-developer-challenge/blob/main/public/aplicacao.gif)

Na página principal da aplicação, que pode ser acessada pela rota "/" encontra-se um formulário, que permite que o usuário crie seus próprios posts.

Nele é possível fazer o upload de um arquivo .png, .jpeg ou .jpg, que servirá como imagem de perfil quando a postagem for publicada. Caso não tenha gostado, é possível excluir a imagem e selecionar uma nova, quantas vezes quiser.
Neste formulário o usuário também deve preencher seu nome e a mensagem que deseja postar, respeitando o limite de oitocentos caracteres. Só é possível realizar a publicação com estas informações preenchidas, pois antes disso, o botão "Publicar" fica desabilitado.
Existe também o botão "Descartar", que ao ser clicado, exclui a imagem selecionada e limpa os inputs de texto.
Após realizar a publicação, o post aparece imediatamente no feed, exibido logo abaixo do formulário.

![image](https://github.com/renatapnunes/web-developer-challenge/assets/82226758/30db2205-9b28-49ce-84b9-eabdbf1e5153)

O feed exibe as postagens em formato de lista, começando sempre pelo mais recente.
Cada post fica em uma espécie de card, exibindo a imagem do usuário, o texto e seu nome, indicando quem enviou aquele post.
A postagem conta também, com um botão que permite excluí-la.

![image](https://github.com/renatapnunes/web-developer-challenge/assets/82226758/6b2168a1-f311-4a54-b03f-63dfc80c74fb)

Inicialmente o feed exibe no máximo três postagens, e caso ainda existam outras, um botão "Ver mais" é exibido, permitindo o usuário clicar e carregar mais posts. Isso pode ser feito até que todas as postagens tenham sido visualizadas.

Também foi criada uma página, que é exibida sempre que o usuário tentar acessar uma rota inexistente. Nela é exibido um link que redireciona para a página principal do site.

![image](https://github.com/renatapnunes/web-developer-challenge/assets/82226758/5325e606-36d8-445a-b191-c5bd10a57105)


Toda à aplicação é responsiva.

![image](https://github.com/renatapnunes/web-developer-challenge/assets/82226758/2aabd2ee-6846-4e3a-9481-0f4da3144134) ![image](https://github.com/renatapnunes/web-developer-challenge/assets/82226758/c7f53072-2325-4276-83b4-e0d6e60d54db)



---
### ➤ Tech stacks e dependências
- Linguagem: **TypeScript**
- Biblioteca: **React.js**
- Gerenciador de estados: **Redux Toolkit**
- Estilização: **Styled Components**

Além disso:

- **vite.js**: build tool para desenvolvimento front-end;
- **react router dom**: gerenciamento de rotas;
-   **esLint**: detecção de problemas e padronização de estilo;
- **prettier**: formatação do código;
- **material-ui/icons**: biblioteca de ícones;

---
### ➤ Testes
- **Jest**
- **React Testing Library**


Comando para rodar os testes:

    yarn test

Comando para visualizar a cobertura dos testes:

    yarn coverage

![image](https://github.com/renatapnunes/web-developer-challenge/assets/82226758/44053470-ce4a-416f-9649-24a378d74312)


---
### ➤ Meus contatos
👉 [Linkedin](https://www.linkedin.com/in/renata-p-nunes/)

Estou aberta a feedbacks sobre este projeto.
Vou ficar muito feliz em aprender algo novo! 😄
