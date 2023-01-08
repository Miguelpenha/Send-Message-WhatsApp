import { IRequestMessage } from '../types'
import sendMessage from '../services/sendMessage'

async function messageBoletim(phoneToReceive: number, image: string, nameResponsible: string) {
    const data: IRequestMessage = {
        type: 'template',
        to: String(phoneToReceive),
        messaging_product: 'whatsapp',
        template: {
            name: 'boletim',
            language: {
                code: 'pt_BR'
            },
            components: [
                {
                    type: 'header',
                    parameters: [
                        {
                            type: 'image',
                            image: {
                                link: image
                            }
                        }
                    ]
                },
                {
                    type: 'body',
                    parameters: [
                        {
                            type: 'text',
                            text: nameResponsible
                        },
                        {
                            type: 'text',
                            text: nameResponsible
                        }
                    ]
                }
            ]
        }
    }

    const message = await sendMessage(data)

    return message
}

export default messageBoletim