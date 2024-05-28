import React, { useState } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  incrementCounter,
  decrementCounter,
  multiCounter,
  dividedCounter,
  exponentialCounter,
  squareCounter,
  factorialCounter,
  dienTichHinhTron,
  phuongTrinhBacNhat,
  phuongTrinhBac2,
  hePhuongTrinhBac1,
} from './store/counterSlice'

function App() {
  const [input, setInput] = useState(0)
  const [divider, setDivider] = useState(2)
  const [exponent, setExponent] = useState(0)
  const [r, setR] = useState(0)
  const [a, setA] = useState(0)
  const [a1, setA1] = useState(0)
  const [b1, setB1] = useState(0)
  const [c1, setC1] = useState(0)
  const [a2, setA2] = useState(0)
  const [b2, setB2] = useState(0)
  const [c2, setC2] = useState(0)

  const count = useSelector((state) => {
    return state.count.count
  })
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={() => dispatch(incrementCounter())}>Tăng</button>
      <br />
      <button onClick={() => dispatch(decrementCounter())}>Giảm</button>
      <br />
      <input
        placeholder='nhap so muon nhan'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(multiCounter(input))}>Nhân</button>
      <br />
      <input type='text' value={divider} onChange={(e) => setDivider(e.target.value)} />
      <button onClick={() => dispatch(dividedCounter(divider))}> Chia</button>
      <br />

      <input value={exponent} onChange={(e) => setExponent(e.target.value)} />
      <button onClick={() => dispatch(exponentialCounter(exponent))}>Lũy thừa</button>
      <br />
      <button onClick={() => dispatch(squareCounter())}>Căn bậc 2</button>
      <br />
      <button onClick={() => dispatch(factorialCounter())}>Giai thừa</button>
      <br />
      <input placeholder='nhap r' onChange={(e) => setR(e.target.value)} />
      <button onClick={() => dispatch(dienTichHinhTron(r))}> dien tich Circle</button>
      <br />
      <input value={a} onChange={(e) => setA(e.target.value)} />
      <button onClick={() => dispatch(phuongTrinhBacNhat(a))}>Phuong trinh bac 1</button>
      <br />
      <input placeholder='nhap vao he so a1' value={a1} onChange={(e) => setA1(e.target.value)} />
      <input placeholder='nhap vao he so b1' value={b1} onChange={(e) => setB1(e.target.value)} />
      <input placeholder='nhap vao he so c1' value={c1} onChange={(e) => setC1(e.target.value)} />
      <input placeholder='nhap vao he so a2' value={a2} onChange={(e) => setA2(e.target.value)} />
      <input placeholder='nhap vao he so b2' value={b2} onChange={(e) => setB2(e.target.value)} />
      <input placeholder='nhap vao he so c2' value={c2} onChange={(e) => setC2(e.target.value)} />
      <button onClick={() => dispatch(hePhuongTrinhBac1([a1, b1, c1, a2, b2, c2]))}>
        heptbac1
      </button>
    </div>
  )
}

export default App
