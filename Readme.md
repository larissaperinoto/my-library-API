Desenvolvido por [Larissa Perinoto](www.linkedin.com/in/larissaperinoto), © 2022.# My Library API 📚

A API My Library foi construída para ser o back-end de uma aplicação que possuí uma base de dados de livros cadastrados e permite ao usuário, após a realização do login, cadastrar novos livros na base de dados, adicionar um livro na sua lista de leituras realizadas ou na sua lista de desejos.

## Rotas da aplicação

A aplicação possuí algumas rotas cadastradas

<details>

#### POST /login
  Nesta rota o usuário deve fornecer suas credenciais para realizar o login na aplicação.
<details>
  <summary>Exemplo de body da requisição</summary>

            {
              "email": "mariadasilva@gmail.com",
              "password": "123456"
            }


</details>
        
    
#### GET /books
  Retorna todos os livros cadastrados no banco de dados.

#### POST /books
  Permite ao usuário cadastrar um novo livro na base de dados, uma vez que este já não esteja cadastrado.
<details>
  <summary>Exemplo de body da requisição</summary>

          {
            "title": "A Menina que Roubava Livros",
            "author": "Markus Zusak",
            "release": "2005-09-12"
          }


</details>
 
#### GET /wishes/:id
  Retorna a lista de desejos do usuário referênte ao id.
  
#### POST /wishes:id
  Permite ao usuário cadastrar novos livros na sua lista de desejos, se os livros existirem na base de dados e estes já não estiverem cadastrados na lista de desejos deste usuário.

<details>
  <summary>Exemplo de body da requisição</summary>
      [
        {
          "bookId": 3
        },
        {
          "bookId": 2
        }
      ]


</details>

#### GET /readings/:id
  Retorna a lista de livros já finalizados pelo usuário referênte ao id.
  
#### POST /readings:id
  Permite ao usuário cadastrar um novo livro na sua lista de livros finalizados, se o livo existir na base de dados e este já não estiver cadastrado nesta lista.

<details>
  <summary>Exemplo de body da requisição</summary>

          {
            "bookId": 3
            "finishedAt": "2022-01-12"
          }


</details>

</details>

<details>
  <summary><strong>Diagrama de entidade relacionamento</strong></summary>
  
  ![Captura de tela de 2022-12-07 16-39-54](https://user-images.githubusercontent.com/98956659/206279930-69ab549f-57ae-4199-a2f3-b00b75c54975.png)

</details>

## Validações

Nossa aplicação precisa que algumas validações sejam feitas, precisamos garantir que as informações enviadas pelo usuário estejam adequadas ao chegarem na camada controler.
 - Utilize a ferramenta [Joi](https://joi.dev/api/) para validar o body das requisições feitas pelo usuário.
 - A ferramenta já está instalada, basta apenas fazer a importação para utiliza-la.
 - Se atente aos tipos que os dados devem ter e não permita que o usuário faça requisições com campos faltantes.
 - Envie o mensagens de erro personalizadas no estilo "O campo X é obrigatório" ou "O campo X deve ser do tipo number".
 - Utilize o status `400` para as mensagens de erro.
 
## Exercitando

 Para realizar o exercício inicie fazendo o clone deste repositório com o comando abaixo.
 
        git clone git@github.com:larissaperinoto/my-library-API.git
    
<details>
  <summary><strong>Executando a aplicação com o Docker</strong></summary>
  
  <br>
É necessário que você tenha o Docker instalado na sua máquina!

Após o clone do repositório, suba os containers do node e do banco MySQL com o comando abaixo.

          docker-compose up -d

Agora você possuí dois containers: `node_container`e o `db_container`. Entre no terminal do container do node.

        docker exec -it node_container bash

Uma vez no terminal, faça a instalação das dependências do projeto.

        npm install

Crie o banco de dados com o sequelize usando o script `build`presente no **package.json**. Este script irá criar o banco, rodar as migrations e as seeders presentes na aplicação.

        npm run build

Inicie o servidos com o script `start`

        npm start
 
</details>
 
**Obs.:** uma sugestão de como realizar as validações pode ser encontrada na branch `solved-exercise`. Execute o comando abaixo no seu terminal local.
  
       git checkout solved-exercise

---

Desenvolvido por [Larissa Perinoto](www.linkedin.com/in/larissaperinoto), © 2022.
