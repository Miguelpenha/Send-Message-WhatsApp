import { IRequestMessage } from '../../types'

const sections: IRequestMessage['interactive']['action']['sections'] = [
    {
        title: 'Pagamentos',
        rows: [
            {
                id: 'boleto',
                title: 'Pagar mensalidade',
                description: 'Pagar uma mensalidade, através de pix ou boleto'
            }
        ]
    },
    {
        title: 'Aluno',
        rows: [
            {
                id: 'boletim',
                title: 'Boletim',
                description: 'Gerar boletim do aluno, o formato poder ser em pdf ou xlsx'
            },
            {
                id: 'declaration',
                title: 'Declaração',
                description: 'Gerar uma declaração para o aluno, o formato é em pdf'
            }
        ]
    }
]

export default sections