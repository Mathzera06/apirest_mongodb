import app from './src/app.js';

const port = process.env.PORT || 3000; // Ou será escolhido uma porta através da const (Sendo não escolhida pelo desenvolvedor || Ou
// a porta 3000 que foi setada)

app.listen(port, () => {
    console.log("Servidor rodando na porta 3000")
});