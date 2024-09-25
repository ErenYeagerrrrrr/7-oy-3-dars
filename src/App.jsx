import { Route, Routes, RouterProvider, BrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/main-layout'
import HomePage from './pages/home'
import Login from './pages/login'

function App() {

  // const router = () => {
  //   return (
  //     <Routes>
  //       <Route path="/" element={<MainLayout />} >
  //         <Route index element={<HomePage />} />
  //         <Route path='/login' element={<Login />} />
  //       </Route>
  //     </Routes>

  //   )
  // }

  return (
    <>
      {/* <RouterProvider router={router()} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
