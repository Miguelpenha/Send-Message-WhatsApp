import { IRequestMessage } from '../types'
import sendMessage from '../services/sendMessage'

async function messageLocation(phoneToReceive: number, latitude: number, longitude: number, name: string, address: string) {
    const data: IRequestMessage =  {
        type: 'location',
        to: String(phoneToReceive),
        messaging_product: 'whatsapp',
        location: {
            name,
            address,
            latitude,
            longitude
        }
    }

    const message = await sendMessage(data)

    return message
}

export default messageLocation