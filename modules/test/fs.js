const fs = require('fs');
const path = require('path');

// Criar uma pasta

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err; {
    return console.log('Err: ', err);
}
  console.log('Pasta criada com sucesso!');
});Node

