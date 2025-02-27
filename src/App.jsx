import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Components/Home/Home'
import CodeEditor from './Components/CodeEditor/CodeEditor'
import Login from './Components/Login/Login'
import { createContext, useState } from 'react'
export const userCtx = createContext();

function App() {


  const [userDetails, setUserDetails] = useState({
    DisplayName: "",
    email: "",
    photoURL: "",
  });


  const router = createBrowserRouter([{
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />
    },{
      path:"/login",
      element: <Login />
    }], 
  },
  {
    path:"/pen",
    element: <CodeEditor />
  }])

  return (
    <userCtx.Provider value={{userDetails, setUserDetails}}>
      <RouterProvider router={router} />
    </userCtx.Provider>
  )
}

export default App
