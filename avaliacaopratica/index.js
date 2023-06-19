const Autor = require('./models/Autor');
const Livro = require('./models/Livro');

const ExemploLivro = {
  Titulo_Liv: 'Revolução dos Bichos', 
  Genero_Liv: 'Sátira Política',
  DataPubli_Liv: '17/08/1945', 
  Autor_Liv: 'George Orwell'
};

const AtualizarLivro = {
  Titulo_Liv: 'Animal Farm', 
  Genero_Liv: 'Sátira Política',
  DataPubli_Liv: '17/08/1945', 
  Autor_Liv: 'George Orwell'
};

console.log('inserindo um novo livro');
Livro.inserirLivro(ExemploLivro);

console.log('Obtendo um livro pelo nome');
Livro.obterLivro('Revolução dos Bichos');

console.log('Atualizando o livro pelo nome');
Livro.atualizarLivro('Revolução dos Bichos', AtualizarLivro);

console.log('Obtendo o livro atualizado');
Livro.obterLivro('Animal Farm');

console.log('Excluindo o livro pelo nome');
Livro.excluirLivro('Animal Farm');
