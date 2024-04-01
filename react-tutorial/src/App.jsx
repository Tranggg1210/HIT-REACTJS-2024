import { useCallback, useMemo, useState } from 'react';
import './App.scss';
import Card from './components/Card/Card';
import Card2 from './components/Card2/Card2';
import Counter from './components/Counter/Counter'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import UserCardList from './components/UserCardList/UserCardList';
import dataUsers from './data/users.json';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import UseRef from './components/UseRef/UseRef';
import UseMemo from './components/UseMemo/UseMemo';
import Memo from './components/Memo/Memo';


const App = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const increment = () => {
    setCount(pre => pre + 1)
  }
  return (
    <div className="app flex justify-center items-center" >
      {/* <Card />
      <Counter /> */}
      {/* <Header />
      <Banner /> */}
      {/* <Profile /> */}
      {/* <UserCardList usersList={dataUsers} >
        <Search />
      </UserCardList>
      <Footer /> */}
      {/* <Card2 /> */}
      {/* <UseRef/> */}
      {/* <UseMemo/> */}
      <Memo onIncrement={increment} />
      <h1>{count}</h1>
    </div>
  )
}

export default App
