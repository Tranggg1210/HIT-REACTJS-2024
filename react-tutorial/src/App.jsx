import { Route, Routes, Link, NavLink, useRoutes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/Contact/Contact'
import Products from './pages/Product/Products'
import DetailProduct from './pages/DetailProduct/DetailProduct'

const App = () => {
  // const login = localStorage.getItem('login');

  const router = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about-us',
      element: <AboutUs/>
    },
    {
      path: '/products',
      element: <Products/>,
      children: [
        {
          path: ':id',
          element: <DetailProduct/>
        }
      ]
    }
  ])

  return router;

  // return (
  //   <div>
  //     {/* <h1>{login ? "da login" : "chua login"}</h1>
  //     <Login/> */}
  //     
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about-us' element={<AboutUs />} />
  //       <Route path='/contact' element={<Contact />} />
  //       <Route path='/products' element={<Products/>}>
  //         <Route path=':id' element={<DetailProduct/>}/>
  //       </Route>
  //       <Route path='/*' element={<h1>Not Found</h1>} />
  //     </Routes>

  //   </div>
  // )
}

export default App
