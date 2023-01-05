import { IRequestMessage } from '../types'
import sendMessage from '../services/sendMessage'

async function messageReaction(phoneToReceive: number, emoji: string, messageID: string) {
    const data: IRequestMessage =  {
        type: 'reaction',
        to: String(phoneToReceive),
        recipient_type: 'individual',
        messaging_product: 'whatsapp',
        reaction: {
            emoji: emoji,
            message_id: messageID
        }
    }

    const message = await sendMessage(data)

    return message
}

export default messageReaction