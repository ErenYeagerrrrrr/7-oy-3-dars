import Router from './Route'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer/>
        <Router />
      </QueryClientProvider>
    </>
  )
}

export default App
