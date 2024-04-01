import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const handleAdd = () => {
        setProducts([...products, {
            id: Math.random(),
            name,
            price: +price
        }])
    }

    const total = useMemo(() => {
        return products.reduce((pre, cur) => pre + cur.price, 0)
    },[products])

  return (
    <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="" id="name" onChange={e => setName(e.target.value)} /> <br />
        <label htmlFor="price" >Price: </label>
        <input type="text" name="" id="price" onChange={e => setPrice(e.target.value)}  /> <br />
        <button onClick={handleAdd}>Add</button>
        <h4>Total: {total}</h4>
        {
            products.length > 0 && products.map((product) => (
                <p key={product.id}>
                    {product.name} - {product.price}
                </p>
            ) )
        }
    </div>
  )
}

export default UseMemo