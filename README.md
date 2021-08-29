<h1 align="center">EMP - Service Order Status</h1>

<p align="center">API para retorna o status das ordens de serviço na Eletro Motores Pajuçara.</p>

Esta aplicação faz parte do processo de criação de um chatbot utilizando o Telegram como canal e a plataforma Weni na elaboração dos diálogos/lógica do bot.

Configurações iniciais:

```javascript
HEADERS
usertoken:  AAFS2eYjGYfF8QqkJCFzz4MbEzlJ7OU5Tbs

.ENV
TOKEN: AAFS2eYjGYfF8QqkJCFzz4MbEzlJ7OU5Tbs
PORT: 3000
```

Instalação & execução:

```
npm i
npm start
```

URIs:
```javascript
  localhost: "http://localhost:<PORT>/<id>" // onde PORT é definida no .env (opcional)
                                            // e o id é um params que identifica o numero
                                            // da OS

  remote: "https://frozen-stream-65516.herokuapp.com/<id>"

  bot: "http://t.me/NiltonEMPBot" // Link para o bot no Telegram
```

Middleware que valida se a requisição possui no seu header o token de autorização:

```javascript
function checkAValidUserToken(req, res, next) {
  const {usertoken} = req.headers

  if(usertoken !== process.env.TOKEN){
    return res.status(404).json({
      error: 'Unautorized!'
    })
  }

  return next()
}
```

Rota que retorna a ordem de serviço existente da base e identificada por seu número de sequência <**:id**> :

```javascript
router.get('/:id', checkAValidUserToken, (req, res) => {
  const {id} = req.params

  if(!(id in database)){
    return res.status(404).send() // Caso não exista na base, retorne 404(not found)
  }

  return res.json(database[id])
})
```

<hr />


