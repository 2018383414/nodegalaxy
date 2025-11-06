# NodeGalaxy API

API Node.js simples para demonstração no GalaxyCloud.

## 🚀 Rotas Disponíveis

- `GET /` - Rota principal com informações da API
- `GET /health` - Health check do servidor
- `GET /api/users` - Lista de usuários de exemplo
- `POST /api/users` - Criar novo usuário

## 📦 Instalação

```bash
npm install
```

## ▶️ Executar

```bash
npm start
```

O servidor irá rodar na porta 3000 ou na porta definida pela variável de ambiente `PORT`.

## 📝 Exemplo de Uso

### Listar usuários
```bash
curl http://localhost:3000/api/users
```

### Criar usuário
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Novo Usuário", "email": "novo@example.com"}'
```

## ☁️ Deploy no GalaxyCloud

Esta API está pronta para ser deployada no GalaxyCloud. Certifique-se de que:

1. A variável de ambiente `PORT` será fornecida automaticamente
2. O comando `npm start` está configurado no `package.json`
3. Todas as dependências estão listadas no `package.json`
