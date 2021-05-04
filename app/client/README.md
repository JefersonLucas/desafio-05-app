# Desafio do Módulo 05

## Objetivos

Exercitar os seguintes conceitos trabalhados nos Módulos 01 a 04:

- [x] Implementação de algoritmos com **JavaScript**.
- [x] Criação de APIs com **Node.js** e **Express**.
- [x] Criação de componentes com **React** com _Class Components_ e/ou _Functional Components_.
- [x] Persistência de dados com **MongoDB** e **Mongoose**.
- [x] Implantação de aplicações web com **Heroku**.

## Enunciado

Criar uma aplicação web para **Controle Financeiro Pessoal** com **MongoDB** + **Node.js** + **React** e implantação no **Heroku**.

## Atividades

Os alunos deverão desempenhar as seguintes atividades:

### Etapa 03 – Implementação do Front End com React:

1. O Front End deve ser implementado a partir da pasta "`client/`". Lá se encontram os mesmos arquivos do "`_react-projeto-base/`", que disponibilizei durante o Módulo 03.

2. Fica a critério do aluno a definição da **interface**. As telas a seguir são somente uma sugestão de interface que foi implementada pelo professor.

3. Acesse a pasta `client/` e digite `yarn` para instalar as dependências do projeto que são, além dos pacotes relacionados ao `create-react-app`:

- Pacote **materialize-css**.
- Pacote **axios**.
- Pacote **react-modal**.

O arquivo `package.json` também foi modificado pelo professor, conforme imagem abaixo. Isso é importante para os casos onde tanto o Back End quanto o Front End estão hospedados no mesmo servidor, que é o caso deste projeto. Mais informações podem ser encontradas [aqui](https://create-react-app.dev/docs/proxying-api-requests-in-development/).

![Example 11](./images/example-11.jpg)

5. A implementação é <u>**obrigatória**</u> para as seguintes **funcionalidades** no Front End, pois elas serão testadas no questionário de entrega do projeto do Desafio Final.

- **Navegação** de transações **agrupadas por mês/ano** (semelhante às rotas do Back End).
- **Filtro simples** a partir da **descrição da transação**. <u>**Acentos e caracteres especiais devem ser considerados no filtro**</u>.
- Resumo com a **quantidade de lançamentos, somatório** de valores de **receita**, **despesa** e **saldo agrupados** por **mês/ano**.

6. Algumas telas **sugeridas** para a aplicação Front End:

![Example 12](./images/example-12.jpg)

<p align="center">
  Estado inicial da tela (mês corrente).
</p>

![Example 13](./images/example-13.jpg)

<p align="center">
  Seleção de períodos através de <code>select</code>.
</p>

![Example 14](./images/example-14.jpg)

<p align="center">
  Edição de lançamentos, que <b>não</b> permite a troca do tipo (receita/despesa).
</p>

![Example 15](./images/example-15.jpg)

<p align="center">
  Inclusão de lançamentos.
</p>

![Example 16](./images/example-16.jpg)

<p align="center">
  Filtro de lançamentos a partir da descrição.
</p>

7. A exclusão de lançamentos pode ser implementada através do simples clique no ícone que representa a "Lixeira", conforme imagem acima.

8. **Dica**: na minha implementação utilizei a tag `<select>` nos períodos, que no React tem o funcionamento um pouco **diferente do HTML padrão**. Mais detalhes podem ser vistos [aqui](https://reactjs.org/docs/forms.html#the-select-tag). Persistindo dúvidas, não deixem de perguntar no fórum. Demonstrarei, na aula interativa, como ativar o JavaScript do Materialize. Isso pode ser necessário caso o aluno queira o comportamento padrão da tag `<select>`. Como contorno, basta acrescentar a classe **browser-default** que o Materialize irá ignorar a tag.

9. Fim da Etapa 03!

### Considerações importantes

- Desta vez, o material mais importante é a documentação. Leia-a com bastante atenção.
- Há um pequeno problema nos dados de lançamentos - há diversos lançamentos cuja descrição e categoria são "**Receita XXXX**" mas que na verdade são **despesas**. Sim, foi falha no meu programa de geração dos dados aleaórios. Já peço desculpas de antemão. Entretanto, isso **não vai prejudicar as questões do Desafio Final**. É perfeitamente possível, na vida real, cadastrar uma receita com a descrição "Almoço" e uma despesa com a descrição "Salário", por exemplo. O que vale aqui, no fim das contas, é o atributo type, que pode ser '-' (despesa) ou '+' (receita). Esse é o atributo que deve servir de referência nos cálculos de total de despesas e receita por mês, combinado?
- Boa parte do backend já está pronta, como vocês podem ver no material de apoio.
- Implementem primeiramente o backend e testem as rotas com o Insomnia. Boa parte do backend já está feita.
- Em seguida, implementem o Front End sem se preocupar tanto com a interface no primeiro momento. Foquem nos dados corretos e filtrados por período, CRUD e totalizadores.
- Fazendo as duas etapas acima, vocês já estão aptos a responderem o questionário final.
- Após responderem o Questionário, façam com mais calma as melhorias de interface e implantação no Heroku. Aproveitem para adicionar o projeto ao portfólio pessoal de vocês.
- Caso algum problema surja durante o perído do Desafio Final, aviso por aqui. Bons estudos!
