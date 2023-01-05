import 'dotenv/config'
import express, { Request } from 'express'
import messages from './messages'

const app = express()

app.get('/:number/messages', async (req, res) => {
    const number = Number(req.params.number)

    await messages(number)
    
    res.json({ send: true })
})

app.post('/webhooks', (req: Request<{}, {}, {}, { 'hub.verify_token': string, 'hub.challenge': number }>, res) => {
    const { 'hub.verify_token': verifyToken, 'hub.challenge': challenge } = req.query

    if (verifyToken === process.env.VERIFY_TOKEN) {
        
    }

    console.log(req.body)

    res.send(challenge)
})

app.listen(process.env.PORT, () => console.log('Servidor rodando'))