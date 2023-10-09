# Desafio de cadastro de produtos

Repositório criado para desenvolvimento do desafio proposto pela empresa OAK Tecnologia para a vaga de estágio.

## O desafio

O desafio consiste em criar uma aplicação em qualquer linguagem de programação que seja capaz de gerenciar o cadastro de produtos. Os requisitos são os seguintes:

`- 𝐂𝐚𝐝𝐚𝐬𝐭𝐫𝐨:`

  - Formulário com os campos abaixo:

    - Nome do produto - campo de texto;
    - Descrição do produto - campo de texto;
    - Valor do produto - campo de valor;
    - Disponível para venda - campo com 2 opções: sim / não.

`- 𝐋𝐢𝐬𝐭𝐚𝐠𝐞𝐦:`

  - Colunas da listagem: nome, valor;
  - Ordenação por valor do menor para o maior;
  - Quando cadastrar um novo produto é para abrir a listagem automaticamente;
  - Deve existir um botão para cadastrar um novo produto a partir da listagem.

## A abordagem escolhida

Para enfrentar este desafio, optei por criar uma aplicação que utiliza um banco de dados MySQL. O backend é desenvolvido em Java, aproveitando o ecossistema Spring, e o frontend é construído com React, estilizado usando Bootstrap. Cada serviço da aplicação é isolado em seu próprio container.

## Como rodar a aplicação

Devido à escolha de usar o Docker para essa aplicação, siga estas etapas:

`1 -` Clone o repositório para sua máquina local (usando SSH no exemplo abaixo):

```
git@github.com:AndrewML94/desafio-oak-tecnologia.git
```

`2 -` Navegue até o diretório do projeto:

```
cd desafio-oak-tecnologia
```

`3 -` Execute o seguinte comando no terminal:

```
docker-compose up -d --build
```

Certifique-se de que seu terminal esteja localizado no mesmo diretório em que o arquivo `docker-compose.yml` está localizado e de que o Docker Compose esteja instalado e configurado corretamente em seu sistema.

Essas etapas devem iniciar a aplicação com todos os serviços configurados e prontos para uso. Certifique-se de que o Docker Compose esteja instalado e funcionando corretamente para que a aplicação seja implantada com sucesso.
