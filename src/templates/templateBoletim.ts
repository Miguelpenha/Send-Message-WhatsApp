import { IRequestMessage } from '../types'
import sendMessage from '../services/sendMessage'

interface IGrades {
    math: number
    history: number
    geography: number
    portuguese: number
}

function formatGrade(gradeRaw: number) {
    const grade = Number(gradeRaw).toFixed(2).replace('.', ',')

    return grade
}

async function templateBoletim(phoneToReceive: number, params: { image: string, nameResponsible: string, nameStudent: string, grades: IGrades }) {
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
                                link: params.image
                            }
                        }
                    ]
                },
                {
                    type: 'body',
                    parameters: [
                        {
                            type: 'text',
                            text: params.nameResponsible
                        },
                        {
                            type: 'text',
                            text: params.nameStudent
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.portuguese)
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.math)
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.history)
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.geography)
                        },
                        {
                            type: 'text',
                            text: params.nameStudent
                        }
                    ]
                }
            ]
        }
    }

    const message = await sendMessage(data)

    return message
}

export default templateBoletim