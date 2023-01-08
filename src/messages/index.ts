import messageReaction from './messageReaction'
import messageMedia from './messageMedia'
import messageLocation from './messageLocation'
import messageInteractive from './messageInteractive'
import messageReply from './messageReply'

const messages = {
    media: messageMedia,
    reply: messageReply,
    reaction: messageReaction,
    location: messageLocation,
    interactive: messageInteractive
}

export default messages