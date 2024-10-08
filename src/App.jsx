import Router from './Route'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './redux/store'
const queryClient = new QueryClient()
function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {/* <ToastContainer /> */}
          <Router />
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
