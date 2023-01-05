interface IContact {
    input: string
    wa_id: string
}

interface IMessage {
    id: string
}

export interface IResponseMessage {
    success?: boolean
    contacts?: IContact[]
    messages?: IMessage[]
    messaging_product?: 'whatsapp'
}