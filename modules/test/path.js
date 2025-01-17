const path = require('path'); // Import the path module

// Apenas o nome do arquivo atual
console.log(path.basename(__filename)); // path.js

// Apenas o diretório do arquivo atual
console.log(path.dirname(__filename)); // /Users/username/Desktop/nodejs-examples

// Extensão do arquivo atual
console.log(path.extname(__filename)); // .js

// Objeto com informações do arquivo atual
console.log(path.parse(__filename)); // { root: '/', dir: '/Users/username/Desktop/nodejs-examples', base: 'path.js', ext: '.js', name: 'path' }

// Concatenar caminhos
console.log(path.join(__dirname, 'test', 'hello.html')); // /Users/username/Desktop/nodejs-examples/test/hello.html

// Caminho absoluto
console.log(path.resolve(__dirname, 'test', 'hello.html')); // /Users/username/Desktop/nodejs-examples/test/hello.html









