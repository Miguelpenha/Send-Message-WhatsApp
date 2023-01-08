import 'dotenv/config'
import express, { Request } from 'express'
import messages from './messages'
import templates from './templates'

const app = express() 

app.use(express.json())

interface IMessagesParams {
    number: string
    typeMessage: keyof typeof messages
}

app.get('/:number/messages/:typeMessage', async (req: Request<IMessagesParams>, res) => {
    if (req.header('Authorization').replace('Bearer ', '') === process.env.TOKEN_ACCESS_API) {
        const { number, typeMessage } = req.params
        
        try {
            const message = await messages[typeMessage](Number(number), req.body)
            
            res.json({ send: true, message })
        } catch (error) {
            console.log(error)

            res.json({ send: false })
        }
    } else {
        res.sendStatus(403)
    }
})

interface ITemplatesParams {
    number: string
    typeTemplate: keyof typeof templates
}

app.get('/:number/templates/:typeTemplate', async (req: Request<ITemplatesParams>, res) => {
    if (req.header('Authorization').replace('Bearer ', '') === process.env.TOKEN_ACCESS_API) {
        const { number, typeTemplate } = req.params
        
        try {
            const message = await templates[typeTemplate](Number(number), req.body)
            
            res.json({ send: true, message })
        } catch (error) {
            console.log(error)

            res.json({ send: false })
        }
    } else {
        res.sendStatus(403)
    }
})

app.listen(process.env.PORT, () => console.log('Servidor rodando'))