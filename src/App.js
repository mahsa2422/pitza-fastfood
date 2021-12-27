import './App.css';
import React,{Fragment, useEffect,useState} from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import {css} from '@emotion/core';
import Navbar from './Components/NavBar';
import './Components/index.css';
import Header from './Components/Header';
import Prdoucts from './Components/Prdoucts';
import Abouts from './Components/About';
import Contact from './Components/contact';

function App() {
  const [loading,setLoading]=useState(false);
  const override=css`
    display:block;
    border-color:red;
    margin-top:20%;
  `;
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
      console.log(loading)
    }, 5000);
  },[]);
  return (
    <div className="App">

      {
        loading?<PropagateLoader  size={40} color={"#b30000"} css={override} loading={loading}/>
        :
        <Fragment>
        <Navbar/>
        <Header/>
        <Prdoucts/>
        <Abouts/>
        <Contact/>
        </Fragment>
      }

     
    </div>
  );
}

export default App;
