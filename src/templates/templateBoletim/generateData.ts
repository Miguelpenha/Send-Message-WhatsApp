import { IParams } from './type'
import { IRequestMessage } from '../../types'
import formatGrade from './formatGrade'
import selectNote from './selectNote'

function generateData(phoneToReceive: number, params: IParams): IRequestMessage {
    return {
        type: 'template',
        to: String(phoneToReceive),
        messaging_product: 'whatsapp',
        template: {
            name: 'notas_escolares',
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
                            text: params.responsible
                        },
                        {
                            type: 'text',
                            text: String(params.unit)
                        },
                        {
                            type: 'text',
                            text: params.student
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
                            text: formatGrade(params.grades.sciences)
                        },
                        {
                            type: 'text',
                            text: formatGrade(params.grades.english)
                        },
                        {
                            type: 'text',
                            text: selectNote(params)
                        },
                    ]
                },
                {
                    index: 1,
                    type: 'button',
                    sub_type: 'URL',
                    parameters: [
                        {
                            type: 'text',
                            text: params.urlBankSlip
                        }
                    ]
                }
            ]
        }
    }
}

export default generateData