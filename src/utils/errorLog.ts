import type { ErrorInfo } from 'react'

export function errorLog(error: Error, info?: ErrorInfo) {
    console.error('Erro capturado:', error)
    console.error('Informações adicionais:', info)
}
