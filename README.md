# 📚 Equilibrium API

Bem-vindo ao **Equilibrium API**, um projeto desenvolvido como parte do Projeto Final do módulo 4 do curso **Programadores do Amanhã**. A **Equilibrium API** visa contribuir e ser uma plataforma de apoio para tratamento da saúde mental, oferecendo interações e aplicações que visem ajudar as pessoas que estejam necessitando de um app, em que ele seja parte essencial, para manutenção de um dia a dia mais saudável durante essa sua caminhada

## 🖼️ Visão Geral

O projeto foi desenvolvido utilizando **JavaScript**, **Node.js**, e **Express**, com testes de rotas realizados através do **Postman**. A API oferece as seguintes funcionalidades:

- **Usuários:**
  - Listar todos os usuários.
  - Visualizar um usuário por ID.
  - Atualizar informações de um usuário.
  - Deletar um usuário.

- **Dicas:**
  - Listar todas as dicas .
  - Visualizar uma dica por ID.
  - Atualizar informações de uma dica.
  - Deletar uma dica.

 - **Pesquisa de Satisfação:**
   - Listar todas as satifações.
   - Visualizar uma satisfação por ID.
   - Atualizar informações de uma satisfação.
   - Deletar uma satisfação.

- **Livros:**
  - Listar todos os livros .
  - Visualizar um livro por ID.
  - Atualizar informações de um livro.
  - Deletar um livro.

- **Notas Diárias:**
  - Listar todas as notas .
  - Visualizar uma nota por ID.
  - Atualizar informações de uma nota.
  - Deletar uma nota.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criar APIs de forma simples e rápida.
- **MongoDB**: Banco de dados utilizado para armazenar informações sobre os mangás e autores.
- **Postman**: Ferramenta para teste de APIs.

## 🚀 Como Rodar o Projeto Localmente

Siga este passo a passo para configurar e rodar o projeto na sua máquina.

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (geralmente instalado junto com o Node.js)
- **Postman** (opcional, para testes)

### Passo 1: Clonar o Repositório

```
git clone https://github.com/maeldsoncavalcante100/projeto-final-m4-pda.git

cd projeto-final-m4-pda
```

### Passo 2: Instale as Dependências

```
npm install
```

### Passo 4: Iniciar o Servidor
```
npm run dev
```
O servidor estará rodando em http://localhost:3001

### Passo 5: Testar as Rotas

- **Usuários:**
  - GET /usuarios - Listar todos os usuarios.
  - GET /usuarios/:id - Obter usuário por ID
  - POST /usuario - Cria um novo usuário
  - PUT /usuarios/:id  - Atualizar usuário por ID
  - DELETE /usuarios/:id - Deletar usuáro por ID

- **Dicas:**
  - GET /dica - Listar todas as dicas
  - GET /dicas/:id - Obter dicas por ID
  - POST /dicas - Criar uma nova dica
  - PUT /dicas/:id - Atualizar uma dica
  - DELETE /dicas/:id - Deletar dica por ID

- **Satisfação:**
  - GET /satisfactions - Listar todas as satisfações
  - GET /satisfactions/:id - Obter satisfação por ID
  - POST /satisfactions - Criar uma nova satisfação
  - PUT /satisfactions/:id - Atualizar uma satisfação
  - DELETE /satisfactions/:id - Deletar satisfação por ID

- **Livros:**
  - GET /livros - Listar todos os livros
  - GET /livros/:id - Obter livro por ID
  - POST /livro - Criar um novo livro
  - PUT /livros/:id - Atualizar um livro
  - DELETE /livro/:id - Deletar um livro por ID

- **Notas:**
  - GET /api/diary/ - Listar todos as notas
  - GET /api/diary/:id - Obter nota por ID
  - POST /api/diary/ - Criar uma nova nota
  - PUT /api/diary/:id - Atualizar uma nota
  - DELETE /api/diary/:id - Deletar uma nota por ID



### 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.