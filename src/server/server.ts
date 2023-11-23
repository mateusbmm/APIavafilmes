import Express from "express";


const server = Express();

// Aqui vão as rotas do servidor (GET, POST, ETC...)

//são passados dois parametros aqui, o caminho e uma função a ser executada quando aquele caminho for chamado
server.get('/', (req, res) => {
    return res.send('olá, pessoal');
});




export { server };

