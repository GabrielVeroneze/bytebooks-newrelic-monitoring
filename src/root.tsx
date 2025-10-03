import { StrictMode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ContextProvider } from '@/context/provider/ContextProvider'
import { errorLog } from '@/utils/errorLog'
import ErrorFallback from '@/components/ErrorFallback'
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@/styles/global.css'

interface RootProps {
    children: React.ReactNode
}

const Root = ({ children }: RootProps) => {
    return (
        <StrictMode>
            <ErrorBoundary fallback={<ErrorFallback />} onError={errorLog}>
                <ContextProvider>{children}</ContextProvider>
            </ErrorBoundary>
        </StrictMode>
    )
}

export default Root
