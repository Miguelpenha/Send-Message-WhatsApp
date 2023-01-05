import { IRequestMessage } from '../../types'

const sections: IRequestMessage['interactive']['action']['sections'] = [
    {
        title: 'Pagamentos',
        rows: [
            {
                id: 'payMonthlyPayment',
                title: 'Pagar mensalidade',
                description: 'Pagar uma mensalidade, através de pix ou boleto'
            },
            {
                id: 'CheckAMonthlyPayment',
                title: 'Verificar mensalidade',
                description: 'Verificar uma mensalidade específica de um mês'
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
    },
    {
        title: 'Outros',
        rows: [
            {
                id: 'contact',
                title: 'Contato com a diretora',
                description: 'Caso tenha algum assunto pendente, pode falar com a diretora'
            },
            {
                id: 'reclamationOrSuggestion',
                title: 'Reclamação ou sugestão',
                description: 'Você pode relatar um problema ou fazer uma sugestão'
            }
        ]
    }
]

export default sections