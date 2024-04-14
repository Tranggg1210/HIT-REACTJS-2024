import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState("");

  const sumPrice = useMemo(() => {
    return products.reduce((pre, cur) => {
      return pre + Number(cur.price);
    }, 0)
  }, [products])
  
  const addProduct = () => {
    setProducts([...products, {
        name, 
        price
    }])
  }
  return (
    <div>
      <label htmlFor=''>Name: </label>
      <input type='text' onChange={e => setName(e.target.value)} /> <br />
      <label htmlFor=''>Price: </label>
      <input type='text' name='' id='' onChange={e => setPrice(e.target.value)}/> <br />
      <button onClick={addProduct}>Add</button>
      <h3>Sum: {sumPrice} </h3>
      <ul>
        {
            products && products.map((product, index) => (
                <li key={index}>{product.name} - {product.price}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default UseMemo
