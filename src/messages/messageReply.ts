import { IRequestMessage } from '../types'
import sendMessage from '../services/sendMessage'

async function messageReply(phoneToReceive: number, params: { messageID: string }) {
    const data: IRequestMessage =  {
        type: 'text',
        to: String(phoneToReceive),
        messaging_product: 'whatsapp',
        text: {
            preview_url: false,
            body: 'Ok, iremos verificar isso'
        },
        context: {
            message_id: params.messageID
        }
    }

    const message = await sendMessage(data)

    return message
}

export default messageReply