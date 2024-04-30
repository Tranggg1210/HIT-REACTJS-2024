import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  const arrayLink = [1,2,3,4,5,6]
  return (
    <div>
       <h1>List Products Pages</h1>
       <ul>
        {
            arrayLink.map(item =>( 
                <li><Link to={`/products/${item}`}>Product {item}</Link></li>
            ))
        }
       </ul>
       <Outlet/>
       <footer>footer</footer>
    </div>
  )
}

export default Products
