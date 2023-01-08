import { IRequestMessage } from '../types'
import sendMessage from '../services/sendMessage'

async function messageMedia(phoneToReceive: number, params: { imageURL: string }) {
    const data: IRequestMessage =  {
        type: 'image',
        to: String(phoneToReceive),
        recipient_type: 'individual',
        messaging_product: 'whatsapp',
        image: {
            link: params.imageURL
        }
    }

    const message = await sendMessage(data)

    return message
}

export default messageMedia