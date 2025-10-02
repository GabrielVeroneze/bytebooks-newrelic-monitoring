export function errorLog(error: Error, info: { componentStack: string }) {
    console.error('Erro capturado:', error)
    console.error('Informações adicionais:', info)
}
