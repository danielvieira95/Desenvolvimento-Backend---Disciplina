// server.js
const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configuração do middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret_key', // Altere para uma chave secreta mais segura
    resave: false,
    saveUninitialized: true,
}));

// Banco de dados simulado (em memória)
let users = [];

// Rota para exibir o formulário de login
app.get('/login', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    `);
});

// Rota para processar o login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        req.session.userId = user.username; // Armazena o ID do usuário na sessão
        return res.send('Login bem-sucedido!');
    }
    res.send('Usuário ou senha incorretos!');
});

// Rota para exibir o formulário de registro
app.get('/register', (req, res) => {
    res.send(`
        <form method="POST" action="/register">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>
    `);
});

// Rota para processar o registro
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Verifica se o usuário já existe
    if (users.find(u => u.username === username)) {
        return res.send('Usuário já existe!');
    }

    // Hash da senha
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashedPassword });
    res.send('Registro bem-sucedido! Você pode fazer login agora.');
});

// Rota para logout
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.send('Erro ao fazer logout.');
        res.send('Logout realizado com sucesso!');
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
