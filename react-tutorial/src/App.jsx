import { useState } from 'react';
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


const App = () => {
  return (
    <div className="app flex justify-center items-center" >
      {/* <Card />
      <Counter /> */}
      <Header />
      <Banner />
      {/* <Profile /> */}
      <UserCardList usersList={dataUsers} >
        <Search />
      </UserCardList>
      <Footer />
      {/* <Card2 /> */}
    </div>
  )
}

export default App
