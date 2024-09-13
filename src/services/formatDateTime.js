export function formatDateTime(dateTimeString) {
  // Ajustar o formato da string para compatibilidade com o objeto Date
  const [datePart, timePart] = dateTimeString.split(' ')
  const [year, month, day] = datePart.split('-').map(Number)
  const [hours, minutes] = timePart.split(':').map(Number)

  // Criar um objeto Date
  const date = new Date(year, month - 1, day, hours, minutes)

  // Formatar a data no padrão dd/mm/yy
  const formattedDate = date.toLocaleDateString('pt-BR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })

  // Formatar a hora no padrão hh:mm
  const formattedTime = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  // Retornar o resultado no formato desejado
  return `${formattedDate} às ${formattedTime}`
}