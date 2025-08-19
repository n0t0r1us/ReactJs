import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Hello from './components/Hello';
import TopMenu from './components/topmenu/TopMenu';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Banner from './components/banner/Banner';
import New_Ar from './components/contents/New_Ar';
import Deals from './components/contents/Deals';
import Best_Seller from './components/contents/Best_Seller';
import Benefits from './components/contents/Benefits';
import Blog from './components/contents/Blog';
import Sus from './components/contents/Sus';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className ="_069">
        <Header/>
        <TopMenu/>
        <Slider/>
        <Banner/>
        <New_Ar/>
        <Deals/>
        <Best_Seller/>
        <Benefits/>
        <Blog/>
        <Sus/>
        <Footer/>
      </div>
    );
  }
}

export default App;
