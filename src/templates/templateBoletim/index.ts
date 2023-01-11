import { IParams } from './type'
import generateData from './generateData'
import sendMessage from '../../services/sendMessage'

async function templateBoletim(phoneToReceive: number, params: IParams) {
    const data = generateData(phoneToReceive, params)
    
    const message = await sendMessage(data)

    return message
}

export default templateBoletim