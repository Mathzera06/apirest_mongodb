import express from "express";
import db from "./configDB/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("erro", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

//Middleware
// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

//Usado para que o express entenda que a requisição será em JSON e consiga interpretar e consiga transformar
// em um objeto (MÉTODOS POST E PUT)

// const livros = [
//     {
//         id: 1,
//         "titulo": "Senhor dos Aneis"
//     },
//     {
//         id:2,
//         "titulo": "Hobbit"
//     }
// ];


// app.get('/', (req, res) => {
//     res.status(200);
//     res.send('Curso de NodeJS');
// });

// app.get('/livros/:id', (req, res) => {
//     var index = buscaLivro(req.params.id);
//     res.status(200);
//     res.json(livros[index]);
// });

// app.get('/livros', async (req, res) => {
//     try{
//         const livrosResultado = await livros.find();
//         res.status(200).json(livrosResultado)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('Livro cadastrado');
// });

// app.put('/livros/:id', (req, res) => {
//     var index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.status(200);
//     res.json(livros);
// });

// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params;
//     let index = buscaLivro(id);
//     livros.splice(index, 1);
//     res.status(200);
//     res.send('Livro excluido com sucesso')
// });

export default app;