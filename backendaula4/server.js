//1. Importando o módulo nativo HTTP do Node.js
const http = require('http');
//2. Definir a porta do servidor
const PORTA = 3002;
//3.Criando o servidor (Garçom)
const server = http.createServer((req, res) => {
    //Exibir no terminal a rota solicitada em tempo real
    console.log(`[PEDIDO RECEBIDO] Método: ${req.method} | Rota: ${req.url}`);

    //ROTA 1: Página inicial(retorna HTML)
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`
        <h1 style="color: #15e6c3; font-family:sans-serif;"> Bem-vindo á Lanchonete Digital Node.js!</h1>
        <p style="font-family:sans-serif;">Servidor nativo rodando com sucesso no VS CODE!</p>
        <ul>
             <li><a href="/cardapio">cardapio</a>(API de Cardapio em JSON)</li>
            <li><a href="/alunos">/alunos</a>(API de Alunos em JSON)</li>
        </ul>
        `)
    }
    //ROTA 2: API de Cardapio (retorna JSON)
    else if (req.url === '/cardapio') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });

        const produtos = [
            { id: 1, nome: 'X-Node Burger', preco: 25.00},
            { id: 2, nome: 'Batata HTTP Cross', preco: 12.00},
            { id: 3, nome: 'Suco de Reposição 200 OK', preco: 8.00}
        ];
//Converte o objeto/array JavaScript em texto JSON antes de enviar
        res.end(JSON.stringify(produtos, null, 2));
    }
    //ROTA 3: API de Alunos (Retorna JSON)
    else if(req.url === '/alunos'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        const turma = [
            {id: 101, nome: 'Ana Silva', staus: 'Aprovada'},
            {id: 102, nome: 'Carlos Souza', status: 'Estudando'}
        ];            
        res.end(JSON.stringify(turma, null, 2));
        }
//ROTA 404: Pedido não encontrado no cardapio(404)
    else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<h1 style="color: red; font-family: sans-serif;"> Erro 404: Esse item não existe no cardápio</h1>');
    }
});

//Ativar o servidor para escuta das requisições
server.listen(PORTA, () =>{
    console.log('#----------------------------------#');
    console.log(`# 🚀 Servidor rodando com sucesso! #`);
    console.log(`#  💻 http://localhost:${PORTA}    #`);
    console.log('#----------------------------------#');
});
