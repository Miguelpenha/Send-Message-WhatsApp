import { IRequestMessage } from '../types'
import sendMessage from '../services/sendMessage'

async function messageBoleto(phoneToReceive: number, dateBoleto: string, urlBoleto: string) {
    const data: IRequestMessage = {
        type: 'template',
        to: String(phoneToReceive),
        messaging_product: 'whatsapp',
        template: {
            name: 'boleto',
            language: {
                code: 'pt_BR'
            },
            components: [
                {
                    type: 'header',
                    parameters: [
                        {
                            type: 'text',
                            text: dateBoleto
                        }
                    ]
                },
                {
                    index: 0,
                    type: 'button',
                    sub_type: 'URL',
                    parameters: [
                        {
                            type: 'text',
                            text: urlBoleto
                        }
                    ]
                }
            ]
        }
    }

    const message = await sendMessage(data)

    return message
}

export default messageBoleto