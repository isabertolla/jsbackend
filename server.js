import express from 'express';
const app = express();
const PORT = 3043;

app.get('/', (req, res) => {
    res.json({ mensagem: "Portal AutoExpress"});
});

app.get('/sobre', (req, res) => {
    res.send('Garantias e localização do show-room');
});

app.get('/carros', (req, res) => {
    const carros = [
        { id: 1, modelo: 'Fiat Mobi', ano: 2021, valor: 50.000 },
        { id: 2, modelo: 'Volkswagen Gol', ano: 2021, valor: 53.000 },
        { id: 3, modelo: 'Chevrolet Onix', ano: 2020, valor: 62.000 } 
    ];
    res.json(carros) 
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});