import React from 'react'
import { useParams } from 'react-router-dom'

function DetailProduct() {
  const param = useParams();
  console.log(param);
  return (
    <div>
        <h1>DetailProduct <span style={{color: "red"}}>{param.id}</span> </h1>
    </div>
  )
}

export default DetailProduct
