import { IRequestMessage } from '../types'
import sendMessage from '../services/sendMessage'

async function messageLocation(phoneToReceive: number, params: { latitude: number, longitude: number, name: string, address: string }) {
    const data: IRequestMessage =  {
        type: 'location',
        to: String(phoneToReceive),
        messaging_product: 'whatsapp',
        location: {
            name: params.name,
            address: params.address,
            latitude: params.latitude,
            longitude: params.longitude
        }
    }

    const message = await sendMessage(data)

    return message
}

export default messageLocation