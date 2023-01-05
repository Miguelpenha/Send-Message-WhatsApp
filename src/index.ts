import 'dotenv/config'
import express, { Request } from 'express'
import messages from './messages'

const app = express()

app.get('/:number/messages', async (req, res) => {
    if (req.header('Authorization').replace('Bearer ', '') === process.env.TOKEN_ACCESS_API) {
        const number = Number(req.params.number)

        await messages(number)
        
        res.json({ send: true })
    } else {
        res.sendStatus(403)
    }
})

app.get('/webhooks', (req: Request<{}, {}, {}, { 'hub.verify_token': string, 'hub.challenge': number }>, res) => {
    const { 'hub.verify_token': verifyToken, 'hub.challenge': challenge } = req.query

    if (verifyToken === process.env.VERIFY_TOKEN) {
        res.send(challenge)
    } else {
        res.sendStatus(403)
    }
})

app.post('/webhooks', (req, res) => {
    console.log(req.body)

    res.send(req.body)
})

app.listen(process.env.PORT, () => console.log('Servidor rodando'))