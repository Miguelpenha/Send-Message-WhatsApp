import messageBoleto from './messageBoleto'
import messageReaction from './messageReaction'
import messageMedia from './messageMedia'
import messageLocation from './messageLocation'
import messageInteractive from './messageInteractive'
import messageReply from './messageReply'

async function messages(phoneToReceive: number) {
    console.log(await messageBoleto(phoneToReceive, new Date().toLocaleDateString('pt-br'), 'boletos/boleto.pdf'))
    console.log(await messageReaction(phoneToReceive, '\uD83D\uDE00', 'wamid.HBgMNTU4MTgzNzA1Nzc1FQIAERgSNjcyNDAxMTE0RTg2RkNCMzBBAA=='))
    console.log(await messageMedia(phoneToReceive, 'https://images.unsplash.com/photo-1672855570131-fa10d437bc86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'))
    console.log(await messageLocation(phoneToReceive, -7.9600057, -34.8925448, 'Instituto Educacional Josival Penha', 'Av. João Paulo II, 894 - Mirueira, Paulista - PE, 53405-190'))
    console.log(await messageInteractive(phoneToReceive))
    console.log(await messageReply(phoneToReceive, 'wamid.HBgMNTU4MTgzNzA1Nzc1FQIAERgSNjcyNDAxMTE0RTg2RkNCMzBBAA=='))
}

export default messages