import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-BR')

export function relativeDateFormatter(date: string) {
  return moment(date).fromNow()
}

//
