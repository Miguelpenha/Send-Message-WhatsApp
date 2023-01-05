import 'dotenv/config'
import express from 'express'
import messages from './messages'

const app = express()

app.get('/:number/messages', async (req, res) => {
    const number = Number(req.params.number)

    await messages(number)
    
    res.json({ send: true })
})

app.listen(process.env.PORT, () => console.log('Servidor rodando'))